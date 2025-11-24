"use client";
import * as React from "react";
type CaryDataType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type BumbugProps = {
  CaryData: CaryDataType[];
  current: number;
};

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
