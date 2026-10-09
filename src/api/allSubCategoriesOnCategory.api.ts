"use server"

export const getSubCategoriesOnCategory = async (id: string) => {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
    {
      next: { revalidate: 60 }
    }
  )

  const payLoad = await response.json()

  return payLoad
}




