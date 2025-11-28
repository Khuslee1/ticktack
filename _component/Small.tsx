"use client";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { GoStarFill } from "react-icons/go";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { resultObj, responsetit, smallType } from "@/_type/types";
import router from "next/router";
import Link from "next/link";

export const Small = (props: smallType) => {
  const [dataResS, setDataResS] = useState<resultObj[]>([]);
  const [page, setPage] = useState<number>(1);
  const totalPage = 5;
  const linkDec = () => {
    if (
      props.title == "upcoming" ||
      props.title == "top_rated" ||
      props.title == "popular"
    )
      return `${process.env.NEXT_PUBLIC_BASE_URL}${props.title}?language=en-US&page=${page}`;
    return `${process.env.NEXT_PUBLIC_BASE_URL}${props.title}/similar?language=en-US&page=${page}`;
  };
  useEffect(() => {
    const awaitDataS = async () => {
      try {
        const res = await fetch(linkDec(), {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
          },
        });

        const data = (await res.json()) as responsetit;

        setDataResS(data.results);
      } catch (err) {
        console.log("error");
      }
    };

    awaitDataS();
  }, [page]);

  const next = () => {
    if (page < totalPage) setPage(page + 1);
  };
  const prev = () => {
    if (page > 1) setPage(page - 1);
  };
  const now = (ele: number) => {
    setPage(ele);
  };
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1277px] flex flex-start">
        <h1 className="font-sans text-[32px] font-semibold">
          {props.title == "upcoming"
            ? "Upcoming"
            : props.title == "top_rated"
            ? "Top Rated"
            : props.title == "popular"
            ? "Popular"
            : "More like this"}
        </h1>
      </div>
      <div className="w-[1277px] flex gap-8 flex-wrap py-10">
        {dataResS.map((el) => {
          return (
            <Link key={el.id} href={`/${el.id}`}>
              <Card className={`h-[439px] w-[229px] p-0 gap-1`}>
                <CardHeader
                  className={`h-[340px] w-full rounded-t-lg p-0 bg-cover`}
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${el.poster_path})`,
                    objectFit: "fill",
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

                  <p className="font-sans text-[18px] font-normal w-full line-clamp-2">
                    {el.title}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
      <Pagination className="absolute top-[2070px] left-[475px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={prev} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 1}
              onClick={() => now(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 2}
              onClick={() => now(2)}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 3}
              onClick={() => now(3)}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 4}
              onClick={() => now(4)}
            >
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 5}
              onClick={() => now(5)}
            >
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={next} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
