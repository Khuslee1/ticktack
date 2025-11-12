"use client";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";

export default function Home() {
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [win, setWin] = useState(0);
  const conditionWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log("Win", win);

  const ashiglagch = () => {
    if (win == 1) {
      console.log("blue win");
    } else if (win == 2) {
      console.log("red win");
    }
  };

  const checker = () => {
    for (let i = 0; i < conditionWin.length; i++) {
      const [a, b, c] = conditionWin[i];
      if (arr[a] == 1 && arr[b] == 1 && arr[c] == 1) {
        setWin(1);
        return;
      }
      if (arr[a] == 2 && arr[b] == 2 && arr[c] == 2) {
        setWin(2);
        return;
      }
    }
  };

  const budagch = (llr) => {
    if (arr[llr] !== 0 || win !== 0) return;
    if (turn === 1) {
      setTurn(2);
      const newArr = arr.map((el, i) => (llr === i ? 1 : el));
      setArr(newArr);
    } else {
      setTurn(1);
      const newArr = arr.map((el, i) => (llr === i ? 2 : el));
      setArr(newArr);
    }
  };
  // const clickTotal = (llr) => {

  //   if (turn === 1) {
  //     setTurn(2);
  //     const newArr = arr.map((el, i) => (llr === i ? 1 : el));
  //     setArr(newArr);
  //   } else {
  //     setTurn(1);
  //     const newArr = arr.map((el, i) => (llr === i ? 2 : el));
  //     setArr(newArr);
  //   }

  //   for (let i = 0; i < conditionWin.length; i++) {
  //     const [a, b, c] = conditionWin[i];
  //     if (arr[a] == 1 && arr[b] == 1 && arr[c] == 1) {
  //       setWin(1);
  //     }
  //     if (arr[a] == 2 && arr[b] == 2 && arr[c] == 2) {
  //       setWin(2);
  //     }
  //   }

  //   if (win == 1) {
  //     console.log("blue win");
  //     return;
  //   } else if (win == 2) {
  //     console.log("red win");
  //     return;
  //   }
  // };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-3">
      <div className="h-[150px] w-[150px] border border-black flex flex-wrap justify-center items-center">
        {arr.map((ele, i) => {
          return (
            <div
              key={i}
              className={`h-[49px] w-[49px] border border-black ${
                ele == 1 ? "bg-blue-500" : ele == 2 ? "bg-red-500" : "bg-white"
              }`}
              onClick={() => {
                ashiglagch();
                budagch(i);
                checker();
              }}
            ></div>
          );
        })}
      </div>
      <Button variant="outline">Restart</Button>
    </div>
  );
}
