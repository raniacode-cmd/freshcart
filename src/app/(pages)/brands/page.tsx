
import { getAllBrands } from '@/api/allBrands.api'
import { Package } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function Brands() {
  const response = await getAllBrands()

  return (
   
   <>
    <div className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white p-10 my-4 w-full mx-auto min-h-[260px]">

    <div className="text-sm mb-8 opacity-90">
      <Link href="/" className="hover:underline">
        Home
      </Link>{" "}
      / All Products
    </div>
    
    <div className="flex items-center gap-5">
      
      <div className="bg-white/20 p-5 rounded-2xl text-3xl">
        <Package size={32} />
      </div>
    
      <div>
        <h1 className="text-4xl font-bold mb-1">
          All Products
        </h1>
    
        <p className="text-base opacity-90">
          Explore our complete product collection
        </p>
      </div>
    
    </div>
    </div>
   
   <div className="container mx-auto px-4 py-12">



      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {response.data.map((brand) => (
          <Link
            href={`/brands/${brand._id}`}
            key={brand._id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5"
          >

            <div className="h-32 flex items-center justify-center mb-5">
              <img
                src={brand.image}
                alt={brand.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h2 className="text-center text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                {brand.name}
              </h2>
            </div>

          </Link>
        ))}

      </div>

    </div>
 
    </>
  )
}