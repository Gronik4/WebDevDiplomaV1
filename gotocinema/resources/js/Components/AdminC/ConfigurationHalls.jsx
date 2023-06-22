import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useEffect, useState } from 'react'
import ConfHallContent1 from './ConfHallContent1';
import ConfHallContent2 from './ConfHallContent2';
import { useForm } from '@inertiajs/react';
import InputError from '../InputError';

export default function ConfigurationHalls({ datas }) {
  
  const headerName='Конфигурация залов';
  const { data, setData, patch, processing, errors } = useForm({name: ''});
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [chosenHallName, setChosenHallName] = useState('');
  const [config, setConfig] = useState('');
  const [hallId, setHallId] = useState(null);

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
  const paramRow = (getRow)=> { setRows(getRow);}
  const paramColumn = (getColumn)=> { setColumns(getColumn);}

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
    const hallConfig = document.querySelector('.conf-step__hall-wrapper').innerHTML;
    const jsonData = JSON.stringify(hallConfig);
    const form = document.forms.update;
    form.config.value = jsonData;
    patch(route('halls.update', {hall: hallId, config: jsonData}));
    reset();
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
          <ConfHallContent2 rows={rows} columns={columns} receivedСonfig={config}/>
          <fieldset className="conf-step__buttons text-center">
            <InputError message={errors.config} className='onf-step__paragraph' style={{color: 'red', fontSize: '1.5rem'}}/>
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
