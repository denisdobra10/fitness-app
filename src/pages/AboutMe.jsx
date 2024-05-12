import React from 'react'
import RandomImage from '../assets/random-image-another.jpg';

const AboutMePage = () => {
    return (
        <div className='flex flex-col w-full'>

            <div className="min-h-[20rem] bg-hero-image object-cover bg-center">
                <div className="flex justify-center items-center backdrop-brightness-50 w-full min-h-[20rem]">
                    <h1 className='text-6xl font-semibold text-paragraph' style={{ textShadow: "22px 22px 22px black" }}>Povestea mea</h1>

                </div>
            </div>

            <div className="flex flex-col bg-white-bg-image object-cover items-center justify-center px-8 sm:px-32 py-16 gap-16 text-center">

                <div className="flex flex-col gap-4">
                    <h2 className='text-2xl sm:text-4xl font-bold uppercase text-black tracking-tighter'>Lorem ipsum lorem ipsum</h2>
                    <h2 className='text-4xl sm:text-6xl text-blue-700 font-bold'>DE CE AM ALES FITNESS-UL</h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 w-full text-black text-lg text-left font-medium">
                    <div className="flex flex-col w-full gap-4">
                        <h2><span className='text-black font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit?</span> Fugiat minima ab officiis consectetur. Repellat libero blanditiis temporibus impedit accusantium laborum, id, ipsa beatae corrupti alias harum delectus fuga veniam nostrum.</h2>
                        <h2 className='uppercase text-xl sm:text-4xl text-blue-700 font-bold tracking-wider'>Lorem ipsum lorem ipsum</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla eveniet neque, quam maiores dolorem? Harum quisquam necessitatibus sed nisi quo suscipit placeat natus repudiandae assumenda quia perspiciatis, velit iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla eveniet neque, quam maiores dolorem? Harum quisquam necessitatibus sed nisi quo suscipit placeat natus repudiandae assumenda quia perspiciatis, velit iste?</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla eveniet neque, quam maiores dolorem? Harum quisquam necessitatibus sed nisi quo suscipit placeat natus repudiandae assumenda quia perspiciatis, velit iste?</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla eveniet neque, quam maiores dolorem? Harum quisquam necessitatibus sed nisi quo suscipit placeat natus repudiandae assumenda quia perspiciatis, velit iste?</span>
                    </div>

                    <div className="flex flex-col w-full bg-white rounded-md p-1 items-center justify-center text-center">
                        <img src={RandomImage} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutMePage