"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { useParams } from "next/navigation";
import { SearchPage } from "@/_component/SearchPage";
import { useState } from "react";
import { genreObj } from "@/_type/types";

export default function Home() {
  const params = useParams<{ search: string }>();
  const [genreObject, setGenreobject] = useState<genreObj>();

  return (
    <div className="w-screen flex flex-col gap-10">
      <Header setGenreObj={setGenreobject} />
      <SearchPage genreObject={genreObject} searchVal={params.search} />
      <Footer />
    </div>
  );
}
