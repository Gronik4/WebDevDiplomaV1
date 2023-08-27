import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import getFlags from '../srevces/managingFlags';
import moment from 'moment/moment';
import 'moment/locale/ru'; // Установка языка(русский)
import RenderLegend from './renderLegend';
import RenderHalls from './RenderHalls';
import collectGridData from './serviceSG/collectGridData';
import { useForm } from '@inertiajs/react';
import AvailableFilms from './AvailableFilms';
import axios from 'axios';

export default function SessionGrid({ datas, halls}) {
  
  
  const maxLength = datas.reduce((prev, curr)=> {
    if(+prev.duration < curr.duration) {return curr;} else {return prev;}
  }).duration;
  console.log(+maxLength);

  const headerName = 'Сетка сеансов';
  const flags = getFlags(headerName); // Флаг для определения добавляем ли popup-ы и какие
  const [filmName, setFilmName] = useState('');
  const [filmId, setFilmId] = useState('');
  const [date, setDate] = useState();
  const filmsJson = JSON.stringify(datas);// Для менее затратной передачи данных
  const {post, get, processing, errors} = useForm();

  if(errors.grid) {alert('Действие не возможно. Сетка сеансов пуста.');}

  function setTensionStart() { //**Здесь положить данные из таблицы session_grid******************
    const arrHalls = {};
    halls.forEach((el)=> {
      arrHalls[el.id] = [];
    });
    return arrHalls;
  }
  
  const [tension, setTension] = useState(setTensionStart);

  function saveGrid() {
    const dsg = collectGridData();
    post(route('grid.store', {grid: dsg}));
    console.log(tension[0]);
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

  function selectDate(e) {
    console.log('chenge');
    const chosenDat = Date.parse(e.target.value);
    axios.get(route('grid.show', e.target.value)).then((resp)=> {
      console.log(resp.data.datas[0]);
      console.log(tension);
    });
    setDate(moment(chosenDat).format('LL'));
  }

  return (
    <SectionAdminLayout headerName={headerName} flags={flags} nameEl={filmName} idEl={filmId}>
      <AvailableFilms datas={datas} flag={flags} onFilmDelete={(film)=>showPopupDelFilm(film)} onSelectDate={selectDate}/>
      
      {date? <>
        <RenderLegend date={date}/>
        <div className='conf-step__seances'>
          {halls.map((el)=> {
            return <RenderHalls key={el.id} name={el.name} id={el.id} schedule={tension} datas={filmsJson}/>
          })}
        </div>
        <fieldset className='conf-step__buttons text-center'>
          <input type='submit' onClick={saveGrid} disabled={processing} value='Сохранить' className='conf-step__button conf-step__button-accent'/>
        </fieldset>
      </>: null}
    </SectionAdminLayout>
  )
}
