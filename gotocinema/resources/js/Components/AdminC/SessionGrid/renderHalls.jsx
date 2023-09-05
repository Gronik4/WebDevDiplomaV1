import React, { useEffect, useState } from 'react';
import changeTension from './serviceSG/changeTension';
import testTension from './serviceSG/testTension';
import LoadingMovies from './LoadingMovies';

export default function RenderHalls({ name, id, schedule, datas }) {

  const [tension, setTension] = useState(schedule[id]);
  useEffect(()=> setTension(schedule[id]),[schedule]);

  function hendlerDEnd() {;
    const satellite = changeTension(0, tension, 'del');
    setTension(satellite);
  }

  function cleanerHall() {
    setTension([]);
    document.getElementById(id).style =  'background: ';
  }

  function hendlerDragOver(e) {
    e.preventDefault();
    
    if(e.target.className === 'conf-step__seances-timeline') {
      e.target.style = 'background: #8ADEE9';
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = '3px dashed red';
    }
  }

  function hendlerDragLeave(e) {
    e.preventDefault();
    if(e.target.className === 'conf-step__seances-timeline') {
      e.currentTarget.style = 'background: ';
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = 'none';
    }
  }

  function hendlerDrop(e) {
    const takenId = document.querySelector('.taken').id;
    const pass = testTension(tension, datas, takenId);
    if(e.target.className === 'conf-step__seances-timeline') {
      e.currentTarget.style.background = '';
      if(pass) {
        const satellite = changeTension(0, tension, 'addend');
        setTension(satellite);
      } else { return; }
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = 'none';
      if(pass) {
        const satellite =  changeTension(upper.id, tension, 'add');
        setTension(satellite);
      } else { return; } 
    } 
  }

  return (
   <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div
        className='conf-step__seances-timeline'
        id={id}
        onDragOver={(evn)=> hendlerDragOver(evn)}
        onDrop={(e)=> hendlerDrop(e)}
        onDragLeave={(e)=> hendlerDragLeave(e)}
      >
        <LoadingMovies tension={tension} datas={datas} onDelFilm={()=> hendlerDEnd()}/>
      </div>
      <button
        type='reset'
        className='conf-step__button clearing-hall' 
        onClick={()=> cleanerHall()}
        >Очистить сетку зала {name}</button>
    </div>
  )
}
