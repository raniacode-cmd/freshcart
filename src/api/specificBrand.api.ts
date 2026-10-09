"use server"
export const getspecificbrand = async (id: string) => {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
      {
        cache: 'force-cache',
      }
    )
  
    const payLoad = await response.json()
  
    return payLoad
  }







