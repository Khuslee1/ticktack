"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { GoStarFill } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { IoPlayOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type genre = {
  id: number;
  name: string;
};
type company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type countries = {
  iso_3166_1: string;
  name: string;
};
type language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
type response = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: company[];
  production_countries: countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type credit = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
type creditObj = {
  id: number;
  cast: credit[];
  crew: credit[];
};
type vidObj = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
type video = {
  id: number;
  results: vidObj[];
};

export default function detailsId() {
  const params = useParams();
  const [dataRes, setDataRes] = useState<response>();
  const [dataCast, setDataCast] = useState<credit[]>();
  const [dataDir, setDataDir] = useState<credit[]>();
  const [dataWri, setDataWri] = useState<credit[]>();
  const [dataKey, setDataKey] = useState<string>("");

  useEffect(() => {
    if (!params.id) return;
    const awaitData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDIyZDUxNzYyYTVmNDY1MWExYzAyYTQ5MTUxZmVkZSIsIm5iZiI6MTc2MzUyMjgzOC4wOTQsInN1YiI6IjY5MWQzOTE2ZWY2YWZiYjBiYTJjOWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.El0MUnAv9wFdkf_9YivQxwHGj5UW1XekyNwIZVxhVEI",
            },
          }
        );
        const resCre = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDIyZDUxNzYyYTVmNDY1MWExYzAyYTQ5MTUxZmVkZSIsIm5iZiI6MTc2MzUyMjgzOC4wOTQsInN1YiI6IjY5MWQzOTE2ZWY2YWZiYjBiYTJjOWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.El0MUnAv9wFdkf_9YivQxwHGj5UW1XekyNwIZVxhVEI",
            },
          }
        );
        const resVid = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDIyZDUxNzYyYTVmNDY1MWExYzAyYTQ5MTUxZmVkZSIsIm5iZiI6MTc2MzUyMjgzOC4wOTQsInN1YiI6IjY5MWQzOTE2ZWY2YWZiYjBiYTJjOWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.El0MUnAv9wFdkf_9YivQxwHGj5UW1XekyNwIZVxhVEI",
            },
          }
        );

        const dataVideo = (await resVid.json()) as video;
        console.log(dataVideo);
        const dataCredit = (await resCre.json()) as creditObj;
        const data = (await res.json()) as response;
        const videoKey = dataVideo.results[dataVideo.results.length - 1].key;
        const filteredCast = dataCredit.cast
          .sort((a, b) => b.popularity - a.popularity)
          .filter((ele, i) => {
            if (i == 0 || i == 1 || i == 2) return true;
            return false;
          });
        const filteredDir = dataCredit.crew
          .filter((ele) => {
            if (ele.known_for_department == "Directing") return true;
            return false;
          })
          .sort((a, b) => b.popularity - a.popularity)
          .filter((ele, i) => {
            if (i == 0 || i == 1 || i == 2) return true;
            return false;
          });
        const filteredWri = dataCredit.crew
          .filter((ele) => {
            if (ele.known_for_department == "Writing") return true;
            return false;
          })
          .sort((a, b) => b.popularity - a.popularity)
          .filter((ele, i) => {
            if (i == 0 || i == 1 || i == 2) return true;
            return false;
          });
        setDataKey(videoKey);
        setDataCast(filteredCast);
        setDataDir(filteredDir);
        setDataWri(filteredWri);
        setDataRes(data);
      } catch (err) {
        console.log("error");
      }
    };

    awaitData();
  }, [params.id]);

  return (
    <Dialog>
      <div className="w-screen flex flex-col gap-10 items-center">
        <Header />
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
              <DialogTrigger>
                <div className="bg-white rounded-full flex items-center justify-center w-10 h-10">
                  {" "}
                  <IoPlayOutline className="w-4 h-4" />
                </div>
              </DialogTrigger>

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
        <Footer />
      </div>
      <DialogTitle>Trailer for {dataRes?.title}</DialogTitle>
      <DialogContent className="w-[997px] h-[561px] p-0 overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${dataKey}`}
          title="Movie Trailer"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
}
