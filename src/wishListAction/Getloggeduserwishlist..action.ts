"use server"

import getMyToken from "@/utilites/getMyToken.utilites"
import { error } from "console"


export async function Getloggeduserwishlist(){
const token = await getMyToken()
if(!token){
    throw new Error("login again!!")
}

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    method:"GET",
    headers:{
        token,
      "Content-type":"application/json"
    
    }
})
const payLoad = await response.json()
return payLoad
}


