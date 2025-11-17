"use client";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import { IoPlayOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoStarFill } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bombog } from "@/_component/Bombog";
import { useEffect, useState } from "react";

const CaryData = [
  {
    id: "asdf",
    img: "",
    Name: "Wicked",
    point: 9,
    text: `Elphaba, a misunderstood young woman because of her
           green skin, and Glinda, a popular girl, become friends
           at Shiz University in the Land of Oz. After an encounter
           with the Wonderful Wizard of Oz, their friendship
           reaches a crossroads.`,
  },
  {
    id: "asdf1",
    img: "",
    Name: "Wicked",
    point: 9,
    text: `Elphaba, a misunderstood young woman because of her
           green skin, and Glinda, a popular girl, become friends
           at Shiz University in the Land of Oz. After an encounter
           with the Wonderful Wizard of Oz, their friendship
           reaches a crossroads.`,
  },
  {
    id: "asdf2",
    img: "",
    Name: "Wicked",
    point: 9,
    text: `Elphaba, a misunderstood young woman because of her
           green skin, and Glinda, a popular girl, become friends
           at Shiz University in the Land of Oz. After an encounter
           with the Wonderful Wizard of Oz, their friendship
           reaches a crossroads.`,
  },
  {
    id: "asdf3",
    img: "",
    Name: "Wicked",
    point: 9,
    text: `Elphaba, a misunderstood young woman because of her
           green skin, and Glinda, a popular girl, become friends
           at Shiz University in the Land of Oz. After an encounter
           with the Wonderful Wizard of Oz, their friendship
           reaches a crossroads.`,
  },
  {
    id: "asdf4",
    img: "",
    Name: "Wicked",
    point: 9,
    text: `Elphaba, a misunderstood young woman because of her
           green skin, and Glinda, a popular girl, become friends
           at Shiz University in the Land of Oz. After an encounter
           with the Wonderful Wizard of Oz, their friendship
           reaches a crossroads.`,
  },
  {
    id: "asdf5",
    img: "",
    Name: "Wicked",
    point: 9,
    text: `Elphaba, a misunderstood young woman because of her
           green skin, and Glinda, a popular girl, become friends
           at Shiz University in the Land of Oz. After an encounter
           with the Wonderful Wizard of Oz, their friendship
           reaches a crossroads.`,
  },
];

export const Caru = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="w-screen h-[600px] relative flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full h-[600px] rounded-none justify-center flex"
      >
        <CarouselContent>
          {CaryData.map((ele, i) => (
            <CarouselItem key={ele.id}>
              <div className="p-1">
                <Card className="h-[600px] rounded-none pl-115">
                  <CardContent className="flex aspect-square items-center p-6 h-[600px] rounded-none">
                    <div className="w-[404px] gap-4 flex flex-col">
                      <h1 className="flex flex-col font-sans font-bold text-[36px]">
                        <span className="text-[16px] font-normal">
                          Now Playing:
                        </span>
                        {ele.Name}
                        <div className="w-full flex items-center gap-1">
                          {" "}
                          <GoStarFill className="text-[#FDE047] w-7 h-7" />{" "}
                          <span className="font-semibold text-[18px]">
                            {ele.point}
                          </span>
                          <span className="text-[16px] text-gray-500 font-normal">
                            /10
                          </span>
                        </div>
                      </h1>
                      <p className="text-[12px] w-80 font-sans">{ele.text} </p>
                      <Button
                        variant="outline"
                        className="w-[145px] h-10 text-[14px]"
                      >
                        <IoPlayOutline />
                        Watch trailer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 h-10 w-10 rounded-full" />
        <CarouselNext className="right-10 h-10 w-10 rounded-full" />
        <Bombog CaryData={CaryData} />
      </Carousel>
    </div>
  );
};
