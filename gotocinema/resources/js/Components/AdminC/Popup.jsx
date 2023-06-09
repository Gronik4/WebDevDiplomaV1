import React from 'react';
import close from '../../../../public/img/close.png';

export default function Popup({flag}) {
  const showPopup = document.querySelector('.popup');
  let popupName, formAction, formMethod, nameButton;
  let data = [];

  const submit = (e)=> {
    /* Тут надо писать в БД или удалять*/
  }

  const reset = (e)=> {
     e.prevent.Default();
    /* А тут надо очищать инпут*/
  }

  const hiddPopup = ()=> { showPopup.style.display = ''; }

  switch(flag) {
    case 1:
      popupName = 'Добавление зала';
      formAction = 'add_hall';
      formMethod = 'post';
      nameButton = 'Добавить зал';
      data = ['name', 'Название зала', 'Например: Зал 1',];
      /* React ругается на примение объекта требует массив. Даю ему массив в такой форме:
            [0]->name: 'name', [1]->nameInput: 'Название зала', [2]->placeholder: 'Например, &laquo;Зал 1&raquo;'
      */
      break;
    case 2:
      popupName = 'Добавление фильма';
      formAction = 'add_movie';
      formMethod = 'post';
      nameButton = 'Добавить фильм';
      data.push({name: 'name', nameInput: 'Название фильма', placeholder: 'Например, &laquo;Гражданин Кейн&raquo;'});
      data.push({name: 'desc', nameInput: 'Описание фильма', placeholder: 'Краткое описание сюжета'});
      data.push({name: 'genre', nameInput: 'Жанр фильма', placeholder: 'Например, боевик'});
      data.push({name: 'creators', nameInput: 'Страна создатель', placeholder: 'Например,Россия'});
      data.push({name: 'realise', nameInput: 'Год выпуска в прокат', placeholder: 'Например, 2022'});
      data.push({name: 'duration', nameInput: 'Продолжительность', placeholder: 'Например, 120 мин'});
      data.push({name: 'posterMain', nameInput: 'Картинка на главную. Размер:246Х348px', placeholder: ''});
      data.push({name: 'posterAd', nameInput: 'Картинка в админпанель. Размер: 78Х104px', placeholder: ''});
      break;
    case 'hd':
      popupName = 'Удаление зала';
      formAction = 'delete_hall';
      formMethod = 'post';
      nameButton = 'Удалить';
      break;
    default: null;
  }
  const a = Array.isArray(data);
  console.log(Array.isArray(data));
  console.log(data);
  //console.log(data[0][1]);
  return (
    <div className='popup'>
     <div className='popup__container'>
      <div className='popup__content'>
        <div className='popup__header'>
          <h2 className='popup__title'>{popupName}
            <a onClick={hiddPopup} className='popup__dismiss' href='#'><img src={close}/></a>
          </h2>
        </div>
        <div className='popup__wrapper'>
          <form action={formAction} method={formMethod} acceptCharset='utf-8'>   
          <p className='conf-step__paragraph'>data.lendth = {a}</p>
            {data.length? 
              data.map((item)=> {
                <label key={item[0]} className='conf-step__label conf-step__label-fullsize' for={item[0]}>
                  {item[1]}
                  <input className='conf-step__input' name={item.name} placeholder={item[2]} required/>
                </label>
              }):
              <p className='conf-step__paragraph'>Вы действительно хотите удалить зал <span></span>?</p>
              /* В span подставить название зала*/
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
