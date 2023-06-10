import React from 'react';
import close from '../../../../public/img/close.png';
import popupSercvic from './srevces/popupSercvic';

export default function Popup({flag}) {
  const showPopup = document.querySelector('.popup');
  let inputData, styleWrapper, styleContent;
  const { popupName, formAction, formMethod, nameButton, data } = popupSercvic(flag);

  const submit = (e)=> {
    alert('Тут надо писать в БД');
    /*  или удалять*/
  }

  const reset = (e)=> {
    alert('А тут надо очищать инпут'); 
    /* А тут надо очищать инпут*/
  }

  const hiddPopup = ()=> { showPopup.style.display = ''; }

  if(data.length>1){
    styleWrapper = {paddingLeft: '12px',  paddingRight: '12px', overflow: 'auto', height: '480px'};
    styleContent = {top: '-70vh'};
    inputData =data.map((item, index)=> {
      return (
        <label key={index} className='conf-step__label conf-step__label-fullsize' htmlFor={item.name}>
          {item.nameInput}
          <input className='conf-step__input' name={item.name} placeholder={item.placeholder} required/>
        </label>  
      )
    })
  }
  
  return (
    <div className='popup'>
     <div className='popup__container'>
      <div className='popup__content' style={styleContent}>
        <div className='popup__header'>
          <h2 className='popup__title'>{popupName}
            <a onClick={hiddPopup} className='popup__dismiss' href='#'><img src={close}/></a>
          </h2>
        </div>
        <div className='popup__wrapper' style={styleWrapper}>
          <form action={formAction} method={formMethod} acceptCharset='utf-8'> 
            {data.length?
              data.length ===1?
                <label className='conf-step__label conf-step__label-fullsize' htmlFor={data[0].name}>
                  {data[0].nameInput}
                  <input className='conf-step__input' name={data[0].name} placeholder={data[0].placeholder} required/>
                </label> :
                inputData:
              <p className='conf-step__paragraph'>Вы действительно хотите удалить зал <span
                /* В span подставить название зала*/
              ></span>?</p>
            }
            <div className='conf-step__buttons text-center'>
              <input type='submit' value={nameButton} className='conf-step__button conf-step__button-accent' onClick={submit}/>
              <button type='reset' className='conf-step__button conf-step__button-regular' onClick={reset}>Отменить</button>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}
