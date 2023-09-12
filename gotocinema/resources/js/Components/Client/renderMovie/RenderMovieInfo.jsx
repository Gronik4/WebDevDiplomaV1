import React from 'react'

export default function RenderMovieInfo({movie, index}) {
  const alter = movie.name + ' постер';
  const poster = 'i/'+movie.posterMain;
  return (
    <div className='movie__info' key={movie.id}>
      <div className="movie__poster">
        <img className="movie__poster-image" alt={alter} src={poster}/>
      </div>
      <div className="movie__description">
        <h2 className="movie__title">{movie.name}</h2>
        <p className="movie__synopsis">{movie.desc}</p>
        <p className="movie__data">
          <span className="movie__data-duration">{movie.duration} минут </span>
          <span className="movie__data-origin">{movie.creators} </span>
          <span className="movie__data-origin"> {movie.realise}</span>
        </p>
      </div>
    </div>
  )
}
