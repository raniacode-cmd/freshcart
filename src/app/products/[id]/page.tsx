import { getProductsDetails } from '@/api/productDetails.api'
import React from 'react'
import { Headphones, RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react'
import { ShoppingCart } from 'lucide-react';

import SwiperSlider from '@/app/_components/swiberslide/swiberslide';

export default async function ProductDetail({params}:{params :Promise<{id:string}>}) {
 
 let {id} = await params
 let {data} =await  getProductsDetails(id)
 console.log('productdetails',data)
 return (
  <>
    <SwiperSlider data={data} />

  
  </>
)
}
