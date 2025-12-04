"use client";
import { BumbugProps } from "@/_type/types";

export const Bombog = ({ CaryData, current }: BumbugProps) => {
  return (
    <div className="absolute top-[555px] z-50 flex gap-1 items-center">
      {CaryData.map((ele, index) => {
        return (
          <div
            key={ele.id}
            className={
              index == current
                ? `w-2 h-2 rounded-full bg-[#FFFFFF]`
                : `w-2 h-2 rounded-full bg-[#FFFFFFCC]`
            }
          ></div>
        );
      })}
    </div>
  );
};
