import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import getFlags from '../srevces/managingFlags';
import moment from 'moment/moment';
import 'moment/locale/ru'; // Установка языка(русский)
import calcDates from '../srevces/calculationDates';
import RenderLegend from './renderLegend';
import RenderFilm from './renderFilm';
import RenderHalls from './RenderHalls';

export default function SessionGrid({ datas, halls }) {
  
  const headerName = 'Сетка сеансов';
  const flags = getFlags(headerName); // Флаг для определения добавляем ли popup-ы и какие
  const [filmName, setFilmName] = useState('');
  const [filmId, setFilmId] = useState('');
  const [dateSelect, setDateSelect] =useState(false);
  const [date, setDate] = useState('');
  const { min, max } = calcDates();
  const filmsJson = JSON.stringify(datas);// Для менее затратной передачи данных

  function setTensionStart() { //**Здесь положить данные из таблицы session_grid******************
    const arrHalls = {};
    halls.forEach((el)=> {
      arrHalls[el.id] = [];
    });
    return arrHalls;
  }
  const [tension, setTension] = useState(setTensionStart);

  function saveGrid() {
    alert('saveGrid');
  }

  const showPopupAddFilm = (e)=> {
    e.preventDefault();
    const popup = document.getElementById(flags.add);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
  }

  const showPopupDelFilm = (film)=> {
    setFilmId(film.id);
    setFilmName(film.childNodes[1].textContent);
    const popup =  document.getElementById(flags.del);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      setFilmId('');
      setFilmName('') ;
      popup.style.display = '';
    }
  }

  function dateGrid(e) {
    const chosenDat = Date.parse(e.target.value);
    setDate(moment(chosenDat).format('LL'));
    setDateSelect(true);
  }

  const renderFilms =  datas.length !== 0? datas.map((el)=> { return <RenderFilm
    key={el.id}
    id={el.id}
    name={el.name}
    duration={el.duration}
    img={el.posterAd}
    onSelectFilm={(film)=>showPopupDelFilm(film)}
    />
  }): <div className='conf-step__wrapper'><p className='conf-step__paragraph'>В прокате пока нет фильмов</p></div>

  return (
    <SectionAdminLayout headerName={headerName} flags={flags} nameEl={filmName} idEl={filmId}>
      <p className='conf-step__paragraph'>
        <button className='conf-step__button conf-step__button-accent' onClick={showPopupAddFilm}>Добавить фильм</button>
      </p>
      <div className='conf-step__movies'>
        {renderFilms}
      </div>
      <div className='conf-step__wrapper' style={{padding: '5px 42px 5px 104px'}}>
        <label className='conf-step__paragraph'>Чтобы составить сетку сеансов выберите дату: 
          <input type='date' min={min} max={max} onChange={dateGrid} style={{marginLeft: '0.5rem'}}/>
        </label>
      </div>
      {dateSelect? <><RenderLegend date={date}/>
      <div className='conf-step__seances'>
        {halls.map((el)=> {
          return <RenderHalls key={el.id} name={el.name} id={el.id} schedule={tension} datas={filmsJson}/>
        })}
      </div>
      <fieldset className='conf-step__buttons text-center'>
        <input type='submit' onClick={saveGrid} value='Сохранить' className='conf-step__button conf-step__button-accent'/>
      </fieldset>
      </>: null}
    </SectionAdminLayout>
  )
}
