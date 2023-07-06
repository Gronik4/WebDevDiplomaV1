import React from 'react';
import close from '../../../../public/img/close.png';
import popupService from './srevces/popupServic';
import { useForm } from '@inertiajs/react';
import InputError from '../InputError';

export default function Popup({flag, idp, nameEl, idEl}) {
  
  let inputData, styleWrapper, styleContent;
  const nameElement = idp === 'deleteHall'? 'зал': 'фильм';
  const { popupName, nameButton, datasInput } = popupService(flag);
  const { data, setData, post, delete:destroy, processing, errors, reset } = useForm({
    name: '', desc: '',	genre: '', creators: '',	realise: '',	duration: '',	posterMain: '',	posterAd: ''
  });

  const hiddPopup = (e)=> {
    const del = e.target.closest('.popup');
    del.style.display = ''; 
  }

  const resetForm = ()=> {
    reset();
  }

  const submit = (e)=> {
    e.preventDefault();
    if(idp === 'addHall') { post(route('halls.store')); }
    if(idp === 'addFilm') { post(route('films.store')); }
    reset();
    hiddPopup(e);
  }
  
  const deleteHall = (e)=> {
    e.preventDefault();
    if(idp === 'deleteHall') {destroy(route('halls.destroy', {hall: idEl}));}
    if(idp === 'deleteFilm') {destroy(route('films.destroy', {film: idEl}));}
    hiddPopup(e);
  }

  if(datasInput.length>1){
    styleWrapper = {paddingLeft: '12px',  paddingRight: '12px', overflow: 'auto', height: '480px'};
    styleContent = {top:'-90vh'};
    inputData =datasInput.map((item, index)=> {
      return (
        <div key={index}>
          <label className='conf-step__label conf-step__label-fullsize' htmlFor={item.name}>
            {item.nameInput}
            <input
              className='conf-step__input'
              name={item.name}
              value={data[item.name]}
              autoComplete={data[item.name]}
              placeholder={item.placeholder}
              onChange={(e)=> setData(item.name, e.target.value)}
              required={true}
            />
        </label>
        <InputError message={errors[item.name]} className="mt-2" />
        </div>   
      )
    })
  }
  
  return (
    <div className='popup' id={idp}>
     <div className='popup__container'>
      <div className='popup__content' style={styleContent}>
        <div className='popup__header'>
          <h2 className='popup__title'>{popupName}
            <a onClick={hiddPopup} className='popup__dismiss' href='#'><img src={close}/></a>
          </h2>
        </div>
        <div className='popup__wrapper' style={styleWrapper}>
          {datasInput != 0?
            <form onSubmit={submit}> 
              {datasInput.length ===1?
                <div>
                  <label className='conf-step__label conf-step__label-fullsize' htmlFor={datasInput[0].name}>
                    {datasInput[0].nameInput}
                    <input
                      className='conf-step__input'
                      name={datasInput[0].name}
                      value={data[datasInput[0].name]}
                      autoComplete={data[datasInput[0].name]}
                      isfocused='true'
                      onChange={(e)=> setData(datasInput[0].name, e.target.value)}
                      placeholder={datasInput[0].placeholder}
                      required
                    />
                  </label>
                  <InputError message={errors[datasInput[0].name]} className="mt-2" />
                </div>
                :
                inputData
              } 
              <div className='conf-step__buttons text-center'>
                <input type='submit' value={nameButton} disabled={processing} className='conf-step__button conf-step__button-accent'/>
                <button type='reset' className='conf-step__button conf-step__button-regular' onClick={resetForm}>Отменить</button>
              </div>
            </form>:

            <form onSubmit={deleteHall}>
              <p className='conf-step__paragraph'>Вы действительно хотите удалить {nameElement} <span> {nameEl} </span>
                с id=<span>{idEl}</span>?</p>
              <div className='conf-step__buttons text-center'>
                <input type='submit' value={nameButton} disabled={processing} className='conf-step__button conf-step__button-accent'/>
              </div>
            </form>
          } 
        </div>
      </div>
     </div>
    </div>
  )
}
