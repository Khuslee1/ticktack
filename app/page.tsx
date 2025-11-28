"use client";

import { Footer } from "@/_component/Footer";
import { Mainbody } from "@/_component/Mainbody";
import { Caru } from "@/_component/Caru";
import { Header } from "@/_component/Header";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <Caru />
      <Mainbody />
      <Footer />
    </div>
  );
}
