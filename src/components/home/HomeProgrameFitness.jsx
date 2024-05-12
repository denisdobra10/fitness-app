import React from 'react'
import PlanuriAntrenamentIcon from '../../assets/planuri-antrenament.svg'
import OnlineCoachingIcon from '../../assets/online-coaching.svg'
import PlanuriNutritieIcon from '../../assets/planuri-nutritie.svg'


function HomeProgrameFitness() {
    return (
        <div className="flex flex-col px-8 sm:px-32 py-32 gap-4">
            <h2 className='text-paragraph font-bold text-4xl'>Programe <span className='text-gold'>Fitness</span></h2>
            <div className="h-1 bg-gradient-to-r from-gold to to-darkerGold w-[25%]"></div>

            <div className="flex flex-col sm:flex-row px-8 sm:px-16">

                <div className="flex flex-col p-8 gap-4 w-full text-center justify-center items-center border border-r-gold border-l-0 border-y-0 hover:border-x-2 hover:border-y-2 hover:border-x-gold hover:border-y-gold">
                    <img src={PlanuriAntrenamentIcon} width={75} height={75} />
                    <h2 className='text-paragraph text-xl font-bold'>Planuri De Antrenament</h2>
                    <span className='text-gray-400 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel exercitationem ipsum sequi rei. Repellendus vel exercitationem ipsum sequi rei </span>
                </div>

                <div className="flex flex-col p-8 gap-4 w-full text-center justify-center items-center border border-b-gold border-r border-l-0 border-r-gold sm:border-x-0 border-t-0 hover:border-x-2 hover:border-y-2 hover:border-x-gold hover:border-y-gold">
                    <img src={PlanuriNutritieIcon} width={75} height={75} />
                    <h2 className='text-paragraph text-xl font-bold'>Planuri De Nutritie</h2>
                    <span className='text-gray-400 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel exercitationem ipsum sequi rei. Repellendus vel exercitationem ipsum sequi rei </span>
                </div>

                <div className="flex flex-col p-8 gap-4 w-full text-center justify-center items-center border border-l-gold border-r-0 border-y-0 hover:border-x-2 hover:border-y-2 hover:border-x-gold hover:border-y-gold">
                    <img src={OnlineCoachingIcon} width={75} height={75} />
                    <h2 className='text-paragraph text-xl font-bold'>Online Coaching</h2>
                    <span className='text-gray-400 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel exercitationem ipsum sequi rei. Repellendus vel exercitationem ipsum sequi rei </span>
                </div>

            </div>
        </div>
    )
}

export default HomeProgrameFitness