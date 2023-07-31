import React from 'react';
import createFantom from './SessionGrid/serviceSG/createFantom';

export default function FilmsContent({ films, onSelectFilm }) {

  function selectFilm(e) {
    e.preventDefault();
    const filmChosen = e.target.closest('.conf-step__movie');
    onSelectFilm(filmChosen);
  }

  function hendlerStart(e) {
    const dragged = e.target;
    console.log(dragged);
    dragged.classList.add('taken');
    const fantom = createFantom(dragged.name, dragged.duration, dragged.id);
    document.querySelector('.conf-step__movies').append(fantom);
    e.dataTransfer.setDragImage(document.getElementById(`${dragged.id}fantom`), 10,10);
    setTimeout(()=> fantom.remove(), 0);
  }
  function hendlerEnd(e) {
    e.target.classList.remove('taken');
  }

  return (films.length != 0?
  films.map((film) => {
    return (
      <div className='conf-step__movie'
        key={film.id}
        id={film.id}
        draggable={true}
        onDragStart={(e)=> hendlerStart(e)}
        onDragEnd={(e)=> hendlerEnd(e)}
      >
        <img className='conf-step__movie-poster' alt='poster' src={`img/${film.posterAd}`}/>
        <h3 className='conf-step__movie-title'>{film.name}</h3>
        <p className='conf-step__movie-duration'>
          {film.duration} минут
          <button className='conf-step__button conf-step__button-trash' onClick={selectFilm}></button>
        </p> 
      </div>
    )
  }):<div className='conf-step__wrapper'><p className='conf-step__paragraph'>В прокате пока нет фильмов</p></div>)
}
