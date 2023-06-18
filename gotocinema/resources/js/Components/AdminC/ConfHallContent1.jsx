import React from 'react'

export default function ConfHallContent1({ setR, setC, name, onParamRow, onParamColumn }) {
  let rows, columns;

  const numberRows = (e)=> {
    rows = Number(e.target.value);
    onParamRow(rows);
  }

  const numberColumns = (e)=> {
    columns = Number(e.target.value);
    onParamColumn(columns);
  }

  let content = name?
  <>
  <p className='conf-step__paragraph'>Для зала {name} укажите количество рядов и максимальное количество кресел в ряду:</p>
  <div className="conf-step__legend">
      <label className="conf-step__label">Рядов, шт
        <input type="text" className="conf-step__input" placeholder="10" value={setR} onChange={numberRows}/>
      </label>
      <span className="multiplier">x</span>
      <label className="conf-step__label">Мест, шт
        <input type="text" className="conf-step__input" placeholder="8" value={setC} onChange={numberColumns}/>
      </label>
  </div>
  <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала {name}:</p>
    <div className="conf-step__legend">
      <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
      <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
      <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
      <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
    </div>
  </>:<p className='conf-step__paragraph'>Зал не выбран</p>;
  
  return content;
}
