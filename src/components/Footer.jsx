import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { SvgIcon } from '@mui/material';


function Footer() {
    return (
        <div className="flex flex-col gap-8 text-center my-8 justify-center items-center">
            <div className="flex flex-col md:flex-row gap-16 sm:gap-32 px-8 sm:px-32 w-full items-center justify-between">
                <div className="flex flex-col w-full gap-4 text-start">
                    <h2 className='text-xl font-bold text-gold'>Nume Companie</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequuntur tenetur! Iusto illum nulla ex iste corporis ea! Sapiente dolorum iusto magni maxime cum architecto quae tempora error nobis tempore.</span>
                </div>
                <div className="flex flex-col w-full gap-4 text-start">
                    <h2 className='text-xl font-bold text-gold'>Contact</h2>
                    <div className="flex flex-row gap-4">
                        <SvgIcon component={LocationOnIcon} />
                        <span>Locatia unde antrenezi</span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <SvgIcon component={PhoneIcon} />
                        <span>0745 123 456</span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <SvgIcon component={EmailIcon} />
                        <span>office@blabla.com</span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <SvgIcon component={ScheduleIcon} />
                        <span>Luni - Vineri, 09-20</span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4 text-start">
                    <h2 className='text-xl font-bold text-gold'>Legal</h2>

                    <a href="#" className='hover:text-gold hover:underline'>Termeni si conditii</a>
                    <a href="#" className='hover:text-gold hover:underline'>Politica de confidentialitate</a>
                    <a href="#" className='hover:text-gold hover:underline'>Politica cookies</a>
                </div>
            </div>

            <div className='h-[1px] w-[40%] bg-gray-500'></div>
            <span>Copyright © 2024 NUMELE COMPANIEI SRL. Toate drepturile rezervate.</span>
        </div>
    )
}

export default Footer