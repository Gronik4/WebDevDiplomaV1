import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'

export default function ConfPriceContent({ hallData }) {
  
  const { id, hallOrder, hallVip } = hallData;
  const orderP = hallOrder? hallOrder: 'Пусто';
  const vipP = hallVip? hallVip: 'Пусто'; 
  const { data, setData, patch, clearErrors, reset, processing, errors, onSuc} = useForm({price_ordinary: '', price_vip: ''});

  if(errors.price_vip) { alert(`Упс! Что-то пошло не так!\n Ошибка: ${errors.price_vip}`);}
  if(errors.price_ordinary) { alert(`Упс! Что-то пошло не так!\n Ошибка: ${errors.price_ordinary}`);}

  const submit = (e)=> {
    e.preventDefault();
    patch(route('halls.update', id, {o:()=>{console.log('All right!!')}}));
    reset();
  }

  const clear = (e) => {
    e.preventDefault();
    reset();
    clearErrors();
  }

  return (
    <form name='changePrice' onSubmit={submit}>
      <div className="conf-step__legend">
        <label className="conf-step__label">Цена, рублей
          <input
            type="text"
            className="conf-step__input"
            style={{fontSize: '1.4rem'}}
            name='price_ordinary'
            autoComplete={orderP}
            autoFocus = {true}
            value={data.price_ordinary}
            placeholder={orderP}
            onChange={e=> setData('price_ordinary', Number(e.target.value))}
            required={true}
          />
        </label>за <span className="conf-step__chair conf-step__chair_standart"></span> обычные кресла
      </div>  
      <div className="conf-step__legend">
        <label className="conf-step__label">Цена, рублей
          <input
            type="text"
            className="conf-step__input"
            style={{fontSize: '1.4rem'}}
            name='price_vip'
            autoComplete={vipP}
            value={data.price_vip}
            placeholder={vipP}
            onChange={e=> setData('price_vip', Number(e.target.value))}
            required={true}
          />
        </label>за <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
      </div>
      <InputError message={errors.message} className="mt-2" />
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={clear}>Отмена</button>
        <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" disabled={processing}/>
      </fieldset> 
    </form>
  )
}
