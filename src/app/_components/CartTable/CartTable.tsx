import { CartType, CartTyping } from '@/types/cart.types'
import Image from 'next/image'
import React from 'react'
import RemoveBtn from '../RemoveBtn/RemoveBtn'
import { Button } from '@/components/ui/button'
import ClearCartBtn from '../ClearCartBtn/ClearCartBtn'
import UpdateQuantity from '../UpdateQuantity/UpdateQuantity'
import CheckOutBtn from '../CheckOutBtn/CheckOutBtn'

export default function CartTable({cart}:{cart:CartType}) {
  return (
    <>
    
    {cart.data.products.length == 0 ? (
  <div className="min-h-[400px] flex items-center justify-center">
    <h1 className="text-slate-400 text-4xl text-center font-semibold">
      Your Cart is Empty
    </h1>
  </div>
) : (
  <>
   
    <div className="w-[80%] mx-auto my-8">
      <div className="flex justify-between items-center bg-white rounded-2xl shadow-md p-6">

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            My Cart
          </h2>

          <h3 className="text-lg font-medium text-gray-600">
            Total Cart Price :
            <span className="text-green-500 font-bold ml-2">
              {cart.data.totalCartPrice} EGP
            </span>
          </h3>
        </div>

        <ClearCartBtn />

      </div>
    </div>

   
    <div className="w-[80%] mx-auto space-y-4">

      {cart.data.products.map((product) => (
        <div
          key={product.product.id}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
        >

          
          <div className="w-[120px] h-[120px] bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
            <Image
              src={product.product.imageCover}
              width={110}
              height={110}
              className="w-full h-full object-contain p-2"
              alt={product.product.title}
            />
          </div>

         
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {product.product.title}
            </h2>

            <p className="text-green-600 font-bold text-lg">
              {product.price * product.count} EGP
            </p>
          </div>

         
          <div>
            <UpdateQuantity
              count={product.count}
              id={product.product.id}
            />
          </div>

          
          <div>
            <RemoveBtn id={product.product._id} />
          </div>

        </div>
      ))}

    </div>

  
    <div className="w-[80%] mx-auto flex justify-end my-8">
      <div className="w-55">
        <CheckOutBtn cartId={cart.cartId} />
      </div>
    </div>

  </>
)}
  
  


    
    </>
  )
}
