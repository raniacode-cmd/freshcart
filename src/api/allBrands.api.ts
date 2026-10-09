"use server"
import { Brandd } from "@/types/allBrands.types"

export const getAllBrands = async (): Promise<Brandd> => {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands`,{
        cache: 'force-cache',
    }
  )

  const payLoad: Brandd = await response.json()

  return payLoad
}









