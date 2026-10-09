


"use server"

export async function getAllCategory(){
    const response = await fetch (`https://ecommerce.routemisr.com/api/v1/categories`,{

    cache: 'force-cache',
    })
const payLoad = await response.json()
return payLoad
}


















