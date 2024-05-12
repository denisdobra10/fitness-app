import axios from 'axios';
import React, { useState } from 'react';
import { useData } from '../utils/DataContext';

const AdminLoginPage = () => {
    const { setIsLoggedIn } = useData();
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/iulia-fitness/api/login_approval.php', JSON.stringify({ password }));

            if (response.status === 200) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Error occurred: ', error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen px-8 w-full'>
            <form onSubmit={login} className='flex flex-col bg-black p-4 rounded w-full lg:w-1/4'>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Introdu codul de acces' value={password} className='text-black mb-2 p-2 rounded border border-gray-300' />
                <button type="submit" className='bg-gold text-black px-4 py-2 rounded'>Login</button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
