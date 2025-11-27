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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoStarFill } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bombog } from "@/_component/Bombog";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

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
type vidObj = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
type video = {
  id: number;
  results: vidObj[];
};

export const Caru = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const [current, setCurrent] = useState<number>(0);
  const router = useRouter();
  const [dataRes, setDataRes] = useState<resultObj[]>([]);
  const [dataId, setDataId] = useState<number>();
  const [dataVid, setDataVid] = useState<string>("");
  const [isDone, setisDone] = useState<boolean>(true);
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
        setisDone(false);

        setDataRes(data.results.slice(0, 6));
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, []);

  useEffect(() => {
    const awaitDatavid = async () => {
      try {
        const resvid = await fetch(
          `https://api.themoviedb.org/3/movie/${dataId}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDIyZDUxNzYyYTVmNDY1MWExYzAyYTQ5MTUxZmVkZSIsIm5iZiI6MTc2MzUyMjgzOC4wOTQsInN1YiI6IjY5MWQzOTE2ZWY2YWZiYjBiYTJjOWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.El0MUnAv9wFdkf_9YivQxwHGj5UW1XekyNwIZVxhVEI",
            },
          }
        );
        console.log(dataId);
        const data = (await resvid.json()) as video;
        setDataVid(
          data.results.filter((ele) => {
            return ele.type == "Trailer";
          })[0].key
        );
      } catch (err) {
        console.log("error");
      }
    };

    awaitDatavid();
  }, [dataId]);

  if (isDone) {
    return <Skeleton className="w-screen h-[600px] relative " />;
  }
  return (
    <Dialog>
      <div className="w-screen h-[600px] relative flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full h-[600px] rounded-none justify-center flex"
        >
          <CarouselContent>
            {dataRes?.map((ele) => {
              return (
                <CarouselItem key={ele.id}>
                  <Link href={`/${ele.id}`}>
                    <div className="p-1 text-black">
                      <Card
                        className="h-[600px] rounded-none pl-[20%] bg-start bg-cover object-fill text-white"
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
                              <p className="text-white">
                                {" "}
                                {ele.original_title}
                              </p>
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
                            <DialogTrigger>
                              <div
                                className="w-[145px] h-10 text-[14px] text-black bg-white flex items-center justify-center rounded-md font-sans font-medium"
                                onClick={() => {
                                  setDataId(ele.id);
                                }}
                              >
                                <IoPlayOutline className="font-medium" />
                                Watch trailer
                              </div>
                            </DialogTrigger>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </Link>
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
      <DialogTitle></DialogTitle>
      <DialogContent className="min-w-[997px] h-[561px] p-0 overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${dataVid}`}
          title="Movie Trailer"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
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
