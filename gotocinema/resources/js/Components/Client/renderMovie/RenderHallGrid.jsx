import React from 'react'
import RenderSeance from './RenderSeance';

export default function RenderHallGrid({datas, dat}) {
  return (
    <>
      {datas.map((el, index)=> {
        return (
          <div className='movie-seances__hall' key={index}>
            <h3 className="movie-seances__hall-title">{el.namehall}</h3>
            <RenderSeance times={el.seanses} dat={dat}/>
          </div>
        ) 
      })}
    </>
  )
}
