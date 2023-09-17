import { useForm } from '@inertiajs/react';
import React from 'react'

export default function RenderSeance({times, dat}) {
  const{get} = useForm();
  function showSeats(e) {
    const start = e.target.textContent;
    const namehall = e.target.closest('.movie-seances__hall').firstChild.textContent;
    const idFilm = e.target.closest('.movie').querySelector('.movie__title').id;
    //const state = {date: dat, start: start, namehall: namehall, idFilm: idFilm};
const state = `${dat},${start},${namehall},${idFilm}`;
    console.log(state);
    get(route('showHall', {state: state}));
  }
  return (
    <ul className="movie-seances__list">
      {times.map((el, index)=> {
        return(
          <li className='movie-seances__time-block' key={index} onClick={showSeats}>
            <p className='movie-seances__time'>{el}</p>
          </li>
        )
      })}
    </ul>
  )
}
