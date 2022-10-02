import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartContainer = () => {
  const [{ cartItems, cartShow }, dispatch] = useStateValue();

  const removeCartItem = (itemId) => {
    cartItems.splice(
      cartItems.findIndex((item) => {
        return item.id === itemId;
      }),
      1
    );
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const cleanCart = () => {
    const clearCart = [];
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: clearCart,
    });
    localStorage.setItem("cartItems", JSON.stringify(clearCart));
  };

  const addToCart = (itemId) => {
    cartItems.push(
      cartItems.find((item) => {
        return item.id === itemId;
      })
    );
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const showCart = () => {
    dispatch({ type: actionType.SET_CART_SHOW, cartShow: !cartShow });
  };

  let getSameItemsCart = (itemId) => {
    return cartItems.filter((item) => {
      return item.id === itemId;
    }).length;
  };

  const uniqItems = [...new Set(cartItems)];
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4">
        <motion.div onClick={showCart} whileTap={{ scale: 0.75 }}>
          <MdOutlineArrowBack className="text-textColor text-3xl" />
        </motion.div>

        <p className="textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          onClick={() => cleanCart()}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-base text-textColor"
        >
          Clear <RiRefreshFill />{" "}
        </motion.p>
      </div>

      {/* bottom section */}
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* cart Item */}
          {uniqItems &&
            uniqItems.length > 0 &&
            uniqItems.map((cartItem) => (
              <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                <img
                  src={cartItem.imageURL}
                  className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                  alt=""
                />

                {/* name section */}
                <div className="flex flex-col gap-2">
                  <p className="text-base text-gray-50">{cartItem.title}</p>
                  <p className="text-sm block text-gray-300 font-semibold">
                    {cartItem.price}
                  </p>
                </div>

                {/* button section */}
                <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() => removeCartItem(cartItem.id)}
                  >
                    <BiMinus className="text-gray-50" />
                  </motion.div>
                  <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                    {getSameItemsCart(cartItem.id)}
                  </p>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() => addToCart(cartItem.id)}
                  >
                    <BiPlus className="text-gray-50" />
                  </motion.div>
                </div>
              </div>
            ))}
        </div>
        {/* cart total section */}
        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg">$ 5.25</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">$ 2.5</p>
          </div>

          <div className="w-full boder-gray-600 border-b"></div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font-semibold">Total</p>
            <p className="text-gray-200 text-xl font-semibold">$ 7.75</p>
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
          >
            Check Out
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
