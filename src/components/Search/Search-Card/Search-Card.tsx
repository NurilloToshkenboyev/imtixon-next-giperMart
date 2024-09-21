import { productTypes } from "@/service/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SearchCard = ({ img, title, id }: productTypes) => {
  return (
    <>
      <Link href={`/product-detail/${id}`}>
        <div className="w-full bg-white flex justify-around items-center cursor-pointer p-4 h-fit">
          <Image
            className="border"
            src={img}
            alt=""
            objectFit="cover"
            width={100}
            height={100}
          />
          <h1 className="text-[rgb(10,_10,_10)] font-[Poppins] text-[14px] font-normal leading-[20px] tracking-[0%] text-left line-clamp-2 w-60">
            {title}
          </h1>
        </div>
      </Link>
    </>
  );
};