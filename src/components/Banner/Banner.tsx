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
import Image from "next/image";

interface BannerProps {
  banners: { id: number; img: string }[];
}

export const Banner: React.FC<BannerProps> = ({ banners }) => {
  return (
    <div className="w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {banners.map((item) => (
            <CarouselItem key={item.id}>
              <div className="">
                <Image
                  className="sm:h-[226px]"
                  src={item.img}
                  alt="dd"
                  layout="responsive"
                  objectFit="cover"
                  width={1086}
                  height={226}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5" />
        <CarouselNext className="right-5" />
      </Carousel>
    </div>
  );
};