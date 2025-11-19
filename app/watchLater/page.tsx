"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { Small } from "@/_component/Small";
import { GoStarFill } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoPlayOutline } from "react-icons/io5";

// const cata = { title: "Upcoming" };
type moreLikeType = { img: string; name: string; rating: number };
type allDataType = {
  name: string;
  date: string;
  duration: number;
  trailer: number;
  rating: number;
  views: number;
  img: string;
  genre: string[];
  text: string;
  director: string;
  writers: string[];
  stars: string[];
  more: number[];
};

const Data: allDataType = {
  name: "Kino",
  date: "2025.11.20",
  duration: 160,
  trailer: 127,
  rating: 6.9,
  views: 37000,
  img: "url",
  genre: ["Fairy Tale", "Fairy Tale", "Fairy Tale", "Fairy Tale"],
  text: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
  director: "Jon M. Chu",
  writers: ["Winnie Holzman", "Dana Fox", "Gregory Maguire"],
  stars: ["Winnie Holzman", "Dana Fox", "Gregory Maguire"],
  more: [1, 2, 3, 4, 5],
};

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-10 items-center">
      <Header />
      <div className="w-[1080px]">
        <div className="w-full flex justify-between">
          <h1 className="flex flex-col text-[36px] font-bold">
            {Data.name}{" "}
            <span className="text-[18px] font-normal">
              {Data.date} · PG · {Math.floor(Data.duration / 60)}h{" "}
              {Data.duration % 60}m
            </span>
          </h1>
          <div>
            <p className="text-[12px] font-medium">Rating</p>
            <div className="w-full flex items-center gap-1">
              {" "}
              <GoStarFill className="text-[#FDE047] w-7 h-7" />{" "}
              <div className="flex flex-col">
                <div className="w-full flex items-center gap-1">
                  <span className="font-semibold text-[18px]">
                    {Data.rating}
                  </span>
                  <span className="text-[16px] text-gray-500 font-normal">
                    /10
                  </span>
                </div>
                <span className="text-[12px] text-gray-500 font-normal">
                  {Data.views / 1000}k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1080px] h-[428px] flex gap-8">
        <div className=" w-[290px] h-full rounded-sm bg-yellow-500"></div>
        <div className=" w-[760px] h-full rounded-sm bg-red-500 relative">
          <div className="flex absolute gap-3 top-[364px] left-6 items-center">
            <div className="bg-white rounded-full flex items-center justify-center w-10 h-10">
              {" "}
              <IoPlayOutline className="w-4 h-4" />
            </div>
            <p className="text-white font-normal">
              Play trailer {Math.floor(Data.trailer / 60)}:
              {Data.trailer % 60 < 10
                ? "0" + (Data.trailer % 60)
                : Data.trailer % 60}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1080px]">
        <div className="flex gap-3">
          {Data.genre.map((ele, i) => {
            return (
              <Button
                key={i}
                variant="outline"
                className="h-5 text-[12px] font-semibold p-2 rounded-full"
              >
                {ele}
              </Button>
            );
          })}
        </div>
        <p className="w-full pt-5">{Data.text}</p>
        <h1 className="font-bold flex gap-5 text-[16px] pt-5 border-b border-b-[#E4E4E7] pb-1">
          Director <span className="font-normal">{Data.director}</span>
        </h1>
        <h1 className="font-bold flex gap-5 text-[16px] pt-5 border-b border-b-[#E4E4E7] pb-1">
          Writers{" "}
          <span className="font-normal">
            {Data.writers.map((ele, i) => {
              if (i == 0) return ele;
              return " · " + ele;
            })}
          </span>
        </h1>
        <h1 className="font-bold flex gap-5 text-[16px] pt-5 border-b border-b-[#E4E4E7] pb-1">
          Stars{" "}
          <span className="font-normal">
            {Data.stars.map((ele, i) => {
              if (i == 0) return ele;
              return " · " + ele;
            })}
          </span>
        </h1>
      </div>
      <Small title={"More like this"} movie={Data.more} />
      <Footer />
    </div>
  );
}
