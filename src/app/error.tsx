'use client'

import React from 'react'

export default function error({error}:{error:Error}) {
  return (
   <>
 <div className="h-screen flex items-center justify-center bg-red-100">
      <h1 className="text-2xl font-bold text-red-600">
        {error.message}
      </h1>
    </div>

 
 
   
   
   </>
  )
}
