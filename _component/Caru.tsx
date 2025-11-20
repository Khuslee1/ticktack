"use client";

import Autoplay from "embla-carousel-autoplay";
import { IoPlayOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { GoStarFill } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bombog } from "@/_component/Bombog";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type resultObj = {
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
type response = {
  dates: { max: string; min: string };
  page: number;
  results: resultObj[];
  totalPages: number;
  totalResults: number;
};

export const Caru = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const [current, setCurrent] = useState<number>(0);
  const router = useRouter();
  const [dataRes, setDataRes] = useState<resultObj[]>([]);

  useEffect(() => {
    const awaitData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDIyZDUxNzYyYTVmNDY1MWExYzAyYTQ5MTUxZmVkZSIsIm5iZiI6MTc2MzUyMjgzOC4wOTQsInN1YiI6IjY5MWQzOTE2ZWY2YWZiYjBiYTJjOWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.El0MUnAv9wFdkf_9YivQxwHGj5UW1XekyNwIZVxhVEI",
            },
          }
        );

        const data = (await res.json()) as response;

        setDataRes(data.results.slice(0, 6));
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, []);

  return (
    <div className="w-screen h-[600px] relative flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full h-[600px] rounded-none justify-center flex"
        // onClick={() => router.push("/watchLater")}
      >
        <CarouselContent>
          {dataRes?.map((ele) => {
            return (
              <CarouselItem key={ele.id}>
                <div className="p-1 text-black">
                  <Card
                    className="h-[600px] rounded-none pl-[20%] bg-center bg-cover  text-white"
                    style={{
                      backgroundImage: `url("https://image.tmdb.org/t/p/original/${ele.backdrop_path}")`,
                    }}
                  >
                    <CardContent className="flex aspect-square items-center p-6 w-full h-[600px] rounded-none">
                      <div className="w-[404px] gap-4 flex flex-col">
                        <h1 className="flex flex-col font-sans font-bold text-[36px]">
                          <span className="text-[16px] font-normal">
                            Now Playing:
                          </span>
                          <p className="text-white"> {ele.original_title}</p>
                          <div className="w-full flex items-center gap-1">
                            {" "}
                            <GoStarFill className="text-[#FDE047] w-7 h-7" />{" "}
                            <span className="font-semibold text-[18px]">
                              {Math.floor(ele.vote_average * 10) / 10}
                            </span>
                            <span className="text-[16px] text-gray-500 font-normal">
                              /10
                            </span>
                          </div>
                        </h1>
                        <p className="text-[12px] w-80 font-sans">
                          {ele.overview}{" "}
                        </p>
                        <Button
                          variant="outline"
                          className="w-[145px] h-10 text-[14px] text-black"
                        >
                          <IoPlayOutline />
                          Watch trailer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-10 h-10 w-10 rounded-full" />
        <CarouselNext className="right-10 h-10 w-10 rounded-full" />
        <Bombog CaryData={dataRes} current={current} />
        <CurrentSlideDisplay setIndex={setCurrent} />
      </Carousel>
    </div>
  );
};

type CurrentSlideDisplayProps = {
  setIndex: Dispatch<SetStateAction<number>>;
};

const CurrentSlideDisplay = ({ setIndex }: CurrentSlideDisplayProps) => {
  const { api } = useCarousel();

  useEffect(() => {
    if (!api) return;

    setIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return null;
};
