import { video } from "@/_type/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
type idyes = {
  id: number;
};
export const CaruDialog = ({ id }: idyes) => {
  const [dataVid, setDataVid] = useState<string>("");
  const [dataId, setDataId] = useState<number>();

  useEffect(() => {
    const awaitDatavid = async () => {
      try {
        const resvid = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${dataId}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_TOKEN_KEY}`,
            },
          }
        );
        console.log(dataId);
        const data = (await resvid.json()) as video;
        setDataVid(
          data.results.filter((ele) => {
            return ele.type == "Trailer";
          })[0].key
        );
        console.log(dataVid);
      } catch (err) {
        console.log("error");
      }
    };

    awaitDatavid();
  }, [dataId]);
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <div
          className="w-[145px] h-10 text-[14px] text-black bg-white flex items-center justify-center rounded-md font-sans font-medium"
          onClick={() => {
            setDataId(id);
          }}
        >
          <IoPlayOutline className="font-medium" />
          Watch trailer
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[997px] h-[561px] p-0">
        <DialogTitle className="hidden"></DialogTitle>
        <iframe
          className="w-full h-full"
          src={`${process.env.NEXT_PUBLIC_YOUTUBE_URL}${dataVid}`}
          title="Movie Trailer"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};
