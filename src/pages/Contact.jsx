import React from 'react'

const ContactPage = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-8 px-8 sm:px-32 py-32">
            <div className="flex flex-col gap-8 w-full text-center">
                <h1 className='text-2xl sm:text-6xl font-semibold'>Contacteaza-ma</h1>
                <span className='font-light'>Daca ai intrebari suplimentare, ma poti contacta, completand formularul urmator.</span>
                <span>Cu stima, <span className='text-gold'>Iulia</span>!</span>
            </div>

            <div className="flex flex-col gap-8 w-full">
                <form className='flex flex-col w-full sm:w-[50%] '>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='w-full text-black p-2 rounded-xl font-semibold' />
                    <label htmlFor="phone">Telefon</label>
                    <input type="phone" name="phone" id="phone" className='w-full text-black p-2 rounded-xl font-semibold' />
                    <label htmlFor="message">Mesaj</label>
                    <textarea name="message" id="message" rows="4" className='w-full text-black p-2 rounded-xl font-semibold'></textarea>
                    <button type="submit" className='self-start my-4 px-8 py-4 bg-gold rounded-full text-center text-black font-semibold'>Trimite mesaj</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage