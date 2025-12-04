"use client";
import { useEffect, useState } from "react";
import { genreMovie, genreMov, genreObj } from "@/_type/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { GoStarFill } from "react-icons/go";
import { PaginationI } from "@/_component/PaginationI";
import { GenreButton } from "@/_component/GenreButton";
import { Skeleton } from "@/components/ui/skeleton";

type GenrePageType = {
  genreId: string[];
};

export const GenrePage = ({ genreId }: GenrePageType) => {
  const [dataRes, setDataRes] = useState<genreMovie>();
  const router = useRouter();
  const [object, setObject] = useState<genreObj>();
  const [idArr, setIdarr] = useState<string[]>([...genreId]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);
  const skelArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    console.log(genreId);
    setLoading(true);
    const awaitData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );

        const data = (await res.json()) as genreMovie;
        console.log(data);
        setDataRes(data);
        setTotal(data.total_pages);
        setLoading(false);
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, [genreId, page]);
  if (loading) {
    return (
      <div className="w-screen  flex flex-col gap-8 items-center">
        <div className="w-7xl flex ">
          <div className="w-[387px]">
            <div className="flex flex-col gap-1 pb-4 ">
              <Skeleton className="w-[200px] h-[35px] rounded-full" />
              <Skeleton className="w-[200px] h-[30px] rounded-full" />
            </div>
            <div className="flex gap-4 flex-wrap w-[387px] pt-4">
              {skelArr.map((ele) => {
                return <Skeleton key={ele} className="w-[100px] h-5" />;
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8 w-[826px] border-l border-l-[#E4E4E7]  pl-5">
            <Skeleton className="w-[200px] h-[45px] rounded-full" />
            <div className="w-full flex flex-wrap gap-12 ">
              {skelArr.map((el) => {
                return (
                  <Skeleton
                    key={el}
                    className="h-[331px] w-[165px] rounded-[20px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-screen  flex flex-col gap-8 items-center">
      <h1 className="w-7xl font-sans text-[#09090B] text-[30px] font-semibold">
        Search filter
      </h1>
      <div className="w-7xl flex pr-5">
        <div className="w-[387px]">
          <div className="flex flex-col gap-1 pb-4 ">
            <h1 className="font-sans text-[24px] font-semibold p-0">Genres</h1>
            <p className="font-sans text-[16px] p-0 font-normal">
              See lists of movies by genre
            </p>
          </div>
          <div className="flex gap-4 flex-wrap w-[387px] pt-4">
            <GenreButton idArr={idArr} setObject={setObject} />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full border-l border-l-[#E4E4E7] pl-5">
          <h1 className="font-sans text-[20px] font-semibold ">
            {dataRes?.total_results} titles in "
            {object?.genres
              .filter((ele) => genreId.includes(String(ele.id)))
              .map((ele) => ele.name)
              .join(", ")}
            "
          </h1>
          <div className="w-full flex flex-wrap gap-12 ">
            {dataRes?.results?.map((el) => {
              return (
                <Link key={el.id} href={`/${el.id}`}>
                  <Card className={`h-[331px] w-[165px] p-0 gap-1`}>
                    <CardHeader
                      className={`h-[244px] w-full rounded-t-lg p-0 bg-cover`}
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
            <PaginationI total={total} setPage={setPage} page={page} />
          </div>
        </div>
      </div>
    </div>
  );
};
