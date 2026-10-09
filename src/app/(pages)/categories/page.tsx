import React from 'react'
import { getAllCategory } from '@/api/allCategory.api'
import Image from 'next/image'
import Link from 'next/link'
import { Layers } from 'lucide-react'

export default async function Categories() {
  const response = await getAllCategory()

  return (
    <div className="min-h-screen bg-white ">

     
<div className="bg-gradient-to-r from-green-600 to-green-500">

<div className="w-[90%] mx-auto">

  
  <div className="pt-4 pb-5">
    <p className="text-sm text-white">
      <Link href="/" className="hover:text-gray-200">
        Home
      </Link>

      <span className="mx-2">/</span>

      <span>Categories</span>
    </p>
  </div>

 
  <div className="flex items-center gap-4 pb-8">

    <div className="bg-green-500/60 p-3 rounded-xl">
      <Layers className="w-9 h-9 text-white" />
    </div>

    <div>
      <h1 className="text-3xl font-bold text-white">
        All Categories
      </h1>

      <p className="text-green-100 mt-1">
        Browse our wide range of product categories
      </p>
    </div>

  </div>

</div>

</div>

     
      <div className="w-[90%] mx-auto py-12">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {response.data.map((category: any) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="group text-center"
            >

              <div className="bg-gray-50 rounded-xl p-4 h-40 flex items-center justify-center overflow-hidden group-hover:shadow-md transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="mt-3 text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                {category.name}
              </h3>

            </Link>
          ))}

        </div>

      </div>

    </div>
  )
}