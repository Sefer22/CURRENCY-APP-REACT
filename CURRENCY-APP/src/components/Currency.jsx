import React from 'react'
import '../css/currency.css'

function Currency() {
    return (
        <div className='currency-div'>
            <input type="number" className='amount' />
            <select className='from-currency-option'>
                <option> USD </option>
                <option> EURO</option>
                <option>TL</option>
            </select>

            <select className='to-currency-option'>
                <option>TL</option>
                <option> USD </option>
                <option> EURO</option>
            </select>

            <input type="number" className='result' />

        </div>
    )
}

export default Currency