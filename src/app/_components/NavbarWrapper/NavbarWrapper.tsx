import React from 'react'
import Navbar from '../navbar/Navbar'
import CartIcon from '../CartIcon/CartIcon';
import { getAllCategory } from '@/api/allCategory.api';
export default async function NavbarWrapper () {
 const categories = await getAllCategory()
 
  return (
    <>
    
    <Navbar cartIcon={<CartIcon/>}
    categories = {categories.data}
    
    />
    </>
  )
}
