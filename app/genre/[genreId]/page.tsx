"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { useParams } from "next/navigation";
import { GenrePage } from "@/_component/GenrePage";
import { useState } from "react";
import { genreObj } from "@/_type/types";

export default function Home() {
  const params = useParams<{ genreId: string }>();
  const [genreObject, setGenreobject] = useState<genreObj>();
  console.log(params.genreId);

  return (
    <div className="w-screen flex flex-col gap-10">
      <Header setGenreObj={setGenreobject} />
      <GenrePage
        genreId={params.genreId.split("%2C")}
        genreObject={genreObject}
      />
      <Footer />
    </div>
  );
}
