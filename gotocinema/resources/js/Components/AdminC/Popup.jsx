import React from 'react';
import close from '../../../../public/img/close.png';
import popupSercvic from './srevces/popupSercvic';
import { useForm } from '@inertiajs/react';
import InputError from '../InputError';
import { nanoid } from 'nanoid';

export default function Popup({flag, idp, nameHall, idHall}) {
  let inputData, styleWrapper, styleContent;
  const { popupName, nameButton, datasInput } = popupSercvic(flag);
  const { data, setData, post, patch, delete:destroy, processing, errors } = useForm({name: ''});

  const hiddPopup = (e)=> {
    const del = e.target.closest('.popup');
    del.style.display = ''; 
  }

  const reset = ()=> {
    const field = document.querySelectorAll('.conf-step__input');
    field.forEach(el=> {
      el.value = '';
      setData(el.name, '');
    })
  }

  const submit = (e)=> {
    e.preventDefault();
    post(route('halls.store'));
  }
  
  const deleteHall = (e)=> {
    e.preventDefault();
    destroy(route('halls.destroy', {hall: idHall}));
  }

  if(datasInput.length>1){
    styleWrapper = {paddingLeft: '12px',  paddingRight: '12px', overflow: 'auto', height: '480px'};
    styleContent = {top: '-70vh'};
    inputData =datasInput.map((item, index)=> {
      return (
        <div>
          <label key={index} className='conf-step__label conf-step__label-fullsize' htmlFor={item.name}>
            {item.nameInput}
            <input
              id={nanoid(5)}
              className='conf-step__input'
              name={item.name}
              value={data[datasInput[0].name]}
              autoComplete={item.name}
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
          {idp === 'addHall'?
            <form onSubmit={submit}> 
              {datasInput.length ===1?
                <div>
                  <label className='conf-step__label conf-step__label-fullsize' htmlFor={datasInput[0].name}>
                    {datasInput[0].nameInput}
                    <input
                      id={nanoid(5)}
                      className='conf-step__input'
                      name={datasInput[0].name}
                      value={data[datasInput[0].name]}
                      autoComplete={datasInput[0].name}
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
                <button type='reset' className='conf-step__button conf-step__button-regular' onClick={reset}>Отменить</button>
              </div>
            </form>:

            <form onSubmit={deleteHall}>
              <p className='conf-step__paragraph'>Вы действительно хотите удалить зал <span>{nameHall}</span>
                с id=<span>{idHall}</span>?</p>
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
