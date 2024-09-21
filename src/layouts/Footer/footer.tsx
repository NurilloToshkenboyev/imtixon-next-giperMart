import { AppStoreIcon } from "@/assets/icon/PlayMarket";
import { GooglePlayIcon } from "@/assets/icon/GoogleCromeIcone";
import { Logo } from "@/assets/icon/Logo";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between  py-8">
        <div className="">
          <Link href={"/"}>
            <Logo />
          </Link>

          <div className="mt-5">
            <strong>Mobilux © 2022</strong>
            <p>Barcha huquqlar kafolatlangan</p>

            <div className="flex gap-3 pt-4">
              <GooglePlayIcon />
              <AppStoreIcon />
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-[rgb(13,_17,_54)] font-[Poppins] text-[19px] font-medium leading-[22.8px] tracking-[0%] text-left">
            Foydali havolalar
          </h1>
          <ul className="flex flex-col text-[rgb(13,_17,_54)] font-poppins text-[13px] font-normal leading-[19.5px] tracking-[0%] text-left">
            <Link href={"/"}>Bosh sahifa</Link>
            <Link href={"/"}>Yordam kerakmi?</Link>
            <Link href={"/"}>Foydalanish shartlari</Link>
            <Link href={"/"}>Maxfiylik siyosati</Link>
          </ul>
        </div>

        <div className="">
          <h1 className="text-[rgb(13,_17,_54)] font-[Poppins] text-[19px] font-medium leading-[22.8px] tracking-[0%] text-left">
            Biz haqimizda
          </h1>
          <ul className="text-[rgb(13,_17,_54)] font-poppins text-[13px] font-normal leading-[19.5px] tracking-[0%] text-left">
            <li>
              Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
              03113, Crescent Trade ltd
            </li>
            <li>Korxona nomi: Mobilux trade</li>
            <li>Korxona rahbari: HASANBOY TURSUNOV</li>
            <li>Registratsiya raqami: 433-62-00377</li>
            <li>Telefon raqam: 93 000 66-44 97 000 66-44</li>
          </ul>
        </div>
      </div>
    </>
  );
};