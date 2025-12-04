"use client";

import { vidObj } from "@/_type/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoPlayOutline } from "react-icons/io5";

export const MovieTrailer = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState<string>();

  useEffect(() => {
    const awaitData = async () => {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${id}/videos?language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
          },
        }
      );

      const videos = (await res.json()) as { results: vidObj[] };

      const trailer = videos.results.find((item) => item.type === "Trailer");

      setKey(trailer?.key);

      setLoading(false);
    };

    awaitData();
  }, [id]);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-white rounded-full flex items-center justify-center w-10 h-10">
          <IoPlayOutline className="w-4 h-4 text-black" />
        </div>
      </DialogTrigger>

      <DialogContent className="min-w-[997px] h-[561px] p-0 overflow-hidden">
        <DialogTitle className="hidden">Trailer</DialogTitle>

        <iframe
          className="w-full h-full"
          src={`${process.env.NEXT_PUBLIC_YOUTUBE_URL}${key}`}
          title="Movie Trailer"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};
