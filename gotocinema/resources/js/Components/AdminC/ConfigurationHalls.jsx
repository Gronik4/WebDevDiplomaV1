import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import ConfHallContent1 from './ConfHallContent1';
import ConfHallContent2 from './ConfHallContent2';

export default function ConfigurationHalls({ datas }) {
  const headerName='Конфигурация залов';
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [chosenHallName, setChosenHallName] = useState('');
  const [config, setConfig] = useState('');
  //const [test, setTest] = useState();
  let hallId ;

  const chosenHall = (e)=> {
    const chosen = e.target;
    hallId = Number(chosen.id);
    setChosenHallName(chosen.value);
    const select = datas.find(item=> item.id == hallId);
    setConfig(select.config);
  }
  const paramRow = (getRow)=> { setRows(getRow);}
  const paramColumn = (getColumn)=> { setColumns(getColumn);}

  const reset = ()=> {
    setRows('');
    setColumns('');
    const wrapper = document.querySelector('.conf-step__hall-wrapper');
    const places = wrapper.querySelectorAll('.conf-step__chair');
    places.forEach((item)=> {
      item.className = 'conf-step__chair conf-step__chair_standart';
    })
  }
  const updating = (e)=> {
    const hallConfig = document.querySelector('.conf-step__hall-wrapper').innerHTML;
    //console.log(hallConfig);
    const jsonData = JSON.stringify(hallConfig);
    setConfig(jsonData);
    //console.log(jsonDataTest);
  }

  const AvailableHalls = datas?
    datas.map((hall)=> {
      return (
        <li className='li_info' key={hall.id}>
          <input type="radio" className="conf-step__radio" name="chairs-hall" id={hall.id} value={hall.name} onChange={chosenHall}/>
            <span className="conf-step__selector">{hall.name}</span>
        </li>
      )
    }):<p className='conf-step__paragraph'>Пока нет доступных залов</p>;

  return (
    <SectionAdminLayout headerName={headerName} flags='' nameHall='' idHall=''>
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        {AvailableHalls}
      </ul>
      <ConfHallContent1
        setR={rows}
        setC={columns}
        name={chosenHallName}
        onParamRow={(getRow)=> paramRow(getRow)}
        onParamColumn={(getColumn)=> paramColumn(getColumn)}
      />
      {chosenHallName?
        <>
          <ConfHallContent2 rows={rows} columns={columns} config={config}/>
          <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={reset}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={updating}/>
          </fieldset>
        </>
      : null} 
    </SectionAdminLayout>
  )
}
