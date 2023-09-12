import React from 'react'
import RenderMovieInfo from './RenderMovieInfo';

export default function RenderMovie({grid, films}) {
  
    grid.forEach(el => {
    const filmData = films.find((item)=> item.id === el.id);
    console.log(filmData);
  });
  
  return (
    <div className='movie'>
     {grid.map((el, index)=> {
      const filmData = films.find((item)=> item.id === el.id);
      return (<RenderMovieInfo movie={filmData}/>)
     })} 
    </div>
    
    
  )
}
