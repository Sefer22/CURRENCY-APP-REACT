import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(0);

    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'black', color: '#fff', width: '100%', textAlign: 'center' }}>
                <h3>CURRENCY APP</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />
                <select className='from-currency-option'>
                    <option> USD </option>
                    <option> EURO</option>
                    <option>TL</option>
                </select>

                <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px', marginTop: '30px' }} />


                <select className='to-currency-option'>
                    <option>TL</option>
                    <option> USD </option>
                    <option> EURO</option>
                </select>

                <input type="number" className='result' />
            </div>

            <div>
                <button className='exchange-button'>Exchange</button>
            </div>

        </div>
    )
}

export default Currency