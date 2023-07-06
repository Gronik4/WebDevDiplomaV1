import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import getFlags from '../srevces/managingFlags';

export default function SessionGrid({ datas, halls }) {

  const headerName = 'Сетка сеансов';
  const flags = getFlags(headerName);
  const [filmName, setFilmName] = useState('');
  const [filmId, setFilmId] = useState('');
  const [dateSelect, setDateSelect] =useState(false);

  const showPopupAddFilm = (e)=> {
    e.preventDefault();
    const popup = document.getElementById(flags.add);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
  }

  const showPopupDelFilm = (e)=> {
    e.preventDefault();
    const filmChosen = e.target.closest('.conf-step__movie');
    setFilmId(filmChosen.id);
    setFilmName(filmChosen.childNodes[1].textContent);
    const popup =  document.getElementById(flags.del);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      setIdHall('');
      setNameHall('') ;
      popup.style.display = '';
    }
    console.log(popup);
  }
  function dataGreed() {
    setDateSelect(true);
  }

  const filmsContent = datas.length != 0?
    datas.map((film, index) => {
      return (
        <div className='conf-step__movie' key={index} id={film.id}>
          <img className='conf-step__movie-poster' alt='poster' src={`img/${film.posterAd}`}/>
          <h3 className='conf-step__movie-title'>{film.name}</h3>
          <p className='conf-step__movie-duration'>
            {film.duration} минут
            <button className='conf-step__button conf-step__button-trash' onClick={showPopupDelFilm}></button>
          </p> 
        </div>
      )
    }):<div className='conf-step__wrapper'><p className='conf-step__paragraph'>В прокате пока нет фильмов</p></div>;

  const grid = dateSelect? 
    halls.map((hall, index)=> {
     return(
      <div className='conf-step__seances-hall' key={hall.id} id={hall.id}>
        <h3 className='conf-step__seances-title'>{hall.name}</h3>
        <div className='conf-step__seances-timeline'></div>
      </div>
     ) 
    }):<div className='conf-step__wrapper'><p className='conf-step__paragraph'>Дата не выбрана</p></div>;
  return (
    <SectionAdminLayout headerName={headerName} flags={flags} nameEl={filmName} idEl={filmId}>
      <p className='conf-step__paragraph'>
        <button className='conf-step__button conf-step__button-accent' onClick={showPopupAddFilm}>Добавить фильм</button>
      </p>
      <div className='conf-step__movies'>
        {filmsContent}
      </div>
      <div className='conf-step__seances-hall'>
        <label className='conf-step__paragraph'>Чтобы составить сетку сеансов выберите дату: 
          <input type='date' onChange={dataGreed}/>
        </label>
      </div>
      <div className='conf-step__seances'>
        {grid}
      </div>
    </SectionAdminLayout>
  )
}
