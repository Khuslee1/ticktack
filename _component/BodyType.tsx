import { responseObj, resultObj } from "@/_type/types";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiArrowSmRight } from "react-icons/hi";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { GoStarFill } from "react-icons/go";
import { Skeleton } from "@/components/ui/skeleton";
type Body = {
  call: string;
};

export const BodyType = ({ call }: Body) => {
  const [dataRes1, setDataRes1] = useState<resultObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const Skel = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${call}?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );

        const data1 = (await res.json()) as responseObj;
        setDataRes1(data1.results);
        setIsLoading(false);
      } catch (err) {
        console.log("error");
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <>
        <div className="flex justify-between items-center w-[1277px]">
          <Skeleton className="w-[250px] h-8 rounded-full" />
          <Skeleton className={`w-[165px] h-8 rounded-full`} />
        </div>
        <div className="w-[1277px]  flex gap-8 flex-wrap py-10">
          {Skel.map((el, inde) => {
            return (
              <Skeleton key={inde} className="h-[439px] w-[229px] rounded-lg" />
            );
          })}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center w-[1277px]">
        <h1 className="font-sans text-[32px] font-semibold">
          {call == "upcoming"
            ? "Upcoming"
            : call == "popular"
            ? "Popular"
            : "Top Rated"}
        </h1>
        <Button
          variant={`outline`}
          className={`border-none flex gap-2 shadow-none`}
          onClick={() =>
            router.push(
              call == "upcoming"
                ? "/category/upcoming"
                : call == "popular"
                ? "/category/popular"
                : "/category/top_rated"
            )
          }
        >
          <span className="font-semibold text-[14px] font-sans">See More</span>
          <HiArrowSmRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="w-[1277px] flex gap-8 flex-wrap py-10">
        {dataRes1.slice(0, 10).map((el, i) => {
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
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${el.poster_path})`,
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
    </>
  );
};
