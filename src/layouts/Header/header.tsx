import { Logo } from "@/assets/icon/Logo";
import GlavniMenu from "@/components/Navbar/client";
import { Search } from "@/components/Search/Search";
import { Loader, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export const Header = () => {
  return (
    <>
      <div
        style={{
          gap: "20px",
        }}
        className="flex p-3 md:px-5 md:py-6 flex-wrap justify-between items-center gap-6 w-full bg-white border-b"
      >
        <Link href={"/"} className="cursor-pointer">
          <Logo />
        </Link>

        <Suspense
          fallback={
            <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white transition-all rounded-lg lg:hidden bg-primary hover:bg-primary/80">
              <Loader />
            </div>
          }
        >
          <GlavniMenu />
        </Suspense>

        <div className="max-w-[930px] w-full ml-10">
          <Search />
        </div>

        <div className="justify-between w-fit p-3 cursor-pointer border-black flex gap-3">
          <h1 className="mr-5">Kirish</h1>
          <div className="">
            <p className="w-4 h-4">
              <UserCircleIcon />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};