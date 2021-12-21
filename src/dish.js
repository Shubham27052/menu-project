import React from "react";
import data from "./data";
const Dish = ({ id, title, category, price, img, desc }) => {
  return (
    <>
      <div className="w-8/12 h-auto  flex flex-col sm:flex-row lg:w-full">
        <div className=" w-full sm:mr-5 sm:w-full ">
          <img
            src={img}
            className=" w-full h-[170px] object-cover border-4 border-yellow-600 rounded-md sm:h-[200px] sm:w-full lg:h-[150px]"
          ></img>
        </div>
        <div>
          <section className=" flex flex-row justify-between py-3 pb-[4px] border-b-2 border-dotted border-gray-400 sm:py-0 sm:pb-[4px]">
            <h3 className=" font-sans font-bold tracking-[2px] text-large ">
              {title}
            </h3>

            <span className="font-sans text-yellow-600 ">${price}</span>
          </section>

          <p className=" text-xs py-4 text-gray-500 font-sans tracking-[1.5px] lg:text-base">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Dish;

{
  /* <div className="w-[100%] flex justify-center items-center my-5 "><Dish /></div> */
}
