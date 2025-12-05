"use client";
import { credit, creditObj } from "@/_type/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const DataDirector = () => {
  const params = useParams();
  const [dataCast, setDataCast] = useState<credit[]>();
  const [dataDir, setDataDir] = useState<credit[]>();
  const [dataWri, setDataWri] = useState<credit[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (!params.id) return;
    const awaitData = async () => {
      try {
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

        const dataCredit = (await resCre.json()) as creditObj;

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

        setDataCast(filteredCast);
        setDataDir(filteredDir);
        setDataWri(filteredWri);
        setLoading(false);
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, [params.id]);
  if (loading) {
    return (
      <>
        <div className="flex gap-15">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[137px] h-5 rounded-full" />
        </div>
        <div className="flex gap-15">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[137px] h-5 rounded-full" />
        </div>
        <div className="flex gap-15">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[137px] h-5 rounded-full" />
        </div>
      </>
    );
  }

  return (
    <>
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
    </>
  );
};
