"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { Small } from "@/_component/Small";

const title: string = "popular";
export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-10">
      <Header />
      <Small title={title} />
      <Footer />
    </div>
  );
}
