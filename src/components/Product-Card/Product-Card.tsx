import { productTypes } from "@/service/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export const ProductCard = ({ img, title, price, id }: productTypes) => {
  return (
    <>
      <Link href={`/product-detail/${id}`}>
        <div className="w-[262px] h-[423px] bg-white cursor-pointer p-5 border rounded-md shadow-md space-y-3 relative">
          <Image
            src={img}
            alt=""
            layout="responsive"
            objectFit="cover"
            width={262}
            height={262}
          />
          <h1 className="text-[rgb(10,_10,_10)] font-poppins text-[14px] font-normal leading-[20px] tracking-[0%] text-left line-clamp-3">
            {title}
          </h1>
          <p className="text-[rgb(10,_10,_10)] font-lato text-[18px] font-extrabold leading-[24px] tracking-[0%] text-left">
            {`${price} so'm`}
          </p>

          <Button className="w-[227px] h-9 flex items-center gap-3 absolute bottom-4 cursor-pointer">
            <ShoppingCart /> Korzinka
          </Button>
        </div>
      </Link>
    </>
  );
};








// import { productTypes } from "@/service/types/products";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Button } from "../ui/button";
// import { ShoppingCart } from "lucide-react";

// export const ProductCard = ({ img, title, price, id }: productTypes) => {
//   return (
//     <>
//       <Link href={`/product-detail/${id}`}>
//         <div className="w-[262px] h-[423px] bg-white cursor-pointer p-5 border rounded-md shadow-md space-y-3 relative">
//           <Image
//             src={img}
//             alt=""
//             layout="responsive"
//             objectFit="cover"
//             width={262}
//             height={262}
//           />
//           <h1 className="text-[rgb(10,_10,_10)] font-poppins text-[14px] font-normal leading-[20px] tracking-[0%] text-left line-clamp-3">
//             {title}
//           </h1>
//           <p className="text-[rgb(10,_10,_10)] font-lato text-[18px] font-extrabold leading-[24px] tracking-[0%] text-left">
//             {`${price} so'm`}
//           </p>

//           <Button className="w-[227px] h-9 flex items-center gap-3 absolute bottom-4 cursor-pointer bg-white text-black border border-gray-300">
//             <ShoppingCart /> Qo'shish
//           </Button>
//         </div>
//       </Link>
//     </>
//   );
// };







