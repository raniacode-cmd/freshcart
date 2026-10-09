"use client"
import React, { useState } from 'react'
import { Heart } from 'lucide-react';
import { addProductToWhishList } from '@/wishListAction/Addproducttowishlist.action';
import { toast } from 'react-toastify';
import { Removeproductfromwishlist } from '@/wishListAction/Removeroductfromwishlist.types';
export default function ({id,isWhishlisted}:{id:string,isWhishlisted:boolean}) {
const [whishlist, setWishlist] = useState(isWhishlisted)

    async function TooglewishList(){

if(whishlist){
  try{
setWishlist(false)
    const response = await Removeproductfromwishlist(id)
   
   if(response.status=="success"){
       toast.success(response.message,{position:"top-right" ,autoClose:2000,closeOnClick:true})
   }

}catch(error){
    toast.error("can't remove from  wishListnow",{position:"top-right" ,autoClose:2000,closeOnClick:true})

  }

}
else{
    try{
      setWishlist(true)
        const response= await addProductToWhishList(id)
   
    if(response.status=="success"){
        toast.success(response.message,{position:"top-right" ,autoClose:2000,closeOnClick:true})
    }
    }catch(error){
        toast.error("can't add product to wishListnow",{position:"top-right" ,autoClose:2000,closeOnClick:true})
    }
}

   
 }
   return (
    <>
    <div
  onClick={() => TooglewishList()}
  className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
>
  <Heart
    size={18}
    className={whishlist ? "text-green-600 fill-green-600" : "text-gray-600"}
  />
</div>
    </>
  )
}
