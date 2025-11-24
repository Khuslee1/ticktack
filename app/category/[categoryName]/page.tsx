"use client";
import { Header } from "@/_component/Header";
import { Footer } from "@/_component/Footer";
import { Small } from "@/_component/Small";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  return (
    <div className="w-screen flex flex-col gap-10">
      <Header />
      <Small title={params.categoryName as string} />
      <Footer />
    </div>
  );
}
