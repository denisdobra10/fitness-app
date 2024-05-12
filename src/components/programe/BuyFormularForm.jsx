import React, { useState } from 'react'
import axios from 'axios';

const BuyFormularForm = ({ productId, productTitle, productPrice, price_id }) => {

    const [data, setData] = useState({ productId: productId, productTitle: productTitle, productPrice: productPrice, price_id: price_id, fullName: '', email: '', phoneNumber: '', gender: 'male', age: '', height: '', weight: '', previous_experience: '', didYouPractice: 'yes', max_sessions: '', max_time: 'yes', knownProblem: '', foodToAvoid: '', work: '', sleep: '', prefferedSchedule: '', })
    const [disabledButton, setDisabledButton] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };


    const goToPayment = async (e) => {
        e.preventDefault();

        setDisabledButton(true);
        try {
            const response = await axios.post('http://localhost/iulia-fitness/api/create_checkout.php', JSON.stringify(data));

            if (response.status == 200) {
                console.log(response.data);
                window.location.href = response.data.url;
            } else {
                console.error('Error generating checkout session, status: ' + response.status);
            }
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            setDisabledButton(false);
        }
    }

    return (
        <div className="flex flex-col w-full text-left">
            <form onSubmit={goToPayment} className='flex flex-col gap-2 text-xl text-gold'>
                <label htmlFor="fullName">Nume</label>
                <input onChange={handleChange} type="text" name='fullName' id='fullName' placeholder='Cum te numesti' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="email" name='email' id='email' placeholder='Adresa ta de email' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="phoneNumber">Telefon</label>
                <input onChange={handleChange} type="phone" name='phoneNumber' id='phoneNumber' placeholder='Numarul tau de telefon' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="gender">Gen</label>
                <select onChange={handleChange} value={data.gender} name="gender" id="gender" className='text-black'>
                    <option value="male">Masculin</option>
                    <option value="female">Feminin</option>
                </select>

                <label htmlFor="age">Varsta</label>
                <input onChange={handleChange} type="number" name='age' id='age' placeholder='Varsta' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="height">Inaltime</label>
                <input onChange={handleChange} type="number" name='height' id='height' placeholder='Inaltime (cm)' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="weight">Greutate</label>
                <input onChange={handleChange} type="number" name='weight' id='weight' placeholder='Greutate (kg)' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="previous_experience">Experienta anterioara</label>
                <input onChange={handleChange} type="text" name='previous_experience' id='previous_experience' placeholder='Descrie pe scurt ce dieta/antrenament ai urmat in trecut' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="didYouPractice">Ai mai facut sport in trecut?</label>
                <select onChange={handleChange} value={data.didYouPractice} name="didYouPractice" id="didYouPractice" className='text-black'>
                    <option value="yes">Da</option>
                    <option value="no">Nu</option>
                </select>

                <label htmlFor="max_sessions">Cate antrenamente poti face intr-o saptamana?</label>
                <input onChange={handleChange} type="text" name='max_sessions' id='max_sessions' placeholder='Ex. 3 antrenamente' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="max_time">Poti dedica mai mult de 45 de minute unui antrenament?</label>
                <select onChange={handleChange} value={data.max_time} name="max_time" id="max_time" className='text-black'>
                    <option value="yes">Da</option>
                    <option value="no">Nu</option>
                </select>

                <label htmlFor="knownProblem">Ai vreo leziune/boala?</label>
                <input onChange={handleChange} type="text" name='knownProblem' id='knownProblem' placeholder='Daca este cazul' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="foodToAvoid">Ce alimente iti displac?</label>
                <input onChange={handleChange} type="text" name='foodToAvoid' id='foodToAvoid' placeholder='Insira alimentele pe care nu le poti manca.' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="work">Cu ce te ocupi?</label>
                <input onChange={handleChange} type="text" name='work' id='work' placeholder='Ex. sunt pianist si ma dau cu skate-ul in timpul liber' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="sleep">Cate ore dormi pe noapte in medie?</label>
                <input onChange={handleChange} type="text" name='sleep' id='sleep' placeholder='Ex. 7h' className='px-4 py-2 rounded-2xl text-black' />

                <label htmlFor="prefferedSchedule">Cand preferi sa te antrenezi?</label>
                <input onChange={handleChange} type="text" name='prefferedSchedule' id='prefferedSchedule' placeholder='Ex. Dupa masa, intre 15:30 si 17:00' className='px-4 py-2 rounded-2xl text-black' />

                <button type="submit" disabled={disabledButton} className='my-4 px-8 py-4 bg-gold rounded-full text-center text-black font-semibold self-center sm:self-start'>Confirma si plateste</button>

            </form>
        </div>
    )
}

export default BuyFormularForm