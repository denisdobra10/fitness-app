import React from 'react'
import MaleImg from '../../assets/man.png';
import FemaleImg from '../../assets/female.png';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { SvgIcon } from '@mui/material';

const PurchaseSummaryCard = ({ id, gender, name, email, phone, purchase_date, purchase_type, revenue }) => {
    return (
        <div className="flex flex-row justify-between w-full items-center py-2 hover:border-b hover:border-gold">

            <div className="flex flex-row gap-8 items-center">
                <img src={gender == 'male' ? MaleImg : FemaleImg} width={'40px'} height={'40px'} className='rounded-full' />

                <div className="flex flex-col">
                    <span className='text-white font-semibold'>{name}</span>
                    <span className='text-gray-400'>{email}</span>
                </div>

                <div className="hidden md:flex flex-col">
                    <span className='text-white font-semibold'>Telefon</span>
                    <span className='text-gray-400'>{phone}</span>
                </div>

                <div className="hidden md:flex flex-col">
                    <span className='text-white font-semibold'>Data Achizitiei</span>
                    <span className='text-gray-400'>{purchase_date}</span>
                </div>

                <div className="hidden md:flex flex-col">
                    <span className='text-white font-semibold'>Tip Achizitie</span>
                    <span className='text-gray-400'>{purchase_type}</span>
                </div>

                <div className="hidden md:flex flex-col">
                    <span className='text-white font-semibold'>Venit</span>
                    <span className='text-gray-400'>+{revenue} lei</span>
                </div>

            </div>

            <a href={`http://localhost/iulia-fitness/api/pdfs/${id}.pdf`} target='_blank' className='mx-0 sm:mx-8 hover:text-gold'>
                <SvgIcon component={VisibilityIcon} />
            </a>
        </div>
    )
}

export default PurchaseSummaryCard