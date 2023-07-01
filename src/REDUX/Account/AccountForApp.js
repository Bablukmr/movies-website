
import React from 'react'
import Account from './Account'
import Bonus from '../Bonus/Bonus'

export default function AccountForApp() {
  return (
    <div>
         <div style={{color:'yellow'}}>
      <br/> <br/> App
        <h2>Current Account: </h2>
        <h4>Total Bonus: </h4>
      </div>
   <Account/>
   <Bonus/>


    </div>
  )
}
