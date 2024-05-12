import React from 'react'
import Card from '../../components/Card'
import RandomImage from '../../assets/random-image.jpg'

function HomeBeneficii() {
    return (
        <div className="flex flex-col bg-gradient-to-b from-black to-bgColor text-center px-8 sm:px-32 py-16">
            <h2 className='text-3xl sm:text-6xl font-bold text-white tracking-wide' style={{ textShadow: "2px 2px 2px black" }}>Beneficii</h2>

            <div className="flex flex-col sm:flex-row gap-16 text-black my-8">
                <Card
                    image={RandomImage}
                    title='Titlu Beneficiu'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque provident assumenda minima vitae atque beatae natus, omnis aliquid deserunt, saepe excepturi nobis consequuntur hic magnam sapiente tempora. Placeat, veniam!' />
                <Card
                    image={RandomImage}
                    title='Titlu Beneficiu'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque provident assumenda minima vitae atque beatae natus, omnis aliquid deserunt, saepe excepturi nobis consequuntur hic magnam sapiente tempora. Placeat, veniam!' />
                <Card
                    image={RandomImage}
                    title='Titlu Beneficiu'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque provident assumenda minima vitae atque beatae natus, omnis aliquid deserunt, saepe excepturi nobis consequuntur hic magnam sapiente tempora. Placeat, veniam!' />

            </div>
        </div>
    )
}

export default HomeBeneficii