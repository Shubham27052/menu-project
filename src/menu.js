import React, { useState } from "react";
import Dish from "./dish";
import data from "./data";

const Menu = () => {
  const [list, setList] = useState(data);

  const all = () => {
    setList(data);
  };

  const brkfst = () => {
    const breakfast = data.filter((item) => {
      if (item.category == "breakfast") {
        return item;
      }
    });

    setList(breakfast);
  };

  const lnch = () => {
    const lunch = data.filter((item) => {
      if (item.category == "lunch") {
        return item;
      }
    });

    setList(lunch);
  };

  const shk = () => {
    const shakes = data.filter((item) => {
      if (item.category == "shakes") {
        return item;
      }
    });

    setList(shakes);
  };

  return (
    <>
      <div className="w-full h-full flex justify-center bg-yellow-[25]">
        <div className="w-12/12 h-auto flex flex-col items-center">
          <h1 className="font-sans font-bold text-5xl tracking-[3px] text-sky-900 my-12">
            Our Menu
          </h1>
          <section className="w-8/12 sm:w-5/12 flex flex-row justify-evenly py-12 pt-0 lg:w-4/12">
            <button
              className=" p-2  rounded-md font-sans py-1 text-yellow-600 tracking-[1px] text-basis hover:text-white hover:bg-yellow-600 transition ease-in duration-300 text-lg  "
              onClick={all}
            >
              All
            </button>
            <button
              className=" p-2  rounded-md font-sans py-1 text-yellow-600 tracking-[1px] text-basis hover:text-white hover:bg-yellow-600 transition ease-in duration-300 text-lg "
              onClick={brkfst}
            >
              Breakfast
            </button>
            <button
              className=" p-2  rounded-md font-sans py-1 text-yellow-600 tracking-[1px] text-basis hover:text-white hover:bg-yellow-600 transition ease-in duration-300  text-lg"
              onClick={lnch}
            >
              Lunch
            </button>
            <button
              className=" p-2  rounded-md font-sans py-1 text-yellow-600 tracking-[1px] text-basis hover:text-white hover:bg-yellow-600 transition ease-in duration-300 text-lg "
              onClick={shk}
            >
              Shakes
            </button>
          </section>

          <section className="w-[115%] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:w-9/12 lg:gap-x-[40px] ">
            {list.map((item) => {
              return (
                <div className="w-[100%] flex justify-center items-center my-5 ">
                  <Dish {...item} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Menu;
