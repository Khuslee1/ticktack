"use client";

import { useParams } from "next/navigation";
import { SearchPage } from "@/_component/SearchPage";

export default function Home() {
  const params = useParams<{ search: string }>();

  return (
    <div className="w-screen flex flex-col gap-10">
      <SearchPage searchVal={params.search} />
    </div>
  );
}
