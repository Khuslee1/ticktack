"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { Small } from "@/_component/Small";

const cata = { title: "Popular" };

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-10">
      <Header />
      <Small title={cata.title} />
      <Footer />
    </div>
  );
}
