import React from 'react'

export default function AvailableHalls({data, handlerName}) {
  const value = data?
    data.map((hall)=> {
      return (
      <li className='li_info' key={hall.id}>
        <input type="radio" className="conf-step__radio" name="chairs-hall" id={hall.id} value={hall.name} onChange={handlerName}/>
        <span className="conf-step__selector">{hall.name}</span>
      </li>)
    }):
    <p className='conf-step__paragraph'>Пока нет доступных залов</p>;
  return value;
}
