import React from 'react'

export default function RenderMovieInfo({movie, index}) {
  const alter = movie.name + ' постер';
  const poster = 'i/'+movie.posterMain;
/**
 * style={{maxWidth: '12.5rem'}} - нужно, чтобы перезаписать свойство, которое приходит из inline:369
 *   иначе картинки разных размеров!!!
 *  */ 
  return (
    <div className='movie__info' key={index}>
      <div className="movie__poster">
        <img className="movie__poster-image" alt={alter} src={poster} style={{maxWidth: '12.5rem'}}/>
      </div>
      <div className="movie__description">
        <h2 className="movie__title" id={movie.id}>{movie.name}</h2>
        <p className="movie__synopsis">{movie.desc}</p>
        <p className='movie__data'><span className='movie__data-origin'>Жанр: {movie.genre}</span></p>
        <p className="movie__data">
          <span className="movie__data-duration">{movie.duration} минут </span>
          <span className="movie__data-origin">{movie.creators} </span>
          <span className="movie__data-origin"> {movie.realise}</span>
        </p>
      </div>
    </div>
  )
}
