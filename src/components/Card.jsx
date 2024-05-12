import React from 'react'
import RandomImage from '../assets/random-image.jpg'

function Card({ image = RandomImage, title = 'Title', description = 'card description' }) {
    return (
        <div className="flex flex-col gap-4 pb-4 rounded-xl bg-white shadow-gold shadow-around w-full">
            <img src={image} alt="Random Image" className=' rounded-t-xl' />

            <div className="flex flex-col px-4 py-4 gap-4 text-left">
                <h2 className='self-center text-3xl font-medium'>{title}</h2>
                <span className='text-md italic font-normal'>{description}</span>
            </div>
        </div>
    )
}

export default Card