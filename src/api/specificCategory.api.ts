"use server"

export const getSpecificCategory = async (id: string) => {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    {
      next: { revalidate: 60 }
    }
  )

  const payLoad = await response.json()

  return payLoad
}