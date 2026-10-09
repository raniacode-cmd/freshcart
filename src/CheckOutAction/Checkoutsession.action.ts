"use server"

import getMyToken from "@/utilites/getMyToken.utilites"
interface Shipping{
    details:string,
    phone:string,
    city:string,
}

export async function onlinePayment(cartId:string , url:string,values:Shipping) {
   const token= await getMyToken()
   if(!token){
    return null
   }
   
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{
     method:"POST",
     headers:{
     token,
     "Content-type":"application/json"
     },
    body:JSON.stringify({shippingAddress:values})

    })

const payLoad = await response.json()
return payLoad
}









