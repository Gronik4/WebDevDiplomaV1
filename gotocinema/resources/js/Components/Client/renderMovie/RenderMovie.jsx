import React from 'react'
import RenderMovieInfo from './RenderMovieInfo';
import RenderHallGrid from './RenderHallGrid';
import moment from 'moment';

export default function RenderMovie({grid, films, dat}) {
  const date = dat? dat: moment(Date.now()).format('YYYY-MM-DD');
  const sections = grid.length?
    grid.map((el, index)=> {
      const filmData = films.find((item)=> item.id === el.id);
      return (
        <section className='movie'key={index}>
          <RenderMovieInfo movie={filmData}/>
          <RenderHallGrid datas={el.grid} dat={date}/>
        </section>
      )
    }): <section className='movie'><h2 className='movie-seances__hall'>На {date} сеансов не запланировано.</h2></section>
    
  return (
    <>
     {sections} 
    </>
    
    
  )
}
