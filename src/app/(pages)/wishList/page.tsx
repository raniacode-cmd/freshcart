import { Getloggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist..action'


import { wishListing } from '@/types/wishList.types';
import WishListReview from './../../_components/wishListReview/wishListReview';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default async function WishList() {
  const response = await  Getloggeduserwishlist()
 
if(response.data.length===0){
  return <div className=' flex justify-center rounded-2xl  p-5  bg-red-300 w-[70%] mx-auto text-4xl'> <h1>your whishList is Empty</h1> </div>
}
 
 
  return (
    <>
  
  <div className="bg-white text-gray-800 shadow-lg p-10 my-4 w-full mx-auto min-h-[200px]">

  <div className="text-sm ">
    <Link href="/" className="hover:underline text-pink-500">
      Home
    </Link>{" "}
    / Wishlist
  </div>

  <div className="flex items-center gap-5">

    <div className="bg-pink-100 p-4 rounded-2xl text-red-500">
      <Heart size={24} fill="red" />
    </div>

    <div>
      <h1 className="text-2xl font-bold mb-1 text-red-500">
      My  Wishlist
      </h1>

      <p className="text-base text-gray-500">
        Your favorite products,
      </p>
    </div>

  </div>

</div>
    <div className='w-[80%] mx-auto  p-5 rounded-2xl space-y-5'>
   
    {response.data.map((product:wishListing)=><WishListReview product={product} />)}
    



    </div>
    
    
    
    
    
    
    
    </>
  )
}
