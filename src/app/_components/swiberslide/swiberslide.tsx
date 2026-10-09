'use client'
import  { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Star } from 'lucide-react'
import {Autoplay} from 'swiper/modules'
import { ProductType } from '@/types/allProducts.types';
import AddBtn from '../AddBtn/AddBtn';

export default function SwiperSlider({data}:{ data:ProductType}) {
  const [selectetImage, setselectetImage] = useState(data.imageCover)
  
 
    return (
  <>
  
  <div className='w-[90%] mx-auto'>
   <div className='flex '>

   <div className='w-full md:w-1/4'>
     <img src={selectetImage} alt="" />


   
     <Swiper
      spaceBetween={30}
      slidesPerView={4}
     modules={[Autoplay]}
    autoplay={{delay:3000}}
    >
        {data.images.map((image)=> <SwiperSlide onClick={()=>setselectetImage(image)}><img src={image} alt="" /></SwiperSlide>)}
     
      
    </Swiper>
  
    </div>

<div  className='w-full md:w-3/4 my-20'>
<h2 className='text-green-600 text-xl font-semibold'>{data.title}</h2>
<p className='my-3'>{data.description}</p>
<div className='flex justify-between items-center'>
         <div className='star-left'>
          <span>{data.price} EGP</span>
         </div>
         <div className='star-right'>
          <span className='flex items-center'>{data.ratingsAverage}  <Star size={20} className='text-[#FFC908]' fill='#FFC908' /></span>
         </div>
       </div>

      <AddBtn showAlways id={data.id}/>
</div>


   </div>


    </div>
 
 
 
 
 
 
 
 
 
 
  
  
  
  
  
  
  </>
  )
}
