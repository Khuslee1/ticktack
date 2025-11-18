"use client";
import { HiArrowSmRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { GoStarFill } from "react-icons/go";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const type: string[] = ["Upcoming", "Popular", "Top Rated"];
// const categories = [
//   {
//     title: "Upcoming",
//     path: "upcoming",
//   },
//   {
//     title: "Popular",
//     path: "Popular",
//   },
//   {
//     title: "Top-rated",
//     path: "Top_rated",
//   },
// ];
const movie: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mockCarouselData = [
//   [
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//   ],
//   [
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//   ],
//   [
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//     {
//       id: "",
//       img: "",
//       title: "",
//       rate: 3,
//     },
//   ],
// ];

export const Mainbody = () => {
  const router = useRouter();
  return type.map((ele, i) => {
    return (
      <div
        key={i}
        className="w-screen pl-20 pr-20 pt-20 flex flex-col items-center"
      >
        <div className="flex justify-between items-center w-[1277px]">
          <h1 className="font-sans text-[32px] font-semibold">{ele}</h1>
          <Button
            variant={`outline`}
            className={`border-none flex gap-2 shadow-none`}
            onClick={() =>
              router.push(
                i == 0 ? "/upcoming" : i == 1 ? "/popular" : "/topRated"
              )
            }
          >
            <span className="font-semibold text-[14px] font-sans">
              See More
            </span>
            <HiArrowSmRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="w-[1277px] h-[910px] flex gap-8 flex-wrap py-10">
          {movie.map((el, i) => {
            return (
              <Card key={i} className={`h-[439px] w-[229px] pt-0`}>
                <CardHeader className={`h-[340] w-full rounded-t-lg p-0`}>
                  img tag
                </CardHeader>
                <CardFooter className={`flex-col flex gap-0.5`}>
                  <div className="w-full flex items-center">
                    {" "}
                    <GoStarFill className="text-[#FDE047]" />{" "}
                    <p className="font-semibold text-[14px]">{el}</p>
                    <p className="text-[12px] text-gray-500">/10</p>
                  </div>

                  <p className="font-sans text-[18px] font-normal w-full">
                    Title
                  </p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    );
  });
};
