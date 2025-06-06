import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contect/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
const LatesCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestReoducts,setLatestReoducts] =useState([]);
  useEffect(()=>
{
    setLatestReoducts(products.slice(0,10));
},[products])

  return (
    <div className='my-10'>
        <div className=' text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2 = {'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typeseting industry. Lorem Ipsum has been the
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
            {
              latestReoducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
        </div>
      
    </div>
  )
}

export default LatesCollection
