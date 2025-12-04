"use client";

import { useParams } from "next/navigation";
import { GenrePage } from "@/_component/GenrePage";

export default function Home() {
  const params = useParams<{ genreId: string }>();

  return (
    <div className="w-screen flex flex-col gap-10">
      <GenrePage genreId={params.genreId.split("%2C")} />
    </div>
  );
}
