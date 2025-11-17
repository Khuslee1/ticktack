"use client";
import * as React from "react";

export const Bombog = ({ CaryData }) => {
  return (
    <div className="absolute top-[555px] z-50 flex gap-1">
      {CaryData.map((ele, index) => {
        return (
          <div
            key={ele.id}
            className={"w-2 h-2 rounded-full bg-gray-500"}
          ></div>
        );
      })}
    </div>
  );
};
