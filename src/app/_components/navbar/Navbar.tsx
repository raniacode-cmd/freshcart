"use client"
import React from 'react'
import { LogOut, ShoppingCart, Search, Headphones, User, Gift, Truck, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { Menu } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { CategoryType } from '@/types/allCategory.types';
  

export default function Navbar({cartIcon,categories}:{cartIcon:React.ReactNode ,categories:CategoryType[]}) {
 const {data:session,status} =  useSession()
  
 const logOut = ()=>{
    signOut({callbackUrl:"/login"})
 }
 
 
 const navbarCategories = [
    "electronics",
    "women's-fashion",
    "men's-fashion",
    "beauty-and-health"
  ]
 
 
 return (
    <>
  
    <div className='bg-white border-b border-gray-200 text-xs text-gray-600 hidden lg:block fixed z-20 w-full top-0'>
        <div className='w-[90%] mx-auto py-2 flex justify-between items-center'>
            <div className='flex items-center gap-6'>
                <span className='flex items-center gap-1'>
                    <Truck className='w-4 h-4 text-green-600' /> Free Shipping on Orders 500 EGP
                </span>
                <span className='flex items-center gap-1'>
                    <Gift className='w-4 h-4 text-green-600' /> New Arrivals Daily
                </span>
                <span className='flex items-center gap-1'>
                    <Phone className='w-4 h-4 text-green-600' /> +1 (800) 123-4567
                </span>
                <span className='flex items-center gap-1'>
                    <Mail className='w-4 h-4 text-green-600' /> support@freshcart.com
                </span>
            </div>
            <div className='flex items-center gap-4'>
                {session && (
                    <>
                        <span className='flex items-center gap-1 font-medium'>
                            <User className='w-4 h-4 text-green-600' /> 
                        </span>
                        <span className='text-gray-300'>|</span>
                    </>
                )}
                {session ? (
                    <span onClick={()=>logOut()} className='cursor-pointer flex items-center gap-1 hover:text-red-500 transition-all'>
                        <LogOut className='w-4 h-4' /> Sign Out
                    </span>
                ) : (
                    <Link href={'/login'} className='flex items-center gap-1 hover:text-green-600 transition-all'>
                        <LogIn className='w-4 h-4' /> Login
                    </Link>
                )}
            </div>
        </div>
    </div>

  
    <div className='bg-gray-50 p-4 fixed z-10 w-full lg:top-[33px] shadow-sm border-b border-gray-200'>
        <div className='w-[90%] mx-auto flex justify-between items-center gap-4'>
          <div className='left-nav flex items-center gap-8'>
               <Link href={'/'} className="logo flex items-center gap-2">
               <ShoppingCart className="w-8 h-8 text-green-600 bg-green-50 p-1.5 rounded-md"/>
                  <h2 className='font-bold text-2xl text-gray-800 tracking-tight'>FreshCart</h2>
               </Link>
                   <ul className='hidden lg:flex items-center gap-6 font-medium text-gray-700'>
                       <li><Link className='hover:text-green-600 transition-all duration-300' href={'/products'}>Products</Link></li>
                      
<li>

<DropdownMenu>
  <DropdownMenuTrigger className='cursor-pointer hover:text-green-600 transition-all duration-300'>
    Categories
  </DropdownMenuTrigger>

  <DropdownMenuContent>
    <DropdownMenuGroup>

      <DropdownMenuItem>
        <Link href="/categories">
          All Categories
        </Link>
      </DropdownMenuItem>

      {navbarCategories.map((slug) => {
  const category = categories.find(
    (category) => category.slug === slug
  )

  if (!category) return null

  return (
    <DropdownMenuItem key={category._id}>
      <Link href={`/categories/${category._id}`}>
        {category.name}
      </Link>
    </DropdownMenuItem>
  )
})}


    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
</li>
                  

                       <li><Link className='hover:text-green-600 transition-all duration-300' href={'/brands'}>Brands</Link></li>
                   </ul>
          </div>

         
          <div className='hidden md:flex flex-1 max-w-xl mx-4'>
              <div className='relative w-full flex items-center'>
                  <input 
                      type='text' 
                      placeholder='Search for products, brands and more...' 
                      className='w-full bg-white border border-gray-200 rounded-full py-2 pl-5 pr-12 text-sm focus:outline-none focus:border-green-600 transition-all shadow-sm'
                  />
                  <button className='absolute right-1 bg-green-600 hover:bg-green-700 text-white p-1.5 rounded-full transition-all'>
                      <Search className='w-4 h-4' />
                  </button>
              </div>
          </div>

             <div className='right-nav flex items-center gap-6'>
                
                  <div className='hidden xl:flex items-center gap-2.5 border-r pr-6 border-gray-200'>
                      <div className='bg-green-50 p-2 rounded-full text-green-600'>
                          <Headphones className='w-5 h-5' />
                      </div>
                      <div className='text-xs'>
                          <span className='text-gray-400 block font-normal'>Support</span>
                          <span className='font-bold text-gray-800'>24/7 Help</span>
                      </div>
                  </div>

                  <ul className='hidden lg:flex items-center gap-5 text-gray-700'>
                    {session ? <>
                      <li><Link className='flex items-center gap-1 hover:text-green-600 transition-all duration-300' href={"/wishList"}><Heart className='hover:fill-green-600 w-6 h-6' fill='black' /></Link></li>
                      <li>{cartIcon}</li>
                      <li><span onClick={()=>logOut()} className='cursor-pointer text-red-600 flex items-center gap-1 hover:text-red-500'><LogOut className='w-6 h-6' /></span></li>
                    </> : <>
                      <li><Link className='flex items-center gap-1 hover:text-green-600 transition-all duration-300' href={"/login"}><LogIn className='w-6 h-6 hover-fill-green-600'/> </Link></li>
                      <li><Link className='flex items-center gap-1 hover:text-green-600 transition-all duration-300' href={"/register"}>Register</Link></li>
                    </>}
                  </ul>
             </div>
             
             <DropdownMenu>
     <DropdownMenuTrigger className='cursor-pointer lg:hidden' render={<Button variant="outline"> <Menu /></Button>} />
     <DropdownMenuContent>
       <DropdownMenuGroup>
          <DropdownMenuItem><li><Link className='hover:text-green-600 transition-all duration-300' href={'/products'}>Products</Link></li></DropdownMenuItem>
          <DropdownMenuItem><li><Link className='hover:text-green-600 transition-all duration-300' href={'/categories'}>Categories</Link></li></DropdownMenuItem>
          <DropdownMenuItem><li><Link className='hover:text-green-600 transition-all duration-300' href={'/brands'}>Brands</Link></li></DropdownMenuItem>
          {session ? <>
            <DropdownMenuItem><li><Link className='flex items-center gap-1 hover:text-green-600 transition-all duration-300' href={"/wishList"}>WhishList <Heart className='hover:fill-green-600' fill='black' /></Link></li></DropdownMenuItem>
            <DropdownMenuItem><li>{cartIcon}</li></DropdownMenuItem>
            <DropdownMenuItem><li><span onClick={()=>logOut()} className='cursor-pointer text-red-600 flex items-center gap-1 hover:text-red-500'>SignOut <LogOut /></span></li></DropdownMenuItem>
          </> : <>
            <DropdownMenuItem><li><Link className='flex items-center gap-1 hover:text-green-600 transition-all duration-300' href={"/login"}>Login <LogIn className='hover-fill-green-600'/> </Link></li></DropdownMenuItem>
            <DropdownMenuItem><li><Link className='flex items-center gap-1 hover:text-green-600 transition-all duration-300' href={"/register"}>Register</Link></li></DropdownMenuItem>
          </>}
       </DropdownMenuGroup>
     </DropdownMenuContent>
    </DropdownMenu>
        </div>
    </div>
    </>
  )
}