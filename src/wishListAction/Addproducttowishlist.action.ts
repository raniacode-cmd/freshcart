"use server"
import getMyToken from "@/utilites/getMyToken.utilites"
import { json } from "zod"

export async function addProductToWhishList(id:string){
  
    const token = await getMyToken()
   if(!token){
    throw new Error("login again!!")
   }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
     method:"POST",
      headers:{
   token,
    "Content-type":"application/json"
      },
body:JSON.stringify({productId:id})
    }) 
const payLoad = await response.json()
return payLoad
}