
import Link from 'next/link'
import { ArrowLeft, FolderOpen, ShoppingBag } from 'lucide-react'

import { getSpecificSubCategory } from '@/api/specificSubCategory.api'
import { getAllProducts } from '@/api/allproducts.api'


import { ProductType } from '@/types/allProducts.types'
import { Getloggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist..action'
import { wishListing } from '@/types/wishList.types'
import SingelProduct from '@/app/_components/singelProduct/page.tsx/singelProduct'


export default async function SubCategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params


 

  const subCategory = await getSpecificSubCategory(id)


  

  const { data: products } = await getAllProducts()


  const subCategoryProducts = products.filter(
    (product: ProductType) => {

      const subcategory = (product as any).subcategory

      if (Array.isArray(subcategory)) {
        return subcategory.some(
          (item: any) => item._id === id
        )
      }

      return subcategory?._id === id
    }
  )


 

  let whishlistIds: string[] = []

  try {

    const whishlist = await Getloggeduserwishlist()

    whishlistIds =
      whishlist?.data?.map(
        (wishlist: wishListing) => wishlist.id
      ) || []

  } catch (error) {

    whishlistIds = []

  }


  return (
    <div className="min-h-screen bg-gray-50">


     

      <div className="bg-gradient-to-r from-green-600 to-green-500">

        <div className="w-[90%] mx-auto py-8">


       

          <div className="mb-6">

            <p className="text-sm text-white">

              <Link
                href="/"
                className="hover:text-gray-200 transition"
              >
                Home
              </Link>

              <span className="mx-2">
                /
              </span>

              <span>
                SubCategories
              </span>

              <span className="mx-2">
                /
              </span>

              <span>
                {subCategory.data.name}
              </span>

            </p>

          </div>


         
          <div className="flex items-center gap-5">

            <div className="
              w-16
              h-16
              rounded-2xl
              bg-white/20
              flex
              items-center
              justify-center
            ">

              <FolderOpen
                size={34}
                className="text-white"
              />

            </div>


            <div>

              <h1 className="
                text-3xl
                font-bold
                text-white
              ">
                {subCategory.data.name}
              </h1>


              <p className="
                text-green-100
                mt-1
              ">
                Explore products in this subcategory
              </p>

            </div>

          </div>

        </div>

      </div>



     

      <div className="w-[90%] mx-auto py-8">


       

        <Link
          href="/categories"
          className="
            inline-flex
            items-center
            gap-2
            text-gray-600
            hover:text-green-600
            transition-colors
            duration-300
          "
        >

          <ArrowLeft size={18} />

          <span>
            Back to Categories
          </span>

        </Link>



        
        <div className="
          flex
          items-center
          justify-between
          mt-8
          mb-6
        ">


          <h2 className="
            text-3xl
            font-bold
            flex
            items-center
            gap-2
            border-l-4
            border-[#00a859]
            pl-3
            text-[#1a2530]
          ">

            {subCategory.data.name}

            <span className="text-[#00a859]">
              Products
            </span>

          </h2>


          <span className="text-sm text-gray-500">
            {subCategoryProducts.length} Products
          </span>

        </div>



        

        {subCategoryProducts.length > 0 ? (

          <div className="flex flex-wrap">

            {subCategoryProducts.map(
              (currentProduct: ProductType) => (

                <SingelProduct
                  key={currentProduct.id}
                  currentProduct={currentProduct}
                  isWhishlisted={
                    whishlistIds.includes(
                      currentProduct.id
                    )
                  }
                />

              )
            )}

          </div>

        ) : (

         

          <div className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            py-16
          ">


            <div className="
              w-20
              h-20
              rounded-2xl
              bg-gray-100
              flex
              items-center
              justify-center
              mb-6
            ">

              <ShoppingBag
                size={38}
                className="text-gray-400"
              />

            </div>


            <h2 className="
              text-2xl
              font-bold
              text-gray-800
            ">
              No Products Found
            </h2>


            <p className="
              text-gray-500
              mt-2
            ">
              No products match this subcategory
            </p>


            <Link
              href="/products"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                bg-green-600
                text-white
                font-medium
                hover:bg-green-700
                transition-colors
                duration-300
              "
            >
              View All Products
            </Link>

          </div>

        )}

      </div>

    </div>
  )
}