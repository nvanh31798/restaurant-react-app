import React from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [onScrollClicked, setOnScrollClicked] = useState(true);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="flex flex-col w-full h-auto">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold uppercase relative
                 before:absolute before:rounded-xl before:content before:h-1 before:-bottom-2 text-headingColor
                 before:left-0 before:w-32 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
                 duration:100 ease-in-out"
          >
            Our fresh and healthy food
          </p>

          <div className="flex items-center hiddem md:flex gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 cursor-pointer flex items-center justify-center hover:shadow-lg"
              onClick={() => {
                setOnScrollClicked(!onScrollClicked);
                setScrollValue(-400);
              }}
            >
              <MdChevronLeft className="text-base text-white text-lg"></MdChevronLeft>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 cursor-pointer flex items-center justify-center hover:shadow-lg"
              onClick={() => {
                setOnScrollClicked(!onScrollClicked);
                setScrollValue(400);
              }}
            >
              <MdChevronRight className="text-white text-lg"></MdChevronRight>
            </motion.div>
          </div>
        </div>

        <RowContainer
          onScrollClicked={onScrollClicked}
          scrollValue={scrollValue}
          flag={true}
          data={foodItems}
        />
      </section>

      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
