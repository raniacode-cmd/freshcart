import { Button } from '@/components/ui/button'
import { CreditCardMinus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CheckOutBtn ({cartId}:{cartId:string}) {
  return (
    <>
    
    <Link href={`/checkOut/${cartId}`}>
    <Button className={ " w-full cursor-pointer bg-green-500 hover:bg-green-600 p-5"}>Cheack Out <CreditCardMinus /></Button>
    </Link>
   
    
    
    </>
  )
}
