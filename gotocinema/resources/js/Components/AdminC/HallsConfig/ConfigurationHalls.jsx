import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import ConfHallContent1 from './ConfHallContent1';
import ConfHallContent2 from './ConfHallContent2';
import { useForm } from '@inertiajs/react';
import InputError from '../../InputError';
import AvailableHalls from './AvailableHalls';

export default function ConfigurationHalls({ datas }) {
  
  const headerName='Конфигурация залов';
  const { data, setData, patch, processing, errors } = useForm({name: ''});
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [chosenHallName, setChosenHallName] = useState('');
  const [config, setConfig] = useState('');
  const [hallId, setHallId] = useState(null);

  if(errors.config) { alert(`Упс! Что-то пошло не так!\n Ошибка: ${errors.config}`);}

  const chosenHall = (e)=> {
    const chosen = e.target;
    const selId = Number(chosen.id);
    setHallId(selId);
    setRows('');
    setColumns('');
    setChosenHallName(chosen.value);
    const select = datas.find(item=> item.id == selId)? datas.find(item=> item.id == selId): '';
    setConfig(select.config);
  }
  const paramRow = (getRow)=> { setRows(getRow); setConfig('');}
  const paramColumn = (getColumn)=> { setColumns(getColumn); setConfig('');}

  const reset = (e)=> {
    e.preventDefault();
    setRows('');
    setColumns('');
    setData('config', '');
    const wrapper = document.querySelector('.conf-step__hall-wrapper');
    const places = wrapper.querySelectorAll('.conf-step__chair');
    places.forEach((item)=> {
      item.className = 'conf-step__chair conf-step__chair_standart';
    })
  }
  
  const updating = (e)=> {
    e.preventDefault();
    const blank = document.querySelector('.dangerous');
    const hallConfig = blank? blank.innerHTML: document.querySelector('.conf-step__hall-wrapper').innerHTML;
    const jsonData = JSON.stringify(hallConfig);
    patch(route('halls.update', {hall: hallId, config: jsonData}));
  }

  return (
    <SectionAdminLayout headerName={headerName} flags='' nameHall='' idHall=''>
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        <AvailableHalls data={datas} handlerName={chosenHall}/>
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
          <ConfHallContent2 rows={rows} columns={columns} receivedСonfig={config}/>
          <fieldset className="conf-step__buttons text-center">
            <form name='update' onSubmit={updating}>
              <input name='config' type='hidden' />
              <button type='reset' className="conf-step__button conf-step__button-regular" onClick={reset}>Отмена</button>
              <input type="submit" value="Сохранить" disabled={processing} className="conf-step__button conf-step__button-accent"/>
            </form> 
          </fieldset>
        </>
      : null} 
    </SectionAdminLayout>
  )
}
