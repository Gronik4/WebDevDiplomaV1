import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React, { useState } from 'react'
import AvailableHalls from '../HallsConfig/AvailableHalls';
import ConfPriceContent from './ConfPriceContent';

export default function ConfigurationPrice({ datas }) {

  const headerName='Конфигурация цен';
  const [chosenHallName, setChosenHallName] = useState('');
  const [hallDatas, setHallDatas] = useState({id: '', hallOrder: '', hallVip: ''})

  const handlerPrice = (e)=> {
    const chosen = e.target;
    const selId = Number(chosen.id); 
    const select = datas.find(item=> item.id == selId)? datas.find(item=> item.id == selId): '';
    setHallDatas({id: selId, hallOrder: select.price_ordinary, hallVip: select.price_vip});
    setChosenHallName(chosen.value);
  }

  return (
    <SectionAdminLayout headerName={headerName} flags='' nameHall='' idHall=''>
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        <AvailableHalls data={datas} handlerName={handlerPrice}/>:
      </ul>
      {chosenHallName?
        <>
          <p className="conf-step__paragraph">Установите цены для типов кресел зала {chosenHallName}:</p>
          <ConfPriceContent hallData={hallDatas}/>
        </>
        :
        <p className='conf-step__paragraph'>Зал не выбран</p>}
    </SectionAdminLayout> 
  )
}

