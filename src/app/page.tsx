import { Banner } from "@/components/Banner/Banner";
import { ProductCard } from "@/components/Product-Card/Product-Card";
import { Aside } from "@/layouts/Menu/menu";
import { getBanners } from "@/service/query/get-banners";
import { getPhones } from "@/service/query/get-phones";
import { getProducts } from "@/service/query/get-products";
import { ShoppingBag, Star } from "lucide-react";

export default async function Home() {
  const data = (await getProducts()).slice(0, 8);
  const phone = (await getPhones()).slice(0, 8);
  const banner = await getBanners();
  return (
    <div className="flex">
      <div className="w-64 p-4 bg-white hidden md:block">
        <Aside />
      </div>
      <div className="w-fit max-w-[1086px] md:pl-6 pt-6">
        <div className=""></div>
        <div className="">
          <Banner banners={banner} />
        </div>

        <div className="">
          <div className="flex items-center gap-5">
            <span>
              <ShoppingBag color="#1FBA4A" />{" "}
            </span>
            <h1 className="my-6 text-[rgb(10,_10,_10)] font-lato text-[32px] font-bold leading-[36px] tracking-[0%] text-left">
              Yangi mahsulotlar
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {data?.map((item) => (
              <div className="" key={item.id}>
                <ProductCard key={item.id} {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-5">
            <span>
              <Star fill="#1FBA4A" color="#1FBA4A" />
            </span>
            <h1 className="my-6 text-[rgb(10,_10,_10)] font-lato text-[32px] font-bold leading-[36px] tracking-[0%] text-left">
              Ommabop mahsulotlar
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {phone?.map((item) => (
              <div className="" key={item.id}>
                <ProductCard key={item.id} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


