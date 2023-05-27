
import React, { useState } from 'react'
import './Account.css'

export default function Account() {
    const [account, setAccount] = useState({ amount: 0 })
    const [value, setValue] = useState(0)

    function handalIncrement() {
        setAccount({ amount: account.amount + 1 })
    }
    function handalDecrement() {
        setAccount({ amount: account.amount - 1 })
    }
    const handalIncrementByAmount = (value) => {
        setAccount({ amount: account.amount + value })
    }


    return (
        <>
            <div className='main-div'>
                <h4> Account Compnents </h4>
                <h3>amount: {account.amount}</h3>
                <button onClick={handalIncrement}>Increment</button>
                <button onClick={handalDecrement}>Decrement</button>
                <input type='number' onChange={(e) => setValue(+e.target.value)} />
                <button onClick={() => handalIncrementByAmount(value)}>Increment {value} +</button>
            </div></>
    )
}
