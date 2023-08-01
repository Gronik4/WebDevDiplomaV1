import React from 'react';
import schemeFilmService from './serviceSG/schemeFilmService';

export default function LoadingMovies({tension, datas, onDelFilm}) {

  const wt = 29; // Ширина записи времени чч:мм
  const listFilms = schemeFilmService(tension, datas);

  function hendlerStartSF(e) {
    e.target.style.opacity = '0.4';
    e.target.classList.add('taken');  
  }

  function hendlerEndSF(e) {
    e.target.style.opacity = '1';
    onDelFilm();
    e.target.classList.remove('taken'); 
  }
  return (
    <>
     {!tension.length? <p className='conf-step__legend' style={{width: 'max-content', margin: 'auto'}}>{listFilms}</p>:
      listFilms.map((el, index)=> {
        const { id, name, dur, posStart, timeStart, timeEnd } = el;
        return(
          <div key={index}
            draggable={true}
            onDragStart={(e)=> hendlerStartSF(e)}
            onDragEnd={(e)=> hendlerEndSF(e)}
            className='conf-step__seances-movie'
            data-tag='film'
            id={id} 
            style={{
              'width': dur,
              'backgroundColor': 'rgb(133, 255, 137)',
              'left': posStart,
              'padding': 0,
              'fontSize': '1.1rem',
              'padding': '2px',
              'cursor': 'move'
              }}
            >
            <p className='conf-step__seances-movie-title' data-tag='film'>{name} - {dur}мин</p>
            <p className='conf-step__seances-movie-start' data-tag='film'>{timeStart}</p>
            <p className='conf-step__seances-movie-start' data-tag='film' style={{'left': `${dur-wt}px`}}>{timeEnd}</p>
            <div className='conf-step__seances-movie-after' data-tag='film' style={{'left': `${dur-1}px`}}></div>
            <div className='cleaner-time' tag='film' style={{'left': `${dur-1}px`}}></div>
          </div>
        )
      })
     } 
    </>
  )
}
