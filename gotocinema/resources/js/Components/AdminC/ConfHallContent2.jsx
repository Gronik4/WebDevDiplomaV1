import React from 'react'

export default function ConfHallContent2({ rows, columns }) {
  const statusChair = (e)=> {
    let status = e.target.className;
    console.log(status);
  }
  let row = rows? rows: 10;
  let column = columns? columns: 8;
  const content = [];
  
  for (let j = 1; j <= row; j++) {
    const contentRow = [];
    for (let i = 1; i <= column; i++) {
      let id = `${j}`+`${i}`;
      let getRow = <span key={id} className="conf-step__chair conf-step__chair_disabled" id={id} onClick={statusChair}></span>
      contentRow.push(getRow);
    }
    content.push(contentRow);
  }

  return (
    <div className='conf-step__hall'>
      <div className='conf-step__hall-wrapper'>
      {content.map((row, index)=> {
          return (
            <div className='conf-step__row' key={index}>
              {row}
            </div> 
          )
        })}
      </div>
    </div>
  )
}
