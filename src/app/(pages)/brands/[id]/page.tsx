
import { getspecificbrand } from '@/api/specificBrand.api'


export default async function SpecificBrand({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const response = await getspecificbrand(id)

 

  const brand = response.data

  return (
    <div className="container mx-auto px-4 py-12">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

          <div className="h-72 flex items-center justify-center p-8 bg-gray-50">
            <img
              src={brand.image}
              alt={brand.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="p-8 text-center">

            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
              Brand
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              {brand.name}
            </h1>

          </div>

        </div>

      </div>

    </div>
  )
}