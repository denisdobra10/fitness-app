import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 z-10 bg-bgColor">
            <div className="flex w-full p-8 justify-between sm:hidden items-center">
                <h2 className='text-lg font-bold'>Fitness App</h2>
                <button onClick={toggleMenu}>
                    <MenuIcon fontSize='large' />
                </button>
            </div>
            {isOpen && (
                <div className="absolute w-full flex flex-col bg-bgColor justify-between items-center text-center">
                    <ul className="flex flex-col gap-2 py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={'/'} onClick={toggleMenu} className='text-gold text-xl font-semibold'>Acasa</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={'/despre-mine'} onClick={toggleMenu} className='text-white text-xl font-semibold hover:text-gold'>Despre mine</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={'/programe'} onClick={toggleMenu} className='text-white text-xl font-semibold hover:text-gold'>Programe</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={'/contact'} onClick={toggleMenu} className='text-white text-xl font-semibold hover:text-gold'>Contact</Link>
                        </li>
                    </ul>

                    <div className="flex flex-row gap-8 pt-4 pb-8">
                        <InstagramIcon className='hover:text-gold cursor-pointer' />
                        <WhatsAppIcon className='hover:text-gold cursor-pointer' />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNavbar;
