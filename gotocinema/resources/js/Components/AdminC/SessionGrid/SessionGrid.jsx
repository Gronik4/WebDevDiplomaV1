import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import getFlags from '../srevces/managingFlags';
import moment from 'moment/moment';
import 'moment/locale/ru'; // Установка языка(русский)
import FilmsContent from '../FilmsContent';
import calcDates from '../srevces/calculationDates';

export default function SessionGrid({ datas, halls }) {

  const headerName = 'Сетка сеансов';
  const flags = getFlags(headerName);
  const [filmName, setFilmName] = useState('');
  const [filmId, setFilmId] = useState('');
  const [dateSelect, setDateSelect] =useState(false);
  const [date, setDate] = useState('');
  const { min, max } = calcDates();

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

  const grid = dateSelect? 
    halls.map((hall)=> {
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
        <FilmsContent films={datas} onSelectFilm={(film)=>showPopupDelFilm(film)}/>
      </div>
      <div className='conf-step__seances-hall'>
        <label className='conf-step__paragraph'>Чтобы составить сетку сеансов выберите дату: 
          <input type='date' min={min} max={max} onChange={dateGrid} style={{marginLeft: '0.5rem'}}/>
        </label>
      </div>
      {dateSelect?
        <div className='conf-step__seances-hall'>
          <p className='conf-step__paragraph'>Сетка сеансов на {date}</p>
        </div>: null
      }
      <div className='conf-step__seances'>
        {grid}
      </div>
    </SectionAdminLayout>
  )
}
