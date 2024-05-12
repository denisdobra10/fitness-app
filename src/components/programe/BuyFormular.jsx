import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BuyFormularForm from './BuyFormularForm';
import products from '../../products.json';

const BuyFormular = () => {

    const { id } = useParams();
    var productData = products.find((product) => product.id == id);

    useEffect(() => {
        //productData = products.find((product) => product.id == id);
        console.log(productData);
    }, [id])


    return (
        <div className="flex flex-col gap-8 w-full justify-center items-center text-center px-8 py-16 sm:p-32">
            <div className="flex flex-col gap-4">
                <h1 className='text-gold text-4xl font-bold'>{productData.title}</h1>
                <span className='text-red-500 text-xl font-semibold'>{productData.price.toFixed(2)} lei</span>

                <div className="flex flex-col gap-2 text-left">
                    <ul className='list-disc'>
                        {productData.features.map((feature, index) => (
                            <li key={index}>
                                <span className='text-paragraph font-light '>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-4 my-8 w-full md:w-[50%]">
                <h2 className='text-gold text-2xl font-bold'>Completeaza Formularul</h2>
                <span>pentru a-mi face o idee in ansamblu despre tine si stilul tau de viata</span>

                <BuyFormularForm productId={productData.id} productPrice={productData.price} productTitle={productData.title} price_id={productData.price_id} />
            </div>

        </div>
    )
}

export default BuyFormular