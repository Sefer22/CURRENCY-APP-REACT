import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(0);

    const exchange = () => {
        console.log(amount);
        console.log(fromCurrency);
        console.log(toCurrency);
    }

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
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option> USD </option>
                    <option> EURO</option>
                    <option>TL</option>
                </select>

                <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px', marginTop: '30px' }} />


                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TL</option>
                    <option> USD </option>
                    <option> EURO</option>
                </select>

                <input value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type="number" className='result' />
            </div>

            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Exchange</button>
            </div>

        </div>
    )
}

export default Currency