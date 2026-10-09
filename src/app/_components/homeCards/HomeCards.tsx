import { Headphones, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

export default function HomeCards() {
  return (
    <>
    
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">

  <div className="flex items-center gap-4 rounded-xl border p-5 shadow-sm">
    <Truck className="text-green-600" size={28} />
    <div>
      <h3 className="font-semibold">Free Shipping</h3>
      <p className="text-sm text-gray-500">On orders over 500 EGP</p>
    </div>
  </div>

  <div className="flex items-center gap-4 rounded-xl border p-5 shadow-sm">
    <ShieldCheck className="text-blue-600" size={28} />
    <div>
      <h3 className="font-semibold">Secure Payment</h3>
      <p className="text-sm text-gray-500">100% secure transactions</p>
    </div>
  </div>

  <div className="flex items-center gap-4 rounded-xl border p-5 shadow-sm">
    <RotateCcw className="text-orange-600" size={28} />
    <div>
      <h3 className="font-semibold">Easy Returns</h3>
      <p className="text-sm text-gray-500">14-day return policy</p>
    </div>
  </div>

  <div className="flex items-center gap-4 rounded-xl border p-5 shadow-sm">
    <Headphones className="text-purple-600" size={28} />
    <div>
      <h3 className="font-semibold">24/7 Support</h3>
      <p className="text-sm text-gray-500">Dedicated support team</p>
    </div>
  </div>

</div>
    
    
    
    </>
  )
}

