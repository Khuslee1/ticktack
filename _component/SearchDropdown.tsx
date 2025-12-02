"use client";

import { Input } from "@/components/ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ChangeEvent, useEffect, useState } from "react";
import { genreMov } from "@/_type/types";
import { Spinner } from "@/components/ui/spinner";
import { GoStarFill } from "react-icons/go";
import { useRouter } from "next/navigation";
import { HiArrowSmRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const SearchDropdown = () => {
  const [Value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<genreMov[]>([]);
  const router = useRouter();
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${Value}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);

      setMovies(data.results.slice(0, 5));
      setLoading(false);
    };

    fetchMovies();
  }, [Value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <HiMagnifyingGlass
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4",
            open && "opacity-0"
          )}
        />
        <Input
          value={Value}
          placeholder={`Search...`}
          className={cn("w-[379px] h-9 pl-9 pr-3", open && "opacity-0")}
          readOnly
        />
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-[577px] flex flex-col items-center p-1",
          !open && "opacity-0"
        )}
      >
        <HiMagnifyingGlass className="absolute left-27.5 -translate-y-1/2 text-gray-400 size-4 -top-5.5" />
        <Input
          value={Value}
          placeholder={`Search...`}
          className="w-[379px] h-9 pl-9 pr-3 absolute -top-10"
          onChange={(e) => {
            searchHandler(e);
          }}
        />
        {loading && (
          <div className="flex items-center gap-1">
            <Spinner className="size-8" />
          </div>
        )}
        {!loading && movies.length == 0 && (
          <div className="h-[95px] flex items-center text-[14px]">
            No results found
          </div>
        )}
        {!loading && Value !== "" && (
          <div className="w-full p-1">
            {movies?.map((ele) => {
              return (
                <div
                  key={ele.id}
                  className="flex gap-4 w-full h-[116px] p-1 border-b border-b-[#E4E4E7]"
                >
                  <div
                    className="w-[67px] h-full rounded-md bg-red bg-cover"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${ele?.poster_path})`,
                      objectFit: "fill",
                    }}
                  ></div>
                  <div className="flex flex-col line-clamp-2 w-[454px] h-[100px]">
                    <p className="font-sans text-[18px] font-normal w-full line-clamp-2">
                      {ele.title}
                    </p>
                    <div className="w-full flex items-center">
                      {" "}
                      <GoStarFill className="text-[#FDE047]" />{" "}
                      <p className="font-semibold text-[14px]">
                        {Math.floor(ele.vote_average * 10) / 10}
                      </p>
                      <p className="text-[12px] text-gray-500">/10</p>
                    </div>
                    <div className="w-full flex justify-between">
                      <p className="text-[14px] font-normal flex items-center">
                        {ele.release_date.split("-")[0]}
                      </p>
                      <Button
                        variant={`outline`}
                        className={`border-none flex gap-2 shadow-none`}
                        onClick={() => router.push(`/${ele.id}`)}
                      >
                        <span className="font-normal text-[14px] font-sans">
                          See More
                        </span>
                        <HiArrowSmRight className="w-4 h-4 font-normal" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              className="w-[212px] h-10 flex justify-center items-center font-sans text-[14px]"
              onClick={() => {
                router.push(`/Search/${Value}`);
              }}
            >
              See all results for "{Value}"
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
