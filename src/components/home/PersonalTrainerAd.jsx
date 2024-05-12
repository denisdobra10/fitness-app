import React from 'react'
import { Link } from 'react-router-dom'

function PersonalTrainerAd() {
    return (
        <div className="flex flex-col sm:flex-row justify-between mx-8 sm:mx-32 my-16 p-8 border-l-2 border-l-gold text-paragraph bg-black">

            <div className="flex flex-col w-full sm:w-3/4 gap-4">
                <h2 className='text-2xl font-bold tracking-wide'>Cauti un antrenor personal?</h2>
                <span className='text-md italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum illum aliquid deserunt dolores ullam cupiditate maiores saepe inventore ducimus nam adipisci nulla nisi neque illo incidunt, quaerat molestias excepturi!</span>
            </div>

            <div className="flex self-center mt-8 sm:mt-0 sm:self-center w-full sm:w-1/4 justify-center items-center">
                <Link to='/' className="flex px-8 py-4 h-fit border-b-2 border-gold justify-center items-center text-gray-200 text-xl hover:border-2 hover:border-gold">Vezi programe</Link>
            </div>

        </div>
    )
}

export default PersonalTrainerAd