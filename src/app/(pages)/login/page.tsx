"use client";
import {  toast } from 'react-toastify';
import { loginSchema, loginSchemaType } from "@/app/schema/login.schema";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {useRouter} from 'next/navigation'
import {signIn} from 'next-auth/react'
import { LogIn } from 'lucide-react';
import Image from 'next/image';
import image55 from '../../../../public/image/2e5810ff3e-e750761ebcd4ae5907db.png'
export default function Login() {
 const [isLoding, setisLoding] = useState(false)
 const router =useRouter()
 
 
 
  const form = useForm<loginSchemaType>({
    defaultValues: {
     
      email: "",
      password: "",
     
    },
 resolver:zodResolver(loginSchema),
 mode:"all"
  }); 

 const handelLogin= async (values:loginSchemaType)=>{

setisLoding(true)
try{
 const response = await signIn("credentials",{
 email:values.email,
password:values.password,
redirect:false,
callbackUrl:"/"
})

if(response?.ok){
toast.success("Login Syccessfuly",{position:"top-right",delay:2000, autoClose:1500})
setTimeout(()=>{
  router.push("/")
},2000)

}else{
  toast.error(response?.error || "something went wrong ",{position:"top-right",delay:2000,autoClose:1500})

}



}catch(error){
  toast.error("something went wrong ",{position:"top-right",delay:2000,autoClose:1500})

}finally{
  setisLoding(false)
}


 
}
 
 interface FormField {
name: "email" |"password" ,
type:string,
placeholder:string,
autoComplete:string,


}
 
 
  const FormFields:FormField[] =[
  
  {name:"email" ,type:"email" , placeholder:"Enter Your Email", autoComplete:"email"},
  {name:"password" ,type:"password" , placeholder:"Enter Your Password", autoComplete:"new-password"},
  
]
 
 
 
  return (
    <>
    <div className="w-[90%] lg:w-[85%] mx-auto my-8 rounded-2xl shadow-2xl overflow-hidden bg-white">

<div className="grid grid-cols-1 lg:grid-cols-2">

 
  <div className="hidden lg:flex flex-col items-center justify-center bg-green-50 p-8">

    <Image
      src={image55}
      alt="FreshCart"
      width={500}
      height={400}
      className="w-full max-w-[500px] object-contain"
    />

    <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">
      FreshCart - Your One-Stop Shop for Fresh Products
    </h2>

    <p className="text-gray-500 text-center mt-3 max-w-[500px]">
      Join thousands of happy customers who trust FreshCart
      for their daily grocery needs
    </p>

    <div className="flex items-center justify-center gap-6 mt-5 text-sm text-gray-500">

      <span className="flex items-center gap-1">
        <span className="text-green-500">✓</span>
        Free Delivery
      </span>

      <span className="flex items-center gap-1">
        <span className="text-green-500">✓</span>
        Secure Payment
      </span>

      <span className="flex items-center gap-1">
        <span className="text-green-500">✓</span>
        24/7 Support
      </span>

    </div>

  </div>


 
  <div className="p-8 lg:p-12">

    <div className="text-center mb-8">

      <h1 className="text-3xl font-bold text-gray-800">
        FreshCart
      </h1>

      <h2 className="text-xl font-semibold text-gray-700 mt-3">
        Welcome Back!
      </h2>

      <p className="text-gray-400 mt-2">
        Sign in to continue your fresh shopping experience
      </p>

    </div>


    <form onSubmit={form.handleSubmit(handelLogin)}>

      {FormFields.map((myInput) => (
        <Controller
          key={myInput.name}
          name={myInput.name}
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

              <Input
                className="my-4 p-4"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder={myInput.placeholder}
                autoComplete={myInput.autoComplete}
                type={myInput.type}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}

            </Field>
          )}
        />
      ))}


     
      <div className="flex justify-end mb-4">

        <Link
          href="/forgotPassword"
          className="text-sm text-green-600 hover:underline"
        >
          Forgot Password?
        </Link>

      </div>


     
      <Button
        disabled={isLoding}
        type="submit"
        className="w-full text-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer p-3"
      >
        {isLoding ? (
          <Loader className="animate-spin" />
        ) : (
          <>
            Sign In
            <LogIn />
          </>
        )}
      </Button>


     
      <p className="mt-6 text-center text-gray-500">

        New to FreshCart?

        <Link
          href="/register"
          className="text-green-600 hover:underline ml-1 font-medium"
        >
          Create an account
        </Link>

      </p>


      
      <div className="flex justify-center items-center gap-5 mt-6 text-xs text-gray-400">

        <span>🔒 SSL Secured</span>

        <span>👥 50K+ Users</span>

        <span>⭐ 4.9 Rating</span>

      </div>

    </form>

  </div>

</div>

</div>
    </>
  );
}
