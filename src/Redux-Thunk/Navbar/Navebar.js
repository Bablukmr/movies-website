import React from 'react'
import { Link } from 'react-router-dom'
import './Navebar.css'
import { useSelector } from 'react-redux'
export default function Navebar() {
    const item = useSelector((state)=>state.FAV)
    return (

        <div className='main-div'>
            <div className='div-icon'>
                <h3>🅼🅾🆅🅸🅴</h3>
            </div>
            <div className='div-link'>
              
                <Link to='/' >Home</Link>
             
                
                <Link to='/favorite' >Favorite💜</Link><span>{item.length}</span>
               
            </div>
        </div>
    )
}
