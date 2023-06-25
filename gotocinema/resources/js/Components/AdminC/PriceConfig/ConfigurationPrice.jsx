import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import AvailableHalls from '../AvailableHalls';
import ConfPriceContent from './ConfPriceContent';

export default function ConfigurationPrice({ datas }) {
  const headerName='Конфигурация цен';
  const { data, setData, patch, processing, errors } = useForm({ordinary: '', vip: ''});
  const [chosenHallName, setChosenHallName] = useState('');
  const [chosenHall, setChosenHall] = useState('');
  const [newPrice, setNewPrice] = useState({newOrd: '', newV: ''});

  if(errors.price_vip) { alert(`Упс! Что-то пошло не так!\n Ошибка: ${errors.price_vip}`);}
  if(errors.price_ordinary) { alert(`Упс! Что-то пошло не так!\n Ошибка: ${errors.price_ordinary}`);}

  const handlerPrice = (e)=> {
    const chosen = e.target;
    const selId = Number(chosen.id);
    setChosenHallName(chosen.value);
    const select = datas.find(item=> item.id == selId)? datas.find(item=> item.id == selId): '';
    setData({ordinary: select.price_ordinary, vip: select.price_vip});
    setChosenHall(select);
  }

  const priceOrd = (ord)=> setNewPrice({newOrd: ord});
  const priceV = (vip)=> setNewPrice({newV: vip})

  const reset = (e)=> {
    e.preventDefault();
    /*const form = document.forms.changePrice;
    form.price_ordinary.value = '';
    form.price_vip.value = '';*/
    setData({ordinary: chosenHall.price_ordinary, vip: chosenHall.price_vip});
  }

  const updating = (e)=> {
    e.preventDefault();
    const form = document.forms.changePrice;
    console.log(form.price_ordinary.value);
    console.log(form.price_vip.value)
  }

  return (
    <SectionAdminLayout headerName={headerName} flags='' nameHall='' idHall=''>
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        <AvailableHalls data={datas} handlerName={handlerPrice}/>:
      </ul>
      {chosenHallName?
        <>
          <p className="conf-step__paragraph">Установите цены для типов кресел зала {chosenHallName}</p>
          <form name='changePrice' onSubmit={updating}>
            <ConfPriceContent
              savePrices={data}
              onParamOrder={(ord)=>priceOrd(ord)}
              onParamVip={(vip)=> priceV(vip)}
              newPrices={newPrice}
              />
            <fieldset className="conf-step__buttons text-center">
              <button className="conf-step__button conf-step__button-regular" onClick={reset}>Отмена</button>
              <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" disabled={processing}/>
            </fieldset> 
          </form>
        </>
        :
        <p className='conf-step__paragraph'>Зал не выбран</p>}
    </SectionAdminLayout> 
  )
}

