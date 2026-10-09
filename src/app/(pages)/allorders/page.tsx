import { getUserOrders } from '@/CheckOutAction/getUserOrders.action'
import getMyToken from '@/utilites/getMyToken.utilites'
import { jwtDecode } from 'jwt-decode'


export default async function Allorders() {
  const token = await getMyToken()

  if (!token) {
    return <div className='min-h-[60vh] flex items-center justify-center'>
        <p className='text-gray-500'> Please login first</p>
        </div>
  }

  const decodedToken = jwtDecode<{ id: string }>(token)

  const response = await getUserOrders(decodedToken.id)

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">

       
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            My Orders
          </h1>

          <p className="mt-2 text-gray-500">
            Track and view all your orders
          </p>
        </div>

      
        <div className="space-y-6">
          {response.map((order: any) => (
            <div
              key={order._id}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
            >

             
              <div className="flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Order ID
                  </p>

                  <p className="font-semibold text-gray-800">
                    #{order._id}
                  </p>
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  {order.isPaid ? 'Paid' : 'Pending Payment'}
                </div>

              </div>

              {/* Order Info */}
              <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Total Price
                  </p>

                  <p className="mt-1 text-xl font-bold text-orange-500">
                    {order.totalOrderPrice} EGP
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Payment Method
                  </p>

                  <p className="mt-1 font-semibold capitalize text-gray-800">
                    {order.paymentMethodType}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Order Status
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    {order.isDelivered ? 'Delivered' : 'Processing'}
                  </p>
                </div>

              </div>

              {/* Shipping Address */}
              <div className="border-t pt-5">
                <h3 className="mb-3 font-semibold text-gray-800">
                  Shipping Address
                </h3>

                <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">

                  <p>
                    {order.shippingAddress?.details}
                  </p>

                  <p className="mt-1">
                    {order.shippingAddress?.city}
                  </p>

                  <p className="mt-1">
                    Phone: {order.shippingAddress?.phone}
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}