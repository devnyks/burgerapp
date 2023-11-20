import React from "react";
import Data from "../db/db";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <>
      <div className="flex flex-col items-center p-20 bg-red-700">
        <h1 className="text-5xl text-center font-bold text-white pb-16">
          Burgerlerimiz
        </h1>
        <ul className="flex justify-center flex-wrap gap-16">
          {Data.map((data, index) => {
            return (
              <MenuItem
                key={index}
                image={data.image}
                name={data.name}
                content={data.content}
                price={data.price}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;