"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";

// const cata = { title: "Upcoming" };
type moreLikeType = { img: string; name: string; rating: number };
type allDataType = {
  neme: string;
  date: string;
  duration: number;
  rating: number;
  views: number;
  img: string;
  genre: string[];
  text: string;
  director: string;
  writers: string[];
  starts: string[];
  more: moreLikeType[];
};

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-10">
      <Header />
      <Footer />
    </div>
  );
}
