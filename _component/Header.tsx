"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HiChevronDown } from "react-icons/hi";
import { TbMovie } from "react-icons/tb";
import { genreObj } from "@/_type/types";
import { useParams, useRouter } from "next/navigation";
import { SearchDropdown } from "@/_component/SearchDropdown";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { GenreButton } from "./GenreButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const router = useRouter();
  const params = useParams();
  const idArr: string[] = String(params.genreId ?? "")
    .split("%2C")
    .filter(Boolean);
  const { setTheme, theme } = useTheme();
  const [object, setObject] = useState<genreObj>();

  return (
    <div
      className={`w-screen h-[59px] flex items-center justify-center  pl-4 pr-4 sticky top-0 left-0 z-50 ${
        theme == "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="w-7xl h-9 flex justify-between">
        <div
          className="flex gap-2 items-center"
          onClick={() => {
            router.push("/");
          }}
        >
          <TbMovie className="w-5 h-5 text-[#4338CA] " />
          <p className="text-4 font-sans text-[#4338CA] font-bold italic">
            Movie Z
          </p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-9 w-[97px] rounded-md  flex justify-center items-center gap-2">
              <div className="text-[14px] font-medium flex border rounded-md h-full px-3 items-center gap-1">
                {" "}
                <HiChevronDown className="size-4" />
                Genre
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`p-5 gap-4`} align="start">
              <div className="flex flex-col gap-1 pb-4 ">
                <DropdownMenuLabel className="font-sans text-[24px] font-semibold p-0">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel className="font-sans text-[16px] p-0 font-normal">
                  See lists of movies by genre
                </DropdownMenuLabel>
              </div>
              <div className="flex gap-4 flex-wrap w-[537px] pt-4 border-t">
                <GenreButton idArr={idArr} setObject={setObject} />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative w-[379px] h-9">
            <SearchDropdown />
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            if (theme == "dark") return setTheme("light");
            return setTheme("dark");
          }}
          className="h-9 w-9 p-0 rounded-md"
        >
          {" "}
          {theme == "dark" && (
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          )}
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        </Button>
      </div>
    </div>
  );
};
