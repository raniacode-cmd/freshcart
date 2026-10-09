import { getAllProducts } from '@/api/allproducts.api'
import React from 'react'
import SingelProduct from '../singelProduct/page.tsx/singelProduct'
import { ProductType } from '@/types/allProducts.types'
import { Getloggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist..action'
import { wishListing } from '@/types/wishList.types'

export default async function AllProducts() {

    let {data} = await getAllProducts()
 

   const whishlist = await Getloggeduserwishlist()
   
   
   const whishlistIds= whishlist.data.map((wishlist:wishListing)=>wishlist.id)
   
   
   
   return (
   <>
   
   <div className='w-[90%] mx-auto my-5 mt-8'>
    
   <div className=" mx-auto flex items-center justify-between my-6 mt-7">
        <h2 className="text-3xl font-bold flex items-center gap-2 border-l-4 border-[#00a859] pl-3 text-[#1a2530]">
        Featured  <span className="text-[#00a859]">Products</span>
        </h2>
      

      </div>
    
      <div className=' flex flex-wrap'>
     {data.map((currentProduct:ProductType)=>
   
   <SingelProduct  key={currentProduct.id} currentProduct={currentProduct} isWhishlisted={whishlistIds.includes(currentProduct.id)} />
   )}



      </div>



   </div>
   
   
   
   </>
  )
}
