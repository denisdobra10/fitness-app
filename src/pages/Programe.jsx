import React from 'react'
import ProgramCard from '../components/programe/ProgramCard'
import products from '../products.json';

const ProgramePage = () => {
    return (
        <div className="flex flex-col w-full">
            <div className='flex flex-col gap-8 justify-center items-center text-center min-h-[30rem] bg-gradient-to-r from-darkerGold to-gold'>
                <h1 className='text-3xl sm:text-6xl text-black font-semibold capitalize tracking-wider italic' style={{ textShadow: "1px 1px 2px black" }}>Personal Training</h1>
                <span className='w-[90%] sm:w-[70rem] text-black text-lg font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur placeat blanditiis assumenda iste natus hic velit in facilis quasi repellat deserunt explicabo ducimus, vitae repellendus recusandae voluptatibus quisquam, sequi dicta?</span>
            </div>

            <div className="flex flex-col w-full px-8 sm:px-32 py-32 gap-16 justify-center items-center">
                <div className="flex flex-col gap-8 text-paragraph text-center items-center">
                    <h2 className='text-3xl font-bold tracking-wide sm:w-[50rem]'>Rezultate rapide cu programul meu de personal coaching</h2>
                    <span className='sm:w-[75rem] leading-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit inventore voluptatum in earum explicabo, et, quasi ipsa enim nihil fugiat. Soluta perspiciatis ipsam possimus tenetur a cum totam provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit inventore voluptatum in earum explicabo, et, quasi ipsa enim nihil fugiat. Soluta perspiciatis ipsam possimus tenetur a cum totam provident.</span>
                </div>

                <div className="flex flex-col  md:flex-row gap-8 w-[75%] ">

                    {products.map((product) => (
                        <ProgramCard
                            key={product.id}
                            title={product.title}
                            price={`${product.price.toFixed(0)} lei`}
                            buttonText={'Achizitioneaza'}
                            features={product.features}
                            buttonLink={`/programe/${product.id}`}
                        />
                    ))}


                </div>
            </div>
        </div>

    )
}

export default ProgramePage