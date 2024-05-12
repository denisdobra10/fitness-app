import React from 'react'
import MasaMuscularaIcon from '../../assets/masa-musculara.svg'
import DefinireIcon from '../../assets/definire.svg'
import TonifiereIcon from '../../assets/tonifiere.svg'
import RelaxIcon from '../../assets/relax.svg'

function WhatsYourGoal() {
    return (
        <div className="flex flex-col px-8 sm:px-32 py-16 gap-4 text-center items-center justify-center bg-black">
            <h2 className='text-3xl text-gold'>Care este obiectivul tau?</h2>
            <div className=" h-1 self center bg-gold w-[20%]"></div>

            <div className="flex flex-row w-full mt-16">
                <div className="flex flex-col w-full gap-4 justify-center items-center">
                    <img src={MasaMuscularaIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-2xl font-semibold'>Masa musculara</h2>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <img src={TonifiereIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-2xl font-semibold'>Tonifiere</h2>
                </div>
            </div>
            <div className="flex flex-row w-full mt-8">
                <div className="flex flex-col w-full gap-4 justify-center items-center">
                    <img src={DefinireIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-2xl font-semibold'>Definire</h2>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <img src={RelaxIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-2xl font-semibold'>Relaxare</h2>
                </div>
            </div>
        </div>
    )
}

export default WhatsYourGoal