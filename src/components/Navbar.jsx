import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Navbar() {
    const location = useLocation();

    const activeLinkStyle = 'text-gold text-xl font-semibold';
    const inactiveLinkStyle = 'text-white text-xl font-normal hover:text-gold';

    return (
        <div className='hidden sm:flex sticky top-0 z-10 bg-bgColor'>
            <div className="flex flex-row w-full px-32 py-8 justify-between">
                <Link to={'/'} className='text-white text-lg font-semibold tracking-wider italic'>Iulia Fitness</Link>

                <div className="flex flex-row gap-8">
                    <Link to={'/'} className={location.pathname == '/' ? activeLinkStyle : inactiveLinkStyle}>Acasa</Link>
                    <Link to={'/despre-mine'} className={location.pathname == '/despre-mine' ? activeLinkStyle : inactiveLinkStyle}>Despre mine</Link>
                    <Link to={'/programe'} className={location.pathname == '/programe' ? activeLinkStyle : inactiveLinkStyle}>Programe</Link>
                    <Link to={'/contact'} className={location.pathname == '/contact' ? activeLinkStyle : inactiveLinkStyle}>Contact</Link>
                </div>

                <div className="flex flex-row gap-8">
                    <InstagramIcon className='hover:text-gold cursor-pointer' />
                    <WhatsAppIcon className='hover:text-gold cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar