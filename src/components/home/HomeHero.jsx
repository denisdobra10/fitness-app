import React from 'react'
import { Link } from 'react-router-dom'

function HomeHero() {
    return (
        <div className="flex flex-col w-full min-h-[100vh] bg-hero-image bg-cover bg-center">
            <div className="flex sm:items-center w-full min-h-[100vh] backdrop-brightness-50">
                <div className="flex flex-col w-full sm:w-[55rem] gap-8 justify-center items-center text-center sm:justify-start sm:items-start sm:text-left px-8 sm:px-24">
                    <h1 className='text-gold text-3xl sm:text-5xl font-bold sm:font-normal tracking-wide capitalize' style={{ textShadow: "3px 3px 3px gray" }}>Antrenamente Individuale</h1>
                    <h1 className='text-white text-3xl sm:text-5xl font-bold sm:font-normal tracking-wide capitalize' style={{ textShadow: "3px 3px 3px gray" }}>In Cluj-Napoca</h1>
                    <h2 className='text-md sm:text-xl uppercase text-white font-medium shadow-2xl' style={{ textShadow: "1px 1px 1px black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit! Lorem ipsum dolor sit amet.</h2>

                    <div className="flex flex-col sm:flex-row gap-4 ">
                        {/* <Link to={'/'} className='px-8 py-4 w-fit bg-gold text-white text-xl font-semibold rounded-lg hover:bg-darkerGold' style={{ textShadow: '1px 1px 1px black' }}>Online Coaching</Link> */}
                        <Link to={'/'} className='px-8 py-4 w-fit bg-transparent hover:text-gold border-4 border-gold hover:border-darkerGold text-white text-xl font-semibold rounded-full'>Hai sa incepem</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero