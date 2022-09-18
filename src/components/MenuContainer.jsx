import React from "react";
import { IoFastFood } from "react-icons/io5";
import { useState } from "react";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  return (
    <section className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold uppercase relative
                 before:absolute before:rounded-xl before:content before:h-1 before:-bottom-2 text-headingColor
                 before:left-0 before:w-32 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
                 duration:100 ease-in-out mr-auto"
        >
          Our Hot Dishes
        </p>
        <div
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll
     scrollbar-none"
        >
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={() => setFilter(category.urlParamName)}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } drop-shadow-lg w-24 min-w-[94px] h-28 cursor-pointer rounded-lg flex flex-col gap-3 items-center justify-center
                 hover:bg-cartNumBg`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === category.urlParamName
                      ? "bg-card"
                      : "bg-cartNumBg"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={` ${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-card"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
            <RowContainer flag={false}/>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
