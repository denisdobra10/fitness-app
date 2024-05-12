import React from 'react'

function BuildYourBody() {
    return (
        <div className="flex flex-col py-16 gap-16 text-center">
            <h2 className='text-3xl text-paragraph font-bold tracking-widest'>BUILD YOUR BODY</h2>

            <div className="flex flex-col sm:flex-row w-full gap-4 px-8 sm:px-32">
                <div className="flex flex-col w-full bg-random-two bg-cover bg-center min-h-[300px]"></div>
                <div className="flex flex-col w-full bg-random-three bg-cover bg-center min-h-[300px]"></div>
            </div>
        </div>
    )
}

export default BuildYourBody