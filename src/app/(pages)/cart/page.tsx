
import CartTable from '@/app/_components/CartTable/CartTable'
import getLoggedUserCart from '@/cartAction/getLoggedUserCart.action'


export default async function Cart() {
 const response =await getLoggedUserCart()
 
  return (
    <>
    <CartTable  cart={response}/>
    
    </>
  )
}
