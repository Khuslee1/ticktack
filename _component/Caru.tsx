"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { resultObj, responsetit, vidObj, video } from "@/_type/types";
import { GoStarFill } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import { Bombog } from "@/_component/Bombog";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { CaruDialog } from "./CaruDialog";

export const Caru = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const [current, setCurrent] = useState<number>(0);
  // const router = useRouter();
  const [dataRes, setDataRes] = useState<resultObj[]>([]);
  const [isDone, setisDone] = useState<boolean>(true);
  useEffect(() => {
    const awaitData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}now_playing?language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );

        const data = (await res.json()) as responsetit;
        setisDone(false);

        setDataRes(data.results.slice(0, 6));
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, []);

  if (isDone) {
    return <Skeleton className="w-screen h-[600px] relative " />;
  }
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-screen h-[600px] rounded-none justify-center flex"
    >
      <CarouselContent>
        {dataRes?.map((ele) => {
          return (
            <CarouselItem key={ele.id}>
              <div className="p-1 text-black">
                <Card
                  className="h-[600px] rounded-none pl-[20%] bg-start bg-cover object-fill text-white"
                  style={{
                    backgroundImage: `url("${process.env.NEXT_PUBLIC_BIG_IMAGE_URL}${ele.backdrop_path}")`,
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
                      <CaruDialog id={ele.id} />
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
