import './Movie.css'
import React, { useEffect, useState } from 'react'
import { add } from '../store/favSlice';
import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

export default function Movie() {

  const dispatch = useDispatch();
  const [movie, setMovie] = useState([])

  const fetchMovie = createAsyncThunk(
    async () => {
      const res = await fetch("https://www.omdbapi.com/?s=action&apikey=8c225964&page=1");
      const data = await res.json();
      setMovie(data.Search);
      console.log(movie)
    } 
  ); 
  fetchMovie()
  //console.log(movie)

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch("https://www.omdbapi.com/?s=action&apikey=8c225964&page=1")
      const data = await res.json()
      setMovie(data.Search)

    }

    fetchMovie()
  }, []);
  
  function handalAdd(item) {
    dispatch(add(item))

  }
  //console.log(movie)
  //console.log(item.Poster)
  // console.log(item.imdbID)


  return (
    <div className='display-card'>
      {
        movie.map((item, i) =>
          <div className='movie-div' key={item.imdbID}>
            <img src={item.Poster} />
            <h3>Movie: {item.Title}</h3>
            <h5>Year: {item.Year}</h5>
            <button onClick={() => handalAdd(item)}>ADD💜</button>
          </div>
        )
      }
    </div>
  )
}
