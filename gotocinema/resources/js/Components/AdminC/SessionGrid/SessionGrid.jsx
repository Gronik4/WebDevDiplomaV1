import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useContext, useState } from 'react'
import getFlags from '../srevces/managingFlags';
import moment from 'moment/moment';
import 'moment/locale/ru'; // Установка языка(русский)
import RenderLegend from './renderLegend';
import RenderHalls from './RenderHalls';
import collectGridData from './serviceSG/collectGridData';
import { useForm } from '@inertiajs/react';
import AvailableFilms from './AvailableFilms';
import axios from 'axios';
import receivedDataHandler from './serviceSG/receivedDataHandler';
import { ASContext } from '@/Pages/PanelAdmin';

export default function SessionGrid({ datas, halls}) {
  
  
  const maxLength = datas.reduce((prev, curr)=> {
    if(+prev.duration > curr.duration) {return curr;} else {return prev;}
  }).duration;
  //console.log('min duration film= '+maxLength);

  const headerName = 'Сетка сеансов';
  const flags = getFlags(headerName); // Флаг для определения добавляем ли popup-ы и какие
  const [filmName, setFilmName] = useState('');
  const [filmId, setFilmId] = useState('');
  const [date, setDate] = useState();
  const filmsJson = JSON.stringify(datas);// Для менее затратной передачи данных
  const {post, patch, processing, errors} = useForm();
  const {conder, setConder} = useContext(ASContext);

  if(errors.grid) {alert('Действие не возможно. Сетка сеансов пуста.' + errors.grid);}

  function setTensionStart() { //**Стартовое значение tension***
    const arrHalls = {};
    halls.forEach((el)=> {arrHalls[el.id] = [];});
    return arrHalls;
  }
  
  const [tension, setTension] = useState(setTensionStart);

  function saveGrid(e) {
    e.preventDefault();
    const dsg = collectGridData();
    const count = Object.values(tension).reduce((summ, current)=>summ + current.length, 0);
    const selectDate = document.getElementById('SGDate').value;
    if(count === 0) {
      post(route('grid.store', {grid: dsg}));
      return;
    } 
      patch(route('grid.update', {grid: ['grids', selectDate], grids: dsg}));
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
    const chosenDat = Date.parse(e.target.value);
    axios.get(route('grid.show', e.target.value)).then((resp)=> {
      const allow = resp.data.test? resp.data.test.allpwed: '2';
      /*console.log('soldSeats= '+ resp.data.sold);
      console.log('allowSold= '+allow+' / ');
      console.log('conder= '+conder);*/
      //const a = ${resp.data.test.allpwed}
      setConder(`${resp.data.sold}${allow}`);
      const dts = receivedDataHandler(resp.data.datas, maxLength, datas);
      setTension(dts);
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
          <form name='savUp' onSubmit={saveGrid}>
            <input name='grid' type='hidden'/>
            <input type='submit' disabled={processing} value='Сохранить' className='conf-step__button conf-step__button-accent'/> 
          </form>
        </fieldset>
      </>: null}
    </SectionAdminLayout>
  )
}
