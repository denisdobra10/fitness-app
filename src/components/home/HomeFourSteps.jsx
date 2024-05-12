import React from 'react'
import StepOneIcon from '../../assets/step-one.svg';
import StepTwoIcon from '../../assets/step-two.svg';
import StepThreeIcon from '../../assets/step-three.svg';
import StepFourIcon from '../../assets/step-four.svg';

function FourSteps() {
    return (
        <div className="flex flex-col px-8 sm:px-0 gap-8 justify-center items-center">
            <h2 className='text-3xl font-semibold'>Pasi simpli pentru un stil de viata sanatos</h2>
            <div className="flex flex-col md:flex-row gap-4 px-8 md:px-32">
                <div className="flex flex-col justify-center items-center text-center gap-4 w-full">
                    <img src={StepOneIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-white font-bold text-3xl'>Pasul 1</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam doloremque eos, similique explicabo fuga fugit maxime!</span>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-4 w-full">
                    <img src={StepTwoIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-white font-bold text-3xl'>Pasul 2</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam doloremque eos, similique explicabo fuga fugit maxime!</span>
                </div>                    <div className="flex flex-col justify-center items-center text-center gap-4 w-full">
                    <img src={StepThreeIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-white font-bold text-3xl'>Pasul 3</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam doloremque eos, similique explicabo fuga fugit maxime!</span>
                </div>                    <div className="flex flex-col justify-center items-center text-center gap-4 w-full">
                    <img src={StepFourIcon} width={150} className='hover:scale-110 transition-all duration-500' />
                    <h2 className='text-white font-bold text-3xl'>Pasul 4</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam doloremque eos, similique explicabo fuga fugit maxime!</span>
                </div>
            </div>
        </div>
    )
}

export default FourSteps