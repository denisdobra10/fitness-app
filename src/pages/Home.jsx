import React from 'react'
import Hero from '../components/home/Hero'
import BuildYourBody from '../components/home/BuildYourBody'
import HomeProgrameFitness from '../components/home/HomeProgrameFitness'
import HomeBeneficii from '../components/home/HomeBeneficii'
import SlicedImageSection from '../components/home/SlicedImageSection'
import PersonalTrainerAd from '../components/home/PersonalTrainerAd'
import FourSteps from '../components/home/HomeFourSteps'
import WhyMe from '../components/home/WhyMe'
import WhatsYourGoal from '../components/home/WhatsYourGoal'
import HomeHero from '../components/home/HomeHero'

function HomePage() {
    return (
        <div className="flex flex-col w-full">
            <HomeHero />
            <HomeBeneficii />
            <BuildYourBody />
            <HomeProgrameFitness />
            <SlicedImageSection />
            <PersonalTrainerAd />
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0 text-paragraph my-16 py-8 bg-black">
                <div className="flex flex-row w-full justify-center sm:justify-end text-xl capitalize">Plan de nutritie</div>
                <div className="flex flex-row w-full justify-center text-xl capitalize text-gold">Program individual personalizat</div>
                <div className="flex flex-row w-full justify-center sm:justify-start text-xl capitalize">Sesiuni unu la unu</div>
            </div>
            <FourSteps />
            <WhyMe />
            <WhatsYourGoal />

            <div className="flex flex-col gap-8 my-16 mx-8 sm:mx-32 justify-center items-center">
                <h2 className='text-2xl text-paragraph font-bold'>Doresti sa imi adresezi o intrebare?</h2>

                <a href="#" className='bg-gold text-black text-lg font-semibold px-8 py-4 rounded-sm hover:bg-darkerGold'>Suna-ma</a>
            </div>
        </div>
    )
}

export default HomePage