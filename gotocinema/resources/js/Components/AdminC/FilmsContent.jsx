import React from 'react'

export default function FilmsContent({ films, onSelectFilm }) {
  function selectFilm(e) {
    e.preventDefault();
    const filmChosen = e.target.closest('.conf-step__movie');
    onSelectFilm(filmChosen);
  }
  return (films.length != 0?
  films.map((film) => {
    return (
      <div className='conf-step__movie' key={film.id} id={film.id}>
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
