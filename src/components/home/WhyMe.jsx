import React from 'react'
import RandomImage from '../../assets/random-image-another.jpg'

function WhyMe() {
    return (
        <div className="flex flex-col sm:flex-row my-32 justify-beetween px-8 sm:px-32 gap-16">
            <div className="flex flex-col gap-4 w-full sm:w-3/4">
                <h2 className='text-3xl text-gold font-bold italic'>De ce sa ma alegi pe mine?</h2>
                <span className='text-lg font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reprehenderit dicta magni, officia, natus, cupiditate earum distinctio labore ipsam excepturi dignissimos ad laudantium! Culpa, in. Mollitia necessitatibus qui tempore soluta!</span>
                <span className='text-lg font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reprehenderit dicta magni, officia, natus, cupiditate earum distinctio labore ipsam excepturi dignissimos ad laudantium! Culpa, in. Mollitia necessitatibus qui tempore soluta!</span>
            </div>
            <div className="flex w-full sm:w-1/4">
                <img src={RandomImage} className=' object-cover object-center' />
            </div>
        </div>
    )
}

export default WhyMe