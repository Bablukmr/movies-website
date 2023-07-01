
import React, { useState } from 'react'

export default function Bonus() {
    const [bonus , setBonus]=useState({points:0})
    function incriment(){
setBonus({points :bonus.points+1})
    }
    
  return (
    <>
 <h4>Bonus Compnents</h4>
    <div >
        <h4 style={{color:'yellow'}}>Total Points:{bonus.points}</h4>
<button onClick={incriment}>Increment +</button>
    </div></>
  )
}
