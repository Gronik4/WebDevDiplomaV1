import SectionAdminLayout from '@/Layouts/SectionAdminLayout'
import React, { useState } from 'react'
import getFlags from './srevces/managingFlags';

export default function ManagingHolls({ datas }) {
  const headerName='Управление залами';
  const flags = getFlags(headerName);
  const [nameHall, setNameHall] = useState('');
  const [idHall, setIdHall] = useState(''); 
  
  const showPopupDelHall = (e)=> {
    e.preventDefault();
    const li = e.target.closest('.li_info');
    const popup =  document.getElementById(flags.del);
    if(popup.style.display === '') {
      popup.style.display = 'block';
      setIdHall(li.id);
      setNameHall(li.textContent) ;
    } else {
      setIdHall('');
      setNameHall('') ;
      popup.style.display = '';
    }
  }

  const showPopupAddlHall = (e)=> {
    e.preventDefault();
    const popup = document.getElementById(flags.add);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
    console.log(popup);
  }
  const ulContent = 
    datas?
      datas.map((hall)=> {
        return (
          <li className='li_info' key={hall.id} id={hall.id}>{hall.name}
            <button className='conf-step__button conf-step__button-trash' onClick={showPopupDelHall}></button>
          </li>
        )
      }):<p className='conf-step__paragraph'>Пока нет доступных залов</p>;

 
  return (
    <SectionAdminLayout headerName={headerName} flags={flags} nameHall={nameHall} idHall={idHall}>
      <p className='conf-step__paragraph'>Доступные залы:</p>
      <ul className='conf-step__list'>
        {ulContent}
      </ul>
      <button className='conf-step__button conf-step__button-accent' onClick={showPopupAddlHall}>Создать зал</button>
    </SectionAdminLayout>
  )
}
