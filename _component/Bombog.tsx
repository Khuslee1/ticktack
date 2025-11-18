"use client";
import * as React from "react";
type CaryDataType = {
  id: string,
  img: string,
  Name: string,
  point: number,
  text: string,
}

type BumbugProps = {
  CaryData:CaryDataType[];
  current:number;
}

export const Bombog = ({ CaryData, current } : BumbugProps) => {
  return (
    <div className="absolute top-[555px] z-50 flex gap-1 items-center">
      {CaryData.map((ele, index) => {
        return (
          <div
            key={ele.id}
            className={
              index == current
                ? `w-2 h-2 rounded-full bg-[#940808]`
                : `w-2 h-2 rounded-full bg-[#0d0101cc]`
            }
          ></div>
        );
      })}
    </div>
  );
};
