import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="flex flex-col w-full min-h-[100vh] bg-hero-image bg-cover bg-center">
            <div className="flex justify-center items-center w-full min-h-[100vh] backdrop-brightness-50">
                <div className="flex flex-col w-[70%] gap-12 text-center">
                    <h1 className='text-white text-3xl sm:text-6xl font-bold sm:font-semibold tracking-wide capitalize' style={{ textShadow: "3px 3px 3px gray" }}>Antrenamente individuale in Cluj</h1>
                    <h2 className='text-md sm:text-lg text-white font-medium shadow-2xl' style={{ textShadow: "1px 1px 1px black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero dolores doloribus consectetur omnis obcaecati consequatur magnam minima, quam excepturi, impedit ex, dolor atque nobis laboriosam est amet sed itaque!</h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* <Link to={'/'} className='px-8 py-4 w-fit bg-gold text-white text-xl font-semibold rounded-lg hover:bg-darkerGold' style={{ textShadow: '1px 1px 1px black' }}>Online Coaching</Link> */}
                        <Link to={'/'} className='px-8 py-4 w-fit bg-transparent hover:text-gold border-4 border-gold hover:border-darkerGold text-white text-xl font-semibold rounded-lg'>Hai sa incepem</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero