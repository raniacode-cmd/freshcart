import getMyToken from "@/utilites/getMyToken.utilites"


export async function Removeproductfromwishlist(id:string){
    const token = await getMyToken()
    if(!token){
        throw new Error("login again!!")
    }


    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
method:"DELETE",
headers:{
token,
"Content-type":"application/type"
}

    })
const payLoad = await response.json()
return payLoad
}








