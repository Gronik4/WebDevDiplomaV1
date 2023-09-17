import React from 'react'

export default function RenderInfo({info}) {
 const [date, start, hallname, filmname, ,] = info
  return (
    <div className='buying__info'>
      <div className='buying__info-description'>
        <h2 className='buying__info-title'>{filmname}</h2>
        <p className='buying__info-start'>Начало сеанса: {date} в {start}</p>
        <p className='buying__info-hall'>Зал: {hallname}</p>
      </div>
    </div>
  )
}
