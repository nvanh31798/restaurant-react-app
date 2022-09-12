import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              className="w-full h-full object-contain bg-white"
              src={Delivery}
              alt=""
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery In{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          omnis id nemo vero voluptate, aut placeat atque rem illum.
          Necessitatibus ipsum laboriosam laborum, perferendis adipisci
          accusamus libero molestiae minus distinctio?
        </p>

        <button
          className="md:w-auto bg-gradient-to-br from-orange-200 to-orange-600 w-full p-4 rounded-lg hover:shadow-md transition-all duration-100 ease-in-out"
          type="button"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={HeroBg}
            className="ml-auto h-420 w-full lg:w-auto lg:h-685"
            alt="hero-bg"
          />
          <div className="w-full h-full absolute flex top-0 left-0 items-center justify-center py-4 gap-4 flex-wrap">
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className="lg:w-190 p-4 bg-red-300 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col justify-center items-center drop-shadow-xs"
                >
                  <img src={n.imageSrc} className="w-20 lg:w-40 lg:-mt-20 md:-mt-16" alt="" />
                  <p className="text-base lg:text-xl font-semibold text-textColor">
                    {n.name}
                  </p>

                  <p className="text-base md:text-xs lg:text-md text-lighttextGray my-3">
                    {n.decp}
                  </p>

                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-500">$</span> {n.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
