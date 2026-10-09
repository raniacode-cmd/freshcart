"use client"

import { ForgotPasswordIng } from "@/AuthenticationAction/Authentication.action"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function ForgotPassword() {
 const [email, setEmail] = useState("")
 const router=useRouter()

   async function handelSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
    const response = await ForgotPasswordIng(email)
  
if(response.statusMsg=="success"){
    toast.success(response.message)
    router.push(`/verifyResetCode`)
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
     
     <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-full focus:outline-gray-400 p-3 rounded-2xl border border-green-600'/>
     <button type='submit' className='   px-5 py-4 my-4 bg-green-600 rounded-2xl text-white block w-full'>Send Reset Code </button>


     </form>








    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}
