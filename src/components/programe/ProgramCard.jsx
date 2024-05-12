import React from 'react'
import { Link } from 'react-router-dom';

const ProgramCard = ({ title, price, features, buttonText, buttonLink }) => {

    const redirectToPurchasePage = () => {
        window.location.href = buttonLink;
    }

    return (
        <div onClick={redirectToPurchasePage} className="flex flex-col w-full rounded-t-xl transition-all duration-500 hover:scale-105 hover:cursor-pointer">
            <div className="flex flex-col justify-between h-48 p-4 gap-4 bg-white rounded-t-xl text-center">
                <h2 className='text-3xl text-black font-medium'>{title}</h2>
                <span className='text-red-500 font-bold text-6xl'>{price}</span>
            </div>
            <div className="flex flex-col px-4 py-16 gap-8 text-md text-black font-semibold uppercase text-center bg-gradient-to-t from-darkerGold to-gold ">
                {features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                ))}
            </div>
            <Link href={buttonLink} className='bg-white rounded-full px-8 py-4 uppercase text-black text-center font-bold w-fit self-center -mt-8'>{buttonText}</Link>
        </div>
    )
}

export default ProgramCard