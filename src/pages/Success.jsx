import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Check } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import ReactLoading from 'react-loading';

const SuccessPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = new URL(window.location.href);
            const sessionId = url.searchParams.get('session_id');

            if (sessionId) {
                try {
                    const response = await axios.get(`http://localhost/iulia-fitness/api/success.php?session_id=${sessionId}`);
                    console.log('Received response from the API:', response.data);
                    if (response.data.error) {
                        console.log('Error in response, retrying...');
                        setTimeout(fetchData, 1000);
                    } else {
                        setData(response.data);
                        setLoading(false);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className='flex flex-col w-full px-8 justify-center items-start sm:items-center min-h-[80vh] gap-4'>
                <h2 className='text-2xl font-semibold'>Se genereaza factura...</h2>
                <ReactLoading type='spinningBubbles' color='gold' height={'10%'} width={'10%'} />
            </div >
        );
    }

    if (!data) {
        return (
            <div>A aparut o eroare...</div>
        );
    }

    return (
        <div className='flex flex-col w-full px-8 justify-center items-start sm:items-center min-h-[80vh] gap-4'>
            <SvgIcon component={Check} style={{ fontSize: "150", color: 'green' }} className='self-center' />
            <h1 className='text-5xl italic'>Multumim, <span className='font-bold text-gold'>{data.customer_name}</span>!</h1>
            <p className='italic text-lg'>Am primit plata in valoare de: <span className='font-bold text-gold'>{data.amount_paid} lei</span></p>
            <p className='italic text-lg'>Ai cumparat produsul: <span className='font-bold text-gold'>{data.purchasedProduct}</span></p>

            <a href={data.invoice_url} target='_blank' className='self-center w-fit px-16 py-4 border border-gold rounded-full text-white text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-darkerGold hover:to-gold hover:text-black'>Vezi factura</a>

            <p className='italic text-lg mt-16'>* Vei fi contactat in cel mai scurt timp la una dintre metodele de contact pe care le-ai specificat, telefon sau email!</p>

        </div>
    );
};

export default SuccessPage;