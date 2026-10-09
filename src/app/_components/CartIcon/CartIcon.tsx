import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import getLoggedUserCart from "@/cartAction/getLoggedUserCart.action";
export default async function CartIcon() {
  const response = await getLoggedUserCart();

  return (
    <>
      <Link
        className=" relative  flex items-center gap-1  hover:text-green-600  transition-all duration-300"
        href={"/cart"}
      >
        Cart <ShoppingCart className="hover-fill-green-600" />{" "}
        <span className="bg-green-600 px-1 rounded-full absolute -top-3 -right-3 text-white">{response.numOfCartItems}</span>
      </Link>
    </>
  );
}
