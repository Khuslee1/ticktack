"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

export const Caru = () => {
  return (
    <div className="w-screen h-[600px] relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[600px] rounded-none"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-[600px] rounded-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6 h-[600px] rounded-none">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 h-10 w-10 rounded-full" />
        <CarouselNext className="right-10 h-10 w-10 rounded-full" />
      </Carousel>
    </div>
  );
};
