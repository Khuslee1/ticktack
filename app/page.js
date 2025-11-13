"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HiChevronDown } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";

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
  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-[59px] flex items-center justify-center fixed border border-black pl-4 pr-4">
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
              <DropdownMenuContent>
                <DropdownMenuLabel>1</DropdownMenuLabel>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>1</DropdownMenuItem>
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
    </div>
  );
}
