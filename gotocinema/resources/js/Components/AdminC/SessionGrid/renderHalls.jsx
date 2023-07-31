import React, { useState } from 'react'

export default function renderHalls({ name, id, schedule, datas }) {

  const [tension, setTension] = useState(schedule[id+'hg']);

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
      } else {
        return;
      }
    }
    if(e.target.dataset.tag === 'film') {
      const upper = e.target.closest('.conf-step__seances-movie');
      upper.style.border = 'none';
      if(pass) {
        const satellite =  changeTension(upper.id, tension, 'add');
        setTension(satellite);
      } else {return;} 
    } 
  }
  return (
    <div>
      
    </div>
  )
}
