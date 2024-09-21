import { getCatalog } from "@/service/query/get-catalog";
import Link from "next/link";
import React from "react";

export const Aside = async () => {
  const catalog = await getCatalog();
  return (
    <>
      <div className="w-20 md:w-full">
        <div style={{gap:"20px"}} className="flex flex-col">
          {catalog.map((catalogs) => (
            <>
              <Link className="" key={catalogs.id} href={`/Detail/${catalogs.name}`}>
                <div style={{padding:"10px", paddingBottom:"10px"}} className="text-[rgb(13,_17,_54)] font-lato text-[14px] font-normal rounded-lg leading-[22.5px] tracking-[0%] text-left hover:bg-primary hover:text-white">
                  <strong className="hover:underline">{catalogs.text}</strong>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
