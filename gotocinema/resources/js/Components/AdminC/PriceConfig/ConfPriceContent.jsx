import React, { useState } from 'react'

export default function ConfPriceContent({ savePrices, onParamOrder, onParamVip, newPrices }) {
  
  let sizeO, sizeV;
  const { ordinary, vip } = savePrices;
  const order = ordinary? ordinary: 'неизвестна';
  const Pvip = vip? vip: 'неизвестна';
  const { newOrd, newV } = newPrices;
  /*const [orderP, setOrderP] = useState('');
  const [vipP, setVipP] = useState('');
  setOrderP('');
  setVipP('');*/
  const sizeOrder = (e)=> {
    sizeO = e.target.value;
    onParamOrder(sizeO);
  }

  const sizeVip = (e)=>{
    sizeV = e.target.value;
    onParamVip(sizeV);
  }

  return (
    <>
      <div className="conf-step__legend">
        <label className="conf-step__label">Цена, рублей
          <input
            type="text"
            className="conf-step__input"
            style={{fontSize: '1.4rem'}}
            name='price_ordinary'
            autoComplete={order}
            autoFocus = {true}
            value={newOrd}
            placeholder={order}
            onChange={sizeOrder}
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
            autoComplete={Pvip}
            value={newV}
            placeholder={Pvip}
            onChange={sizeVip}
            required={true}
          />
        </label>за <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
      </div>
    </>
  )
}
