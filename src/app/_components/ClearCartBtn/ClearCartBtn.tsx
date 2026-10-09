"use client"
import { ClearUserCart } from '@/cartAction/ClearUserCart.action'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function ClearCartBtn() {
    const router= useRouter()
    async function clearCart(){
    const response = await ClearUserCart()
    
    if(response.status=="success"){
        toast.success(response.message,{position:"top-right",autoClose:2000,closeOnClick:true})
      router.refresh()
    }else{
        toast.error("can't clear your cart",{position:"top-right",autoClose:2000,closeOnClick:true})
    }
  
}
 
    return (
    <>
     <Button onClick={()=>clearCart()} className={"cursor-pointer bg-green-500 hover:bg-green-600"}>Clear Your Cart</Button>
    </>
  )
}
