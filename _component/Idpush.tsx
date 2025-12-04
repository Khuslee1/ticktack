"use client";
import { GoStarFill } from "react-icons/go";
import { Button } from "@/components/ui/button";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiArrowSmRight } from "react-icons/hi";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import {
  response,
  credit,
  creditObj,
  video,
  resultObj,
  responsSim,
} from "@/_type/types";

import { Skelid } from "./Skelid";
import { MovieTrailer } from "./MovieTrailer";

export const Idpush = () => {
  const params = useParams();
  const [dataRes, setDataRes] = useState<response>();
  const [dataCast, setDataCast] = useState<credit[]>();
  const [dataDir, setDataDir] = useState<credit[]>();
  const [dataWri, setDataWri] = useState<credit[]>();

  const [dataSim, setDataSim] = useState<resultObj[]>();
  const [isDone, setIsdone] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!params.id) return;
    const awaitData = async () => {
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
        const resCre = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${params.id}/credits?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );

        const resSim = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${params.id}/similar?language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );
        const dataSimilar = (await resSim.json()) as responsSim;

        const dataCredit = (await resCre.json()) as creditObj;
        const data = (await res.json()) as response;
        const resultSim = dataSimilar.results;

        const filteredCast = dataCredit.cast
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3);
        const filteredDir = dataCredit.crew
          .filter((ele) => {
            if (ele.known_for_department == "Directing") return true;
            return false;
          })
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3);
        const filteredWri = dataCredit.crew
          .filter((ele) => {
            if (ele.known_for_department == "Writing") return true;
            return false;
          })
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 3);
        setIsdone(false);

        setDataCast(filteredCast);
        setDataDir(filteredDir);
        setDataWri(filteredWri);
        setDataRes(data);
        setDataSim(resultSim.slice(1, 6));
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, [params.id]);

  if (isDone) {
    return <Skelid />;
  }

  return (
    <div className="w-screen flex flex-col gap-10 items-center">
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
        <h1 className="font-bold flex gap-5 text-[16px] pt-5 border-b border-b-[#E4E4E7] pb-1">
          Director{" "}
          <span className="font-normal">
            {" "}
            <span className="font-normal">
              {dataDir?.map((ele, i) => {
                if (i == dataDir.length - 1) return ele.name;
                return ele.name + " · ";
              })}
            </span>
          </span>
        </h1>
        <h1 className="font-bold flex gap-5 text-[16px] pt-5 border-b border-b-[#E4E4E7] pb-1">
          Writers{" "}
          <span className="font-normal">
            {dataWri?.map((ele, i) => {
              if (i == dataWri.length - 1) return ele.name;
              return ele.name + " · ";
            })}
          </span>
        </h1>
        <h1 className="font-bold flex gap-5 text-[16px] pt-5 border-b border-b-[#E4E4E7] pb-1">
          Stars{" "}
          <span className="font-normal">
            {dataCast?.map((ele, i) => {
              if (i == dataCast.length - 1) return ele.name;
              return ele.name + " · ";
            })}
          </span>
        </h1>
      </div>
      <div className="w-screen pl-20 pr-20 pt-20 flex flex-col items-center">
        <div className="flex justify-between items-center w-[1080px]">
          <h1 className="font-sans text-[24px] font-semibold">
            More like this
          </h1>
          <Button
            variant={`outline`}
            className={`border-none flex gap-2 shadow-none`}
            onClick={() => router.push(`/category/${params.id}`)}
          >
            <span className="font-semibold text-[14px] font-sans">
              See More
            </span>
            <HiArrowSmRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="w-[1080px] flex gap-8 flex-wrap py-10">
          {dataSim?.map((el, i) => {
            return (
              <Card
                key={el.id}
                className={`h-[372px] w-[190px] gap-1 pt-0 pb-0`}
                onClick={() => {
                  router.push(`/${el.id}`);
                }}
              >
                <CardHeader
                  className={`h-[281px] w-full rounded-t-lg p-0 bg-start bg-cover object-fill`}
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
    </div>
  );
};
