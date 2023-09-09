import React, { useContext, useEffect, useState } from 'react';
import changeTension from './serviceSG/changeTension';
import testTension from './serviceSG/testTension';
import LoadingMovies from './LoadingMovies';
import { ASContext } from '@/Pages/PanelAdmin';
import sgHandlerCondor from './serviceSG/sgHandlerCondor';

export default function RenderHalls({ name, id, schedule, datas }) {

  const {conder,setConder} = useContext(ASContext);
  const sign = sgHandlerCondor(conder);
  const [tension, setTension] = useState(schedule[id]);
  useEffect(()=> setTension(schedule[id]),[schedule]);

  function hendlerDEnd() {
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
    if(conder == '02'){setConder('00'); }
    
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
   <div className='conf-step__seances-hall' key={id} id={id} style={{margin: '3px 35px', fontSize: '1.4rem'}}>
      <h4 className='conf-step__seances-title'>{name}</h4>
      <div
        className='conf-step__seances-timeline'
        id={id}
        onDragOver={sign == 'show'? (evn)=> hendlerDragOver(evn): ()=>false}
        onDrop={sign == 'show'? (e)=> hendlerDrop(e): ()=>false}
        onDragLeave={sign == 'show'? (e)=> hendlerDragLeave(e): ()=>false}
      >
        <LoadingMovies tension={tension} datas={datas} onDelFilm={()=> hendlerDEnd()} sign={sign}/>
      </div>
      <button
        type='reset'
        className='conf-step__button clearing-hall' 
        onClick={sign == 'show'? ()=> cleanerHall(): ()=>false}
        >Очистить сетку зала {name}</button>
    </div>
  )
}
