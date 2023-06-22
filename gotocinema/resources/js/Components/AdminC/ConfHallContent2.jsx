import React, { useEffect } from 'react';

export default function ConfHallContent2({ rows, columns, receivedСonfig }) {

  const savedConfig = receivedСonfig? JSON.parse(JSON.parse(receivedСonfig).config):null;
  const explanation = savedConfig? 'Редактирование сохранённой конфигурации': 'Создание новой конфигурации';

  useEffect(()=> { // Всё это делается после рендера компонента, т.к. из json-а данные приходят без 'onclick'.
    if(savedConfig) {
      document.querySelectorAll('.conf-step__chair').forEach((el)=> {
        el.addEventListener('click', statusChair);
      })
    }
  })
  const statusChair = (e)=> {
    let status = e.target;
    switch(status.className) {
      case 'conf-step__chair conf-step__chair_disabled':
        status.className = 'conf-step__chair conf-step__chair_standart';
        break;
      case 'conf-step__chair conf-step__chair_standart':
        status.className = 'conf-step__chair conf-step__chair_vip';
        break;
      case 'conf-step__chair conf-step__chair_vip':
        status.className = 'conf-step__chair conf-step__chair_disabled';
        break;
    }
  }
  const newConfig = ()=> {
    let row = rows? rows: 3;
    let column = columns? columns: 5;
    const content = [];
    
    for (let j = 1; j <= row; j++) {
      const contentRow = [];
      for (let i = 1; i <= column; i++) {
        let id = `${j}`+`${i}`;
        let getRow = <span key={id} className="conf-step__chair conf-step__chair_standart" id={id} onClick={statusChair}></span>
        contentRow.push(getRow);
      }
      content.push(contentRow);
    }
    return content;
  }
  

  return (
    <>
    <p className='conf-step__paragraph'>{explanation}</p>
      <div className='conf-step__hall'>
        <div className='conf-step__hall-wrapper'>
        
          {savedConfig? 
            <>
              <div dangerouslySetInnerHTML={{__html: savedConfig}}></div>
            </>:
            newConfig().map((row, index)=> {
              return (
                <div className='conf-step__row' key={index}>
                  {row}
                </div> 
              )
            })
          }
        </div>
      </div>
    </>
  )
}
