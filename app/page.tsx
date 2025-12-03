"use client";

import { Footer } from "@/_component/Footer";
import { Mainbody } from "@/_component/Mainbody";
import { Caru } from "@/_component/Caru";
import { Header } from "@/_component/Header";
import { genreObj } from "@/_type/types";
import { SetStateAction } from "react";

export default function Home() {
  return (
    <div className="w-screen">
      <Header
        setGenreObj={function (
          value: SetStateAction<genreObj | undefined>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Caru />
      <Mainbody />
      <Footer />
    </div>
  );
}
