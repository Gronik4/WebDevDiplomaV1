
import 'moment/locale/ru'; // Установка языка(русский)
import moment from 'moment/moment';
import React from 'react';

export default function RenderInfo({info}) {
 const [date, start, hallname, filmname, ,] = info;
 const day = moment(date).format('LL');
  return (
    <div className='buying__info'>
      <div className='buying__info-description'>
        <h2 className='buying__info-title'>Фильм: {filmname}</h2>
        <p className='buying__info-start'>Начало сеанса: {day} в {start}</p>
        <p className='buying__info-hall'>Зал: {hallname}</p>
      </div>
    </div>
  )
}
