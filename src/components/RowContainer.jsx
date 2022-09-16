import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data}) => {
  console.log('data',data)
  return (
    <div
      className={`w-ful flex items-center my-12 ${
        flag ? "overflow-x-scroll" : " overflow-x-hidden"
      }`}
    >
      {data && 
      data.map((item) => (
        <div key={item.id} className="ml-3 flex-wrap gap-3 w-300 md:w-340 bg-cardOverlay rounded-lg p-2 h-auto backdrop-blur-lg my-12 hover:drop-shadow-xl hover:opacity-0.5">
        <div className="w-full w-300 md:min-w-[300px] md:flex md:flex-col items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-92b53.appspot.com/o/Images%2F1663118156394-r2.png?alt=media&token=f3f4bfe4-807a-4907-a3a5-676d0b123d4e"
            alt=""
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 flex cursor-pointer rounded-full bg-pink-700 justify-center items-center hover:shadow-lg"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Chocolate & Vanila
          </p>
          <p className="mt-1 text-sm text-gray-500">45 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-textColor font-semibold">
              <span className="text-sm text-red-500">$</span>5.25
            </p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default RowContainer;
