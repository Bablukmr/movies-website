import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/favSlice';

export default function Favorite() {
  const dispatch =useDispatch();
const product =useSelector(state=>state.FAV)

function handleRemove(item){
dispatch(remove(item))

  //console.log(item)
  
}
  return (
    <> 
    <h1 style={{marginLeft:'30%'}}>List of Favorite💜 Movies: {product.length} </h1>
    <div className='display-card'>
     
       {
        product.map((item,i)=>
      
   <div className='movie-div' key={item.imdbID}>
    
    <img src={item.Poster}/>
       <h3>Movie: {item.Title}</h3>
       <h5>Year: {item.Year}</h5>
      <button onClick={()=>handleRemove(item.imdbID)}>REMOVE</button>
    </div>
        )
       } 
    </div>
    </>
  )
}
