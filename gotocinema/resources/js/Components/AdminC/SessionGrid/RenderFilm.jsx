import React, { useContext } from 'react';
import createFantom from './serviceSG/createFantom';
import { ASContext } from '@/Pages/PanelAdmin';
import sgHandlerCondor from './serviceSG/sgHandlerCondor';

export default function RenderFilm({img, name, duration, id, onSelectFilm}) {
  const {conder, setConder} = useContext(ASContext);
  const sign = sgHandlerCondor(conder);

  function selectFilm(e) {
    e.preventDefault();
    const filmChosen = e.target.closest('.conf-step__movie');
    onSelectFilm(filmChosen);
  }

  function handlerStart(e) {
    e.target.closest('.conf-step__movie').classList.add('taken');
    const fantom = createFantom(name, duration, id);
    document.querySelector('.conf-step__movies').append(fantom);
    e.dataTransfer.setDragImage(document.getElementById(`${e.target.closest('.conf-step__movie').id}fantom`), 10,10);
    setTimeout(()=> fantom.remove(), 0);
  }

  function handlerEnd(e) {
    e.target.closest('.conf-step__movie').classList.remove('taken');
  }
  
  return (
    <div
      className='conf-step__movie'
      id={id}
      draggable={sign == 'show'? true: false}
      onDragStart={sign == 'show'? (e)=> handlerStart(e): ()=>false}
      onDragEnd={sign == 'show'? (e)=> handlerEnd(e): ()=>false}
      >
      <img className='conf-step__movie-poster' alt='poster' src={`img/posters/${img}`}/>
      <h3 className='conf-step__movie-title'>{name}</h3>
      <p className='conf-step__movie-duration'>
        {duration}минут
        <button className='conf-step__button conf-step__button-trash' onClick={selectFilm}></button>
        </p>
    </div>
  );
}
