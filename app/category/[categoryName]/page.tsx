"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { Small } from "@/_component/Small";
import { useParams } from "next/navigation";
import { genreObj } from "@/_type/types";
import { SetStateAction } from "react";

export default function Home() {
  const params = useParams();
  return (
    <div className="w-screen flex flex-col gap-10">
      <Header
        setGenreObj={function (
          value: SetStateAction<genreObj | undefined>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Small title={params.categoryName as string} />
      <Footer />
    </div>
  );
}
