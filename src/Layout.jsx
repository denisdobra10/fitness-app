import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';


function Layout({ page }) {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            {page}
            <Footer />
        </>
    );
}

export default Layout;
