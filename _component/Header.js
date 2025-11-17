"use client";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { TbMovie } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const genre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div
      className={`w-screen h-[59px] flex items-center justify-center  pl-4 pr-4 sticky top-0 left-0 z-50 ${
        !dark ? "bg-white" : "bg-black"
      }`}
    >
      <div className="w-7xl h-9 flex justify-between">
        <div className="flex gap-2 items-center">
          <TbMovie className="w-5 h-5 text-[#4338CA] " />
          <p className="text-4 font-sans text-[#4338CA] font-bold italic">
            Movie Z
          </p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-9 w-[97px] rounded-md  flex justify-center items-center gap-2">
              <div
                variant={`outline`}
                className="text-[14px] font-medium flex border rounded-md h-full px-3 items-center gap-1"
              >
                {" "}
                <HiChevronDown className="size-4" />
                Genre
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`p-5 gap-4`} align="start">
              <div className="flex flex-col gap-1 pb-4 ">
                <DropdownMenuLabel className="font-sans text-[24px] font-semibold p-0">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel className="font-sans text-[16px] p-0 font-normal">
                  See lists of movies by genre
                </DropdownMenuLabel>
              </div>
              <div className="flex gap-4 flex-wrap w-[537px] pt-4 border-t">
                {genre.map((ele, i) => {
                  return (
                    <Button key={i} variant="outline" className={`h-5 p-0.5`}>
                      {" "}
                      <span className="text-[14px]  font-medium">{ele}</span>
                      <HiChevronRight className="size-4" />
                    </Button>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative w-[379px] h-9">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input
              placeholder={`Search..`}
              className="w-[379px] h-9 pl-9 pr-3"
            />
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setDark(!dark);
          }}
          className="h-9 w-9 p-0 rounded-md"
        >
          {" "}
          <IoMoonOutline className="h-3 w-3 " />
        </Button>
      </div>
    </div>
  );
};
