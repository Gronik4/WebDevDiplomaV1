import React, { useContext } from 'react';
import RenderFilm from './RenderFilm';
import calcDates from '../srevces/calculationDates';

export default function AvailableFilms({ datas, flag, onFilmDelete, onSelectDate, onGet}) {
  const { min, max } = calcDates();
  

  function showPopupAddFilm(e) {
    e.preventDefault();
    const popup = document.getElementById(flag.add);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
  }

  function showPopupDelFilm(film) {
    onFilmDelete(film);
  }
  const renderFilms =  datas.length !== 0? datas.map((el)=> { 
    return <RenderFilm
    key={el.id}
    id={el.id}
    name={el.name}
    duration={el.duration}
    img={el.posterAd}
    onSelectFilm={(film)=>showPopupDelFilm(film)}
    />
  }): <div className='conf-step__wrapper refer'><p className='conf-step__paragraph'>В прокате пока нет фильмов</p></div>
  return (
    <>
      <p className='conf-step__paragraph'>
        <button className='conf-step__button conf-step__button-accent' onClick={showPopupAddFilm}>Добавить фильм</button>
      </p>
      <div className='conf-step__movies'>
        {renderFilms}
      </div>
      <div className='conf-step__wrapper refer' style={{padding: '5px 42px 5px 104px'}}>
        <label className='conf-step__paragraph'>Чтобы составить сетку сеансов выберите дату: 
          <input id='SGDate' type='date' min={min} max={max} onChange={onSelectDate} style={{marginLeft: '0.5rem'}}/>
        </label>
      </div>
    </>
  )
}
