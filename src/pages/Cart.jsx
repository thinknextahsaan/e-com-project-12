import React from 'react'
import CartProducts from '../components/CartProducts'

const Cart = () => {
  return (
    <div className='w-full h-full bg-[#F9F9F9] flex'>
      <div className='w-full mx-10 my-16 py-10 px-24 bg-white'>
        <div className='flex items-center'>
          <p className='w-[60%]'>Product</p>
          <p className='w-[30%]'>Quantity</p>
          <p>Total</p>
        </div>

       <CartProducts img ="https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=600" title="The Dandy Chair" price="€600"/>
       <CartProducts img ="https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=600" title="The Dandy Chair" price="€400"/>
       <CartProducts img ="https://images.pexels.com/photos/2369535/pexels-photo-2369535.jpeg?auto=compress&cs=tinysrgb&w=600" title="The Dandy Chair" price="€700"/>
       <CartProducts img ="https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=600" title="The Dandy Chair" price="€900"/>

        <div className='flex mt-5 justify-between'>
          <p className='text-slate-700'>Taxes and Shipping are calculated at checkout</p>
          <div>
            <div className='flex items-center gap-3 mb-2'>
              <p className='text-slate-700'>Subtotal</p>
              <p className='text-lg'>$250</p>
            </div>
            <button className='bg-[#2A254B] text-white px-5 py-2'>Go to checkout</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
