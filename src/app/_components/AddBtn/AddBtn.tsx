"use client";
import { AddProductToCart } from "@/cartAction/AddToCart.Action";
import { Button } from "@/components/ui/button";
import { Loader, ShoppingCart } from "lucide-react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddBtn({
  id,
  showAlways = false,
}: {
  id: string;
  showAlways?: boolean;
}) {
  const router = useRouter();
  const [isLoding, setIsLoding] = useState(false);

  async function AddToCart(id: string) {
    const session = await getSession();
    if (!session) {
      router.push("/login");
      return;
    }
    try {
      setIsLoding(true);
      const response = await AddProductToCart(id);
      console.log(response);
      if (response.status == "success") {
        router.refresh();
        toast.success(response.massage, {
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
        });
      } else {
        toast.error("somthing went wrong", {
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
        });
      }
    } catch (error) {
      toast.error("somthing went wrong", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      });
    } finally {
      setIsLoding(false);
    }
  }

  return (
    <>
      <Button
        onClick={() => AddToCart(id)}
        className={` w-full  my-3 bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer ${
          !showAlways ? "opacity-0 group-hover:opacity-100 " : ""
        }`}
      >
        {isLoding ? <Loader className=" animate-spin" /> : "Add To Cart"}{" "}
        <ShoppingCart color="white" />
      </Button>
    </>
  );
}
