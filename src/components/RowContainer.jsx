import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import NotFound from "../img/NotFound.svg";

const RowContainer = ({ onScrollClicked, scrollValue, flag, data }) => {
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [onScrollClicked]);

  return (
    <div
      ref={rowContainer}
      className={`w-ful flex items-center gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : " overflow-x-hidden"
      }`}
    >
      {(data?.length >0 ) ? (
        data.map((item) => (
          <div
            key={item.id}
            className="ml-3 flex-wrap gap-3 w-300 md:w-340 bg-cardOverlay rounded-lg p-2 h-auto backdrop-blur-lg my-12 hover:drop-shadow-xl hover:opacity-0.5"
          >
            <div className="w-full w-300 md:min-w-[300px] md:flex md:flex-col items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageURL}
                alt=""
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
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
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-textColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex items-center justify-center ">
          <img src={NotFound} className="w-full h-30"/>
          <p className="absolute text-red-500 md:text-2xl text-xs">Items Not Found</p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
