import React from 'react';

const CartProducts = (props) => {
    return (
        <>
            <div className='flex items-center mt-5 w-full h-auto'>
                <div className='w-[60%] flex items-center'>
                    <img className='h-32 w-28' img src = {props.img} alt="" />
                    <div className='pl-7'>
                        <p className='text-xl'>{props.title}</p>
                        <p className='w-[250px]'>A timeless ceramic vase with a fri color gray scale</p>
                        <p className='mt-2'>{props.price}</p>
                    </div>
                </div>

                <div className='w-[30%]'>
                    <button className='bg-[#F9F9F9] px-4 py-2'>-</button>
                    <button className='bg-[#F9F9F9] px-4 py-2'>1</button>
                    <button className='bg-[#F9F9F9] px-4 py-2'>+</button>
                </div>
                <div>
                    <p>{props.price}</p>
                </div>
            </div>
        </>
    );
}

export default CartProducts;