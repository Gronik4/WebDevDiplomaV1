import React from 'react'
import RenderMovieInfo from './RenderMovieInfo';
import RenderHallGrid from './RenderHallGrid';

export default function RenderMovie({grid, films}) {
  
  return (
    <>
     {grid.map((el, index)=> {
      const filmData = films.find((item)=> item.id === el.id);
      return (
        <section className='movie'key={index}>
          <RenderMovieInfo movie={filmData}/>
          <RenderHallGrid datas={el.grid}/>
        </section>
      )
     })} 
    </>
    
    
  )
}
