"use client";
import { Button } from "@/components/ui/button";
import { wishListing } from "@/types/wishList.types";
import { Removeproductfromwishlist } from "@/wishListAction/Removeroductfromwishlist.types";
import { Loader, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import  { useState } from "react";
import { toast } from "react-toastify";
import AddBtn from "../AddBtn/AddBtn";

export default function WishListReview({ product }: { product: wishListing }) {
  console.log("pppp", product);
  const router = useRouter();
  const [isLoding, setisLoding] = useState(false);
  async function RemoveWishList() {
    try {
      setisLoding(true);
      const response = await Removeproductfromwishlist(product.id);
     
      if (response.status == "success") {
        toast.success(response.message, {
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
        });
        router.refresh();
      }
    } catch (error) {
      toast.error("can't from whishList", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      });
    } finally {
      setisLoding(false);
    }
  }

  return (
    <>
     <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">

{/* Product Info */}
<div className="flex items-center gap-5 w-full">

  <div className="bg-gray-50 rounded-xl p-3 shrink-0">
    <Image
      src={product.imageCover}
      alt={product.title}
      width={130}
      height={130}
      className="w-[130px] h-[130px] object-contain"
    />
  </div>

  <div className="min-w-0">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
      {product.title}
    </h2>

    <p className="text-green-600 text-lg font-bold mt-2">
      {product.price} EGP
    </p>
  </div>

</div>

{/* Buttons */}
<div className="flex flex-col gap-3 w-full sm:w-[180px] shrink-0">

  <Button
    disabled={isLoding}
    onClick={() => RemoveWishList()}
    className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 cursor-pointer"
  >
    {isLoding ? (
      <Loader className="animate-spin" />
    ) : (
      <span className="flex items-center justify-center gap-2">
        Remove
        <Trash size={18} />
      </span>
    )}
  </Button>

  <AddBtn showAlways id={product.id} />

</div>

</div>
    </>
  );
}
