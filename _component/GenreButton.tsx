"use client";
import { genreObj } from "@/_type/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";

type GenreBoxProps = {
  idArr?: string[];
  setObject: Dispatch<SetStateAction<genreObj | undefined>>;
};

export const GenreButton = ({ idArr, setObject }: GenreBoxProps) => {
  const [dataRes, setDataRes] = useState<genreObj>();
  const router = useRouter();
  useEffect(() => {
    const awaitData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=en`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );

        const data = (await res.json()) as genreObj;
        setDataRes(data);
        setObject(data);
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, []);
  return dataRes?.genres.map((ele) => {
    return (
      <Button
        key={ele.id}
        variant="outline"
        className={`h-5 p-0.5  
                        ${
                          idArr?.includes(String(ele.id))
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : ""
                        }
                               `}
        onClick={() => {
          if (idArr == undefined) {
            return router.push(`/genre/${ele.id}`);
          } else {
            if (!idArr?.includes(String(ele.id))) {
              return router.push(
                `/genre/${[...idArr, String(ele.id)].join(",")}`
              );
            }
            if (idArr?.includes(String(ele.id)) && idArr?.length != 1) {
              return router.push(
                `/genre/${[...idArr.filter((el) => el !== String(ele.id))].join(
                  ","
                )}`
              );
            }
            return router.push(`/`);
          }
        }}
      >
        {" "}
        <span className="text-[14px]  font-medium">{ele.name}</span>
        <HiChevronRight className="size-4" />
      </Button>
    );
  });
};
