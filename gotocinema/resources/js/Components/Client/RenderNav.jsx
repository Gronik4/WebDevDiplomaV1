import React, { useState } from 'react';
import calculateNav from './services/calculateNav';
import moment from 'moment/moment';

export default function RenderNav({onSelectData}) {
  const day = 24*60*60*1000; // Сутки в милисекундах
  const now = Date.now();
  const today = moment(now).format('YYYY-MM-DD');
  const [arrayDat, setArrayDat] = useState(now);
  const [arrow, setArrow] = useState(1);
  const dataNav = calculateNav(arrayDat, day);
  const navDays = document.querySelectorAll('.page-nav__day');
  
  function selectDay(e) { 
    navDays.forEach((el)=> {
      el.classList.remove('page-nav__day_chosen');
    });
    e.target.closest('.page-nav__day').classList.add('page-nav__day_chosen');
    const chosenDate = e.target.closest('.page-nav__day').dataset.fulld;
    onSelectData(chosenDate);
  }

  function renderNext() {
    navDays.forEach((el)=> {
      el.classList.remove('page-nav__day_chosen');
    });
    const nextWeek = now + 7*day;
    setArrayDat(nextWeek);
    setArrow(2);
  }

  function renderPrevious() {
    navDays.forEach((el)=> {
      el.classList.remove('page-nav__day_chosen');
    });
    setArrayDat(now);
    setArrow(1);
  }
  
  return (
    <>
      {arrow !== 1? <p className='page-nav__day page-nav__day_previous' onClick={renderPrevious}></p>: null}
      {dataNav.length?
        dataNav.map((el, index)=> {
          let nameClass = el.day === 'сб'?
            'page-nav__day page-nav__day_weekend': el.day === 'вс'?
              'page-nav__day page-nav__day_weekend': 'page-nav__day';
          el.fullD === today? nameClass +=' page-nav__day_today page-nav__day_chosen': nameClass;
          return(
            <p className={nameClass} key={index} onClick={selectDay} data-fulld={el.fullD}>
              <span className='page-nav__day-week'>{el.day}</span>
              <span className='page-nav__day-number'>{el.num}</span>  
            </p>
          )
        }): 
        <p className='page-nav__day-week'>Пока нет данных</p>
      }
      {arrow === 1? <p className='page-nav__day page-nav__day_next' onClick={renderNext}></p>: null}
    </>
  )
}
