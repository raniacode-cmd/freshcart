export async function getSpecificSubCategory(id: string) {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories/${id}`
    )
  
    const payload = await response.json()
  
    return payload
  }