"use client"
import RemoveFromCart from '@/cartAction/RemoveProductFromCart.action'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default  function RemoveBtn({id}:{id:string}) {
 const router= useRouter()
 
    async function deletfromCart(id:string){
   try{
  
    const response = await RemoveFromCart(id)
   
   if(response.status=="success"){
    toast.success(response.massage,{position:"top-right" ,autoClose:2000 , closeOnClick:true})
    router.refresh()
}else{
    toast.error("can't remove now",{position:"top-right" ,autoClose:2000 , closeOnClick:true})
   }

}catch(error){
    toast.error("can't remove now",{position:"top-right" ,autoClose:2000 , closeOnClick:true})
   }
}
 
    return (
    <>
     <button onClick={()=>deletfromCart(id)} className="font-medium text-fg-danger hover:underline cursor-pointer ">Remove</button>  

    
    </>
  )
}

