import React from 'react'
import RandomImage from '../../assets/random-image.jpg'
import RandomImageAnother from '../../assets/random-image-another.jpg'

function SlicedImageSection() {
    return (
        <div className="flex flex-col w-full gap-8 py-16">
            <div className="flex w-5/6 sm:w-4/6 self-start max-h-[40vh]">
                <img src={RandomImage} className=' object-cover object-center' />
            </div>
            <div className="flex w-5/6 sm:w-4/6 self-end max-h-[40vh]">
                <img src={RandomImageAnother} className=' object-cover object-center' />
            </div>
            <div className="flex w-5/6 sm:w-4/6 self-start max-h-[40vh]">
                <img src={RandomImage} className=' object-cover object-center' />
            </div>
        </div>
    )
}

export default SlicedImageSection