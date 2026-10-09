"use server"
import getMyToken from "@/utilites/getMyToken.utilites"



export default async function RemoveFromCart(id:string){
const token = await getMyToken()
  if(!token) {
    throw new Error('login first')
  }


   const response =  await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
    method:"DELETE",
    headers:{
    token,
    "Content-type":"application/json"
    }
})
const payLoad = await response.json()
return payLoad
}
