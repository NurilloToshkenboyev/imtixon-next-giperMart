import { productTypes } from "@/service/types/products";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft, CirclePlus, Heart } from "lucide-react";
import { UzbFlagIcon } from "@/assets/icon/FlagIcone";

export const DetailCard = ({
  price,
  title,
  img,
  brand,
  color,
  id,
  ram,
  rame,
  text,
  core,
  display,
  geForce,
  memory,
  weight,
  details,
}: productTypes) => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full bg-white">
        <div className="w-full p-5 md:p-16 relative">
          <Image
            src={img}
            className="border-dashed border mt-10 md:mt-0"
            alt=""
            objectFit="cover"
            width={480}
            height={480}
          />
          <div className="absolute -top-2 mx-auto flex justify-between items-center w-full px-7 py-6 left-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary cursor-pointer rounded-md hover:bg-slate-300">
              <ArrowLeft />
              <Link
                className="text-[rgb(10,_10,_10)] font-[Lato] text-[15px] font-bold leading-[22.5px] tracking-[0%] text-left"
                href={"/"}
              >
                orqaga
              </Link>
            </div>
            <Heart />
          </div>
        </div>
        <div className="space-y-5 w-full p-2 md:p-12">
          <h1 className="text-[rgb(0,_0,_0)] font-lato text-2xl md:text-[36px] font-bold leading-[43px] tracking-[9.5%] text-left">
            {title}
          </h1>
          <p className="text-primary font-lato text-[42px] font-bold leading-[50px] tracking-[0%] text-left">
            {price} so'm
          </p>
          <Button className="flex items-center gap-3 bg-black hover:text-black w-[239px] text-white font-lato text-[16px] font-normal leading-[20px] tracking-[0%] text-center rounded-lg">
            <CirclePlus /> savatchaga
          </Button>
          <div className="space-y-5">
            <div className="p-3 flex gap-3 items-center bg-primary/50 rounded-xl">
              <UzbFlagIcon />
              <p className="font-lato text-[14px] font-bold leading-[18px] tracking-[0px] text-left">
                O'zbekiston bo'ylab yetkazib berish:{" "}
                <span className="font-lato text-[15px] font-normal leading-[18px] tracking-[0%] text-left">
                  14 ish kuni
                </span>
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-[rgb(0,_0,_0)] font-lato text-[18px] font-bold leading-[22px] tracking-[9.5%] text-left">
                Описание
              </h1>
              <p className="text-[rgb(10,_10,_10)] font-lato text-[16px] font-normal leading-[20px] tracking-[0%] text-left">
                {title} оснащен передовыми технологиями, значительно
                расширяющими функциональные возможности девайса. На тыльной
                стороне девайса расположен инновационный
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border">
        <div className="py-8 px-6 space-y-8">
          <h1 className="text-[rgb(0,_0,_0)] font-lato text-lg md:text-[24px] font-extrabold leading-[29px] tracking-[9.5%] text-left">
            Основные характеристики
          </h1>
          <ul className="text-[rgb(128,_128,_128)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
            {brand ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Бренд</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {brand}
                </p>
              </li>
            ) : (
              ""
            )}

            {memory || rame ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Объем встроенной памяти</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {memory || rame}
                </p>
              </li>
            ) : (
              ""
            )}

            {core ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96"> Процессор</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {core}
                </p>
              </li>
            ) : (
              ""
            )}

            {details ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Диагональ</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {details?.diagonal}
                </p>
              </li>
            ) : (
              ""
            )}

            {display || details ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Тип дисплея</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {display || details?.display}
                </p>
              </li>
            ) : (
              ""
            )}

            {ram ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Оперативная память</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {ram}
                </p>
              </li>
            ) : (
              ""
            )}

            {weight || details ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Вес </p>
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {weight || details.weight}
                </p>
              </li>
            ) : (
              ""
            )}

            {geForce ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Видеокарта</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {geForce}
                </p>
              </li>
            ) : (
              ""
            )}

            {color ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Цвет</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {color}
                </p>
              </li>
            ) : (
              ""
            )}

            {details ? (
              <li className="flex p-2 border border-dashed">
                <p className="w-52 md:w-96">Количество ядер</p>{" "}
                <p className="text-[rgb(0,_0,_0)] font-lato text-[14px] font-medium leading-[20px] tracking-[9.5%] text-left">
                  {details?.frequency}
                </p>
              </li>
            ) : (
              ""
            )}
          </ul>

          <h1 className="text-primary font-lato text-[14px] font-bold leading-[17px] tracking-[9.5%] text-left">
            Все характеристики
          </h1>
        </div>
      </div>
    </>
  );
};