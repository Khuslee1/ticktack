"use client";
import { HiArrowSmRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { GoStarFill } from "react-icons/go";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

type typeArr = resultObj[][];

export const Mainbody = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [dataRes1, setDataRes1] = useState<resultObj[]>([]);
  const [dataRes2, setDataRes2] = useState<resultObj[]>([]);
  const [dataRes3, setDataRes3] = useState<resultObj[]>([]);
  const [niilberArr, setNillberArr] = useState<typeArr>([]);
  const skeletonArr: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ];
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const urls = [
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        ];

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDIyZDUxNzYyYTVmNDY1MWExYzAyYTQ5MTUxZmVkZSIsIm5iZiI6MTc2MzUyMjgzOC4wOTQsInN1YiI6IjY5MWQzOTE2ZWY2YWZiYjBiYTJjOWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.El0MUnAv9wFdkf_9YivQxwHGj5UW1XekyNwIZVxhVEI",
          },
        };

        const [res1, res2, res3] = await Promise.all([
          fetch(urls[0], options),
          fetch(urls[1], options),
          fetch(urls[2], options),
        ]);

        const data1 = (await res1.json()) as response;
        const data2 = (await res2.json()) as response;
        const data3 = (await res3.json()) as response;

        setDataRes1(data1.results);
        setDataRes2(data2.results);
        setDataRes3(data3.results);

        setNillberArr([
          data1.results.slice(0, 10),
          data2.results.slice(0, 10),
          data3.results.slice(0, 10),
        ]);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading)
    return skeletonArr.map((ele, i) => {
      return (
        <div
          key={i}
          className="w-screen pl-20 pr-20 pt-20 flex flex-col items-center"
        >
          <div className="flex justify-between items-center w-[1277px]">
            <Skeleton className="w-[250px] h-8 rounded-full" />
            <Skeleton className={`w-[165px] h-8 rounded-full`} />
          </div>
          <div className="w-[1277px] h-[910px] flex gap-8 flex-wrap py-10">
            {ele.map((el, inde) => {
              return (
                <Skeleton
                  key={inde}
                  className="h-[439px] w-[229px] rounded-lg"
                />
              );
            })}
          </div>
        </div>
      );
    });

  return niilberArr.map((ele, i) => {
    return (
      <div
        key={i}
        className="w-screen pl-20 pr-20 pt-20 flex flex-col items-center"
      >
        <div className="flex justify-between items-center w-[1277px]">
          <h1 className="font-sans text-[32px] font-semibold">
            {i == 0 ? "Upcoming" : i == 1 ? "Popular" : "Top Rated"}
          </h1>
          <Button
            variant={`outline`}
            className={`border-none flex gap-2 shadow-none`}
            onClick={() =>
              router.push(
                i == 0
                  ? "/category/upcoming"
                  : i == 1
                  ? "/category/popular"
                  : "/category/top_rated"
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
          {ele.map((el, i) => {
            return (
              <Card
                key={el.id}
                className={`h-[439px] w-[229px] gap-1 pt-0 pb-0`}
                onClick={() => {
                  router.push(`/${el.id}`);
                }}
              >
                <CardHeader
                  className={`h-[340px] w-full rounded-t-lg p-0 bg-start bg-cover object-fill`}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${el.poster_path})`,
                  }}
                ></CardHeader>
                <CardFooter className={`flex-col flex gap-0.5 px-2 pb-2`}>
                  <div className="w-full flex items-center">
                    {" "}
                    <GoStarFill className="text-[#FDE047]" />{" "}
                    <p className="font-semibold text-[14px]">
                      {Math.floor(el.vote_average * 10) / 10}
                    </p>
                    <p className="text-[12px] text-gray-500">/10</p>
                  </div>

                  <p className="font-sans text-[17px] font-normal w-full line-clamp-2">
                    {el.title}
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
