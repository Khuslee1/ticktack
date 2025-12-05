import { responsSim, resultObj } from "@/_type/types";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { HiArrowSmRight } from "react-icons/hi";

export const MoreLikeThis = () => {
  const router = useRouter();
  const params = useParams();

  const [dataSim, setDataSim] = useState<resultObj[]>();
  const [isDone, setIsdone] = useState<boolean>(true);
  useEffect(() => {
    setIsdone(true);
    if (!params.id) return;
    const awaitData = async () => {
      try {
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
        const resultSim = dataSimilar.results;

        setIsdone(false);
        setDataSim(resultSim.slice(1, 6));
        setIsdone(false);
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, [params.id]);

  if (isDone) {
    return (
      <>
        <div className="w-screen flex flex-col items-center">
          <div className="flex justify-between items-center w-[1080px]">
            <Skeleton className="w-[250px] h-8 rounded-full" />
            <Skeleton className="w-[165px] h-8 rounded-full" />
          </div>
          <div className="w-[1080px] flex gap-8 flex-wrap py-10">
            <Skeleton className="w-[190px] h-[372px] rounded-lg" />
            <Skeleton className="w-[190px] h-[372px] rounded-lg" />
            <Skeleton className="w-[190px] h-[372px] rounded-lg" />
            <Skeleton className="w-[190px] h-[372px] rounded-lg" />
            <Skeleton className="w-[190px] h-[372px] rounded-lg" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {" "}
      <div className="flex justify-between items-center w-[1080px]">
        <h1 className="font-sans text-[24px] font-semibold">More like this</h1>
        <Button
          variant={`outline`}
          className={`border-none flex gap-2 shadow-none`}
          onClick={() => router.push(`/category/${params.id}`)}
        >
          <span className="font-semibold text-[14px] font-sans">See More</span>
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
      </div>{" "}
    </>
  );
};
