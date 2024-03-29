import React from 'react';

export default function RenderLegend({date}) {
  return (
    <div className='conf-step__legend' style={{color:'#000', fontSize: '1rem'}}>
      <p className='conf-step__paragraph' style={{fontSize: '1.3rem'}}>Сетка сеансов на {date}</p>
      <span className='clearing-time__span'></span> - Время уборки и проветривания зала 10 минут
      <br></br>Для составления сетки зала, перетащите нужный фильм в нужный зал.
      <br></br>Продолжительность работы зала с 10:00 до 23:00.
    </div>
  )
}
