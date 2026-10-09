import React from 'react'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Eye, RefreshCw, Heart, ShoppingCart, Star } from 'lucide-react';
  import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductType } from '../../../../types/allProducts.types';
import AddBtn from '../../AddBtn/AddBtn';
import WishListIcon from '../../WishListIcon/WishListIcon';
  export default function SingelProduct({currentProduct,isWhishlisted}:{currentProduct:ProductType,isWhishlisted:boolean}) {
  return (
   <>
   
  

<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">

  <Card className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-sm hover:shadow-lg transition-all duration-300 group">

  
    <div className="relative">

      <Link href={`products/${currentProduct.id}`}>
        <CardHeader className="p-0">

          <CardTitle className="h-64 flex items-center justify-center overflow-hidden bg-gray-50">
            <img
              src={currentProduct.imageCover}
              alt={currentProduct.title}
              className="h-full w-full object-contain p-5 group-hover:scale-105 transition-transform duration-300"
            />
          </CardTitle>

          <CardDescription className="p-4">

            <h2 className="text-sm font-medium text-green-600 mb-1">
              {currentProduct.category.name}
            </h2>

            <p className="text-base font-semibold text-gray-800 line-clamp-2 min-h-12">
              {currentProduct.title}
            </p>

            <div className="flex justify-between items-center mt-3">

              <span className="font-bold text-gray-900">
                {currentProduct.price} EGP
              </span>

              <span className="flex items-center gap-1 text-sm text-gray-600">
                {currentProduct.ratingsAverage}
                <Star
                  size={18}
                  className="text-[#FFC908]"
                  fill="#FFC908"
                />
              </span>

            </div>

          </CardDescription>

        </CardHeader>
      </Link>

    
      <div className="absolute right-3 top-4 flex flex-col gap-2">

    
        <WishListIcon
          id={currentProduct.id}
          isWhishlisted={isWhishlisted}
        />

       
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:text-green-600 hover:scale-105 transition"
        >
          <RefreshCw size={18} />
        </button>

      
        <Link
          href={`products/${currentProduct.id}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:text-green-600 hover:scale-105 transition"
        >
          <Eye size={18} />
        </Link>

      </div>

    </div>

    {/* Add Button - زي ما هو */}
    <div className="px-4 pb-4">
      <AddBtn id={currentProduct.id} />
    </div>

  </Card>

</div>
   
   
   
   
   </>
  )
}
