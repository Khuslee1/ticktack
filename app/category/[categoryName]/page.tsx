"use client";
import { Small } from "@/_component/Small";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  return (
    <div className="w-screen flex flex-col gap-10">
      <Small title={params.categoryName as string} />
    </div>
  );
}
