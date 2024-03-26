import React from 'react';

const ProductListing = () => {
  return (
    <>
      <div className='w-full h-[88vh] flex py-10 px-24'>
        <div className='w-[40%] h-full'><img className='w-full h-full object-cover' src='src/images/pexels-hormel-2762247.jpg' /></div>
        <div className='flex-1'>
          <div className='py-5 px-20'>
            <h1 className='text-2xl mb-2'>The Dandy Chair</h1>
            <h3 className='text-xl'>$250</h3>

            <p className='text-xl mt-5 mb-5'>Description</p>

            <p className='text-base leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi provident dolores porro aspernatur iusto, asperiores at sed impedit ipsum?</p>

            <div className='ml-16 mt-4 mb-4'>
              <ul className='text-base list-disc '>
                <li>Premiem material</li>
                <li>Handmade uphoistery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>

            <p className='text-xl'>Dimensions</p>

            <div className='flex gap-10 mt-3'>
              <div>
                <p>Height</p>
                <p>110cm</p>
              </div>
              <div>
                <p>width</p>
                <p>75cm</p>
              </div>
              <div>
                <p>Depth</p>
                <p>50cm</p>
              </div>
            </div>

            <div className='flex items-center mt-3 gap-48'>
              <div className='flex'>
                <h1>Amount</h1>
                <button className='bg-slate-200 px-4 py-2 ml-5'>-</button>
                <button className='bg-slate-200 px-4 py-2'>1</button>
                <button className='bg-slate-200 px-4 py-2'>+</button>
              </div>

              <button className='bg-[#2A254B] text-white px-5 py-2'>Add to Cart</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ProductListing;