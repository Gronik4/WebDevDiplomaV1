import React from 'react';
import createFantom from './serviceSG/createFantom';

export default function RenderFilm({img, name, duration, id, onSelectFilm}) {

  function selectFilm(e) {
    e.preventDefault();
    const filmChosen = e.target.closest('.conf-step__movie');
    onSelectFilm(filmChosen);
  }

  function hendlerStart(e) {
    e.target.classList.add('taken');
    const fantom = createFantom(name, duration, id);
    document.querySelector('.conf-step__movies').append(fantom);
    e.dataTransfer.setDragImage(document.getElementById(`${e.target.id}fantom`), 10,10);
    setTimeout(()=> fantom.remove(), 0);
  }

  function hendlerEnd(e) {
    e.target.classList.remove('taken');
  }
  
  return (
    <div
      className='conf-step__movie'
      id={id}
      draggable={true}
      onDragStart={(e)=> hendlerStart(e)}
      onDragEnd={(e)=> hendlerEnd(e)}
      >
      <img className='conf-step__movie-poster' alt='poster' src={`img/${img}`}/>
      <h3 className='conf-step__movie-title'>{name}</h3>
      <p className='conf-step__movie-duration'>
        {duration}минут
        <button className='conf-step__button conf-step__button-trash' onClick={selectFilm}></button>
        </p>
    </div>
  );
}
