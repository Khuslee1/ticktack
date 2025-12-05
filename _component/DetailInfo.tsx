"use client";
import { response } from "@/_type/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { MovieTrailer } from "./MovieTrailer";
import { Button } from "@/components/ui/button";
import { DataDirector } from "./DataDirector";
import { MoreLikeThis } from "./MoreLikeThis";
import { Skeleton } from "@/components/ui/skeleton";

export const DetailInfo = () => {
  const params = useParams();
  const [dataRes, setDataRes] = useState<response>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!params.id) return;
    const awaitData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${params.id}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );

        const data = (await res.json()) as response;
        setDataRes(data);
        setLoading(false);
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, [params.id]);
  if (loading) {
    return (
      <div className="w-screen flex flex-col gap-10 items-center">
        <div className="w-[1080px]">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-10 w-[411px] rounded-full" />
              <Skeleton className="h-10 w-[411px] rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-medium">Rating</p>
              <div className="w-full flex flex-col items-center gap-1">
                <Skeleton className="w-[83px] h-5" />
                <Skeleton className="w-[83px] h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1080px] h-[428px] flex gap-8">
          <Skeleton className="w-[290px] h-[428px]" />
          <Skeleton className="w-[760px] h-[428px]" />
        </div>
        <div className="flex flex-col gap-2 w-[1080px]">
          <div className="flex gap-3">
            <Skeleton className="w-[77px] h-5 rounded-full" />
            <Skeleton className="w-[77px] h-5 rounded-full" />
            <Skeleton className="w-[77px] h-5 rounded-full" />
          </div>
          <Skeleton className="w-[1080px] h-5 rounded-full" />
          <Skeleton className="w-[580px] h-5 rounded-full" />
          <DataDirector />
        </div>
        <MoreLikeThis />
      </div>
    );
  }
  return (
    <>
      <div className="w-[1080px]">
        <div className="w-full flex justify-between">
          <h1 className="flex flex-col text-[36px] font-bold">
            {dataRes?.title}{" "}
            <span className="text-[18px] font-normal">
              {dataRes?.release_date} · PG ·{" "}
              {Math.floor((dataRes?.runtime ?? 0) / 60)}h{" "}
              {(dataRes?.runtime ?? 0) % 60}m
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
                    {Math.floor((dataRes?.vote_average ?? 0) * 10) / 10}
                  </span>
                  <span className="text-[16px] text-gray-500 font-normal">
                    /10
                  </span>
                </div>
                <span className="text-[12px] text-gray-500 font-normal">
                  {Math.floor(dataRes?.popularity ?? 0)}k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1080px] h-[428px] flex gap-8">
        <div
          className=" w-[290px] h-full rounded-sm bg-start bg-cover object-fill"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${dataRes?.poster_path})`,
          }}
        ></div>
        <div
          className=" w-[760px] h-full rounded-sm bg-start bg-cover object-fill relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${dataRes?.backdrop_path})`,
          }}
        >
          <div className="flex absolute gap-3 top-[364px] left-6 items-center">
            <MovieTrailer />

            <p className="text-white font-normal">
              Play trailer {Math.floor((dataRes?.runtime ?? 0) / 60)}:
              {(dataRes?.runtime ?? 0) % 60 < 10
                ? "0" + ((dataRes?.runtime ?? 0) % 60)
                : (dataRes?.runtime ?? 0) % 60}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1080px]">
        <div className="flex gap-3">
          {dataRes?.genres.map((ele, i) => {
            return (
              <Button
                key={i}
                variant="outline"
                className="h-5 text-[12px] font-semibold p-2 rounded-full"
              >
                {ele.name}
              </Button>
            );
          })}
        </div>
        <p className="w-full pt-5">{dataRes?.overview}</p>
        <DataDirector />
      </div>
      <div className="w-screen pl-20 pr-20 pt-20 flex flex-col items-center">
        <MoreLikeThis />
      </div>
    </>
  );
};
