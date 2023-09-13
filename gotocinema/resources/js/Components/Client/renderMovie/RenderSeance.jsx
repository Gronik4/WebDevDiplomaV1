import React from 'react'

export default function RenderSeance({times}) {
  function showSeats() {
    alert('showSeats');
  }
  return (
    <ul className="movie-seances__list">
      {times.map((el, index)=> {
        return(
          <li className='movie-seances__time-block' key={index}>
            <p className='movie-seances__time' onClick={showSeats}>{el}</p>
          </li>
        )
      })}
    </ul>
  )
}
