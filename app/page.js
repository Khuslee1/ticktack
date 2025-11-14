"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Footer } from "@/_component/Footer";
import { Mainbody } from "@/_component/Mainbody";
import { Caru } from "@/_component/Caru";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { HiChevronDown } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  // const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [turn, setTurn] = useState(1);
  // const [win, setWin] = useState(0);
  // const conditionWin = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ];
  // useEffect(() => {
  //   for (let i = 0; i < conditionWin.length; i++) {
  //     const [a, b, c] = conditionWin[i];
  //     if (arr[a] == 1 && arr[b] == 1 && arr[c] == 1) {
  //       setWin(1);
  //       return;
  //     }
  //     if (arr[a] == 2 && arr[b] == 2 && arr[c] == 2) {
  //       setWin(2);
  //       return;
  //     }
  //   }
  // }, [arr]);
  // const budagch = (llr) => {
  //   if (arr[llr] !== 0 || win !== 0 || !arr.includes(0)) return;
  //   if (turn === 1) {
  //     setTurn(2);
  //     const newArr = arr.map((el, i) => (llr === i ? 1 : el));
  //     setArr(newArr);
  //   } else {
  //     setTurn(1);
  //     const newArr = arr.map((el, i) => (llr === i ? 2 : el));
  //     setArr(newArr);
  //   }
  // };
  // const restart = () => {
  //   if (win == 1 || win == 2 || !arr.includes(0)) {
  //     setTurn(1);
  //     setWin(0);
  //     setArr([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   } else {
  //     setTurn(turn);
  //     setWin(win);
  //     setArr(arr);
  //   }
  // };
  // const declare = () => {
  //   if (win == 1) return "Blue wins 👨🏿‍🎤";
  //   if (win == 2) return "Red wins 🦸🏿‍♂️";
  //   if (!arr.includes(0)) return "Tie 🧔🏿‍♀️";
  //   return "";
  // };
  // const turnDecider = () => {
  //   if (win !== 0 || !arr.includes(0)) return;
  //   if (turn == 1) return "Blue 🧞‍♂️";
  //   return "Red 🧞‍♀️";
  // };
  // return (
  //   <div className="h-screen w-screen flex justify-center items-center flex-col gap-3">
  //     <h1
  //       className={`${
  //         turn == 1 && win == 0
  //           ? "text-blue-500"
  //           : turn == 2 && win == 0
  //           ? "text-red-500"
  //           : win == 1
  //           ? "text-blue-500"
  //           : win == 2
  //           ? "text-red-500"
  //           : "text-black"
  //       }`}
  //     >
  //       {win !== 0 || !arr.includes(0) ? declare() : turnDecider()}
  //     </h1>
  //     <div className="h-[150px] w-[150px] border border-black flex flex-wrap justify-center items-center">
  //       {arr.map((ele, i) => {
  //         return (
  //           <div
  //             key={i}
  //             className={`h-[49px] w-[49px] border border-black ${
  //               ele == 1 ? "bg-blue-500" : ele == 2 ? "bg-red-500" : "bg-white"
  //             }`}
  //             onClick={() => {
  //               budagch(i);
  //             }}
  //           ></div>
  //         );
  //       })}
  //     </div>
  //     <Button variant="outline" onClick={restart}>
  //       Restart
  //     </Button>
  //   </div>
  // );
  // const [count, setCount] = useState(0);
  // const [min, setMin] = useState(0);
  // const [hour, setHour] = useState(0);
  // const [sec, setSec] = useState(0);
  // const [start, setStarted] = useState(false);
  // const [int, setInt] = useState();
  // useEffect(() => {
  //   if (!start) return;
  //   const id = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 100);
  //   setInt(id);
  // }, [start]);
  // useEffect(() => {
  //   setHour(Math.floor(count / 3600));
  //   setMin(Math.floor((count % 3600) / 60));
  //   setSec(Math.floor((count % 3600) % 60));
  // }, [count]);
  // return (
  //   <div className="h-screen w-screen flex justify-center items-center">
  //     <div className="h-[500px] w-[1000px] flex flex-col p-10 border border-black justify-center items-center">
  //       <div className="flex gap-5">
  //         <div className="text-[100px]">{hour < 10 ? "0" + hour : hour}</div>
  //         <div className="text-[100px]">:{min < 10 ? "0" + min : min}</div>
  //         <div className="text-[100px]">:{sec < 10 ? "0" + sec : sec}</div>
  //       </div>
  //       <div className="flex gap-10">
  //         <Button
  //           onClick={() => {
  //             setStarted(true);
  //           }}
  //         >
  //           start
  //         </Button>
  //         <Button
  //           onClick={() => {
  //             setStarted(false);
  //             clearInterval(int);
  //           }}
  //         >
  //           stop
  //         </Button>
  //         <Button
  //           onClick={() => {
  //             setStarted(false);
  //             setCount(0);
  //             setHour(0);
  //             setMin(0);
  //             setSec(0);
  //             clearInterval(int);
  //           }}
  //         >
  //           restart
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );

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
  const type = ["Upcoming", "Popular", "Top Rated"];
  const movie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const mockCarouselData = [
    {
      img: "",
      tittle: "",
      description: "",
      rate: 3,
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-[59px] flex items-center justify-center  pl-4 pr-4">
        <div className="w-7xl h-9 flex justify-between">
          <div className="flex gap-2 items-center">
            <img className="w-5 h-5" src=".\Icon.png" />
            <p className="text-4 font-sans text-[#4338CA] font-bold italic">
              Movie Z
            </p>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="h-9 w-[97px] rounded-md border border-[#E4E4E7] flex justify-center items-center gap-2">
                <HiChevronDown className="size-4" />
                <span className="text-[14px] text-[#18181B] font-medium">
                  Genre
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`p-5 gap-4`} align="start">
                <div className="flex flex-col gap-1 pb-4">
                  <DropdownMenuLabel className="font-sans text-[24px] font-semibold p-0">
                    Genres
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="font-sans text-[16px] p-0 font-normal">
                    See lists of movies by genre
                  </DropdownMenuLabel>
                </div>
                <div className="flex gap-4 flex-wrap w-[537px] pt-4 border-t border-[#E4E4E7]">
                  {genre.map((ele) => {
                    return (
                      <Button variant="outline" className={`h-5 p-0.5`}>
                        {" "}
                        <span className="text-[14px] text-[#18181B] font-medium">
                          {ele}
                        </span>
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
          <Button variant="outline" className="h-9 w-9 p-0 rounded-md">
            {" "}
            <img src="/Icon1.png" className="h-3 w-3" />
          </Button>
        </div>
      </div>
      {/* <div className="w-screen h-[600px] relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-[600px] rounded-none"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-[600px] rounded-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6 h-[600px] rounded-none">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-10 h-10 w-10 rounded-full" />
          <CarouselNext className="right-10 h-10 w-10 rounded-full" />
        </Carousel>
      </div> */}
      <Caru />
      {/* {type.map((ele, i) => {
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
              >
                <span className="font-semibold text-[14px] font-sans">
                  See More
                </span>
                <HiArrowSmRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-[1277px] h-[910px] flex gap-8 flex-wrap py-10">
              {movie.map((ele) => {
                return (
                  <Card className={`h-[439px] w-[229px] pt-0`}>
                    <CardHeader
                      className={`h-[340] w-full rounded-t-lg p-0`}
                    ></CardHeader>
                    <CardFooter className={`flex-col flex gap-0.5`}>
                      <div className="w-full flex items-center">
                        {" "}
                        <GoStarFill className="text-[#FDE047]" />{" "}
                        <p className="font-semibold text-[14px]">{ele}</p>
                        <p className="text-[12px] text-gray-500">/10</p>
                      </div>

                      <p className="text-[#09090B] font-sans text-[18px] font-normal w-full">
                        Card Footer
                      </p>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })} */}
      <Mainbody />

      {/* <div className="w-screen h-[280px] bg-[#4338CA] mt-25 py-10 px-15 flex justify-center items-center">
        <div className="w-[1277px] h-full flex justify-between">
          <div className="flex flex-col gap-3 w-[200px]">
            <div className="flex gap-2 items-center">
              <TbMovie className="text-white w-6 h-6 font-light p-0" />
              <p className="text-4 font-sans text-white font-bold italic">
                Movie Z
              </p>
            </div>
            <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
          </div>
          <div className="flex gap-24">
            <div className="flex flex-col gap-3 text-white">
              <p>Contact Information</p>
              <div>
                <div className="flex gap-3 items-center">
                  <FiPhone />
                  <p>
                    <span>Email:</span>
                    <br /> support@movieZ.com
                  </p>
                </div>
                <div className="flex gap-3 items-center pt-8">
                  <MdOutlineEmail />
                  <p>
                    <span>Phone:</span>
                    <br /> +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
            <div className=" text-white">
              <p>Follow us</p>
              <div className="flex gap-3 text-white pt-3">
                <p>Facebook</p> <p>Instagram</p> <p>Twitter</p> <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
