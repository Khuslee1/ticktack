"use client";
import { Mainbody } from "@/_component/Mainbody";
import { Caru } from "@/_component/Caru";

export default function Home() {
  return (
    <div className="w-screen">
      <Caru />
      <Mainbody />
    </div>
  );
}
