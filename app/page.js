"use client";
import { Button } from "@/components/ui/button";
import { use, useEffect, useState } from "react";

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
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log("Win", win);

  useEffect(() => {
    if (win == 1) {
      console.log("blue win");
    } else if (win == 2) {
      console.log("red win");
    }
  }, [win]);

  useEffect(() => {
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
  }, [arr]);

  const budagch = (llr) => {
    if (arr[llr] !== 0 || win !== 0 || !arr.includes(0)) return;
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

  const restart = () => {
    if (win == 1 || win == 2 || !arr.includes(0)) {
      setTurn(1);
      setWin(0);
      setArr([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    } else {
      setTurn(turn);
      setWin(win);
      setArr(arr);
    }
  };
  const declare = () => {
    if (win == 1) return "Blue wins";
    if (win == 2) return "Red wins";
    if (!arr.includes(0)) return "Tie";
    return "";
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-3">
      <h1>{declare()}</h1>
      <div className="h-[150px] w-[150px] border border-black flex flex-wrap justify-center items-center">
        {arr.map((ele, i) => {
          return (
            <div
              key={i}
              className={`h-[49px] w-[49px] border border-black ${
                ele == 1 ? "bg-blue-500" : ele == 2 ? "bg-red-500" : "bg-white"
              }`}
              onClick={() => {
                budagch(i);
              }}
            ></div>
          );
        })}
      </div>
      <Button variant="outline" onClick={restart}>
        Restart
      </Button>
    </div>
  );
}
