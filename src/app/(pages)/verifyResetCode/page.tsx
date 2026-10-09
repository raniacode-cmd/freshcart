"use client"

import { verifyResetCoding } from "@/AuthenticationAction/Authentication.action"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function VerifyResetCode() {
 const [resetCode, setResetCode] = useState("")
 const router=useRouter()
const email = useSearchParams()
  

async function handelSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
    const response = await verifyResetCoding(resetCode)
 
 if(response.status=="Success"){
    toast.success("Verify code Successfuly")
    router.push(`/resetPassword`)
}else{
    toast.error(response.message)

 }

}
 
 
    return (
    <>
    
    <div className='w-[50%] mx-auto shadow rounded-2xl p-5'>
    <h2 className="text-xl text-green-400 text-center mb-3">
         Account Recovery
        </h2>
     <form onSubmit={handelSubmit}>
     
     <input onChange={(e)=>setResetCode(e.target.value)} type="text" placeholder='Enter Your Code' className='w-full focus:outline-gray-400 p-3 rounded-2xl border border-green-600'/>
     <button type='submit' className='   px-5 py-4 my-4 bg-green-600 rounded-2xl text-white block w-full'>Confirm Reset Code </button>


     </form>








    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}
