import SectionAdminLayout from '@/Layouts/SectionAdminLayout'
import React from 'react'
import getFlags from './srevces/managingFlags';

export default function ManagingHolls({ datas }) {
  const headerName='Управление залами';
  const flags = getFlags(headerName);

  //console.log(datas);
  
  const deleteHall = (e)=> {
    e.preventDefault();
    const popup =  document.getElementById(flags.del);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
    console.log(popup);
    alert('Delete hall??');
  }

  const showpopup = (e)=> {
    e.preventDefault();
    const popup = document.getElementById(flags.add);
    if(popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = '';
    }
  }
  const ulContent = 
    datas?
      datas.map((hall)=> {
        return (
          <li key={hall.id} id={hall.id}>{hall.name}
            <button className='conf-step__button conf-step__button-trash' onClick={deleteHall}></button>
          </li>
        )
      }):<p className='conf-step__paragraph'>Пока нет доступных залов</p>;

 
  return (
    <SectionAdminLayout headerName={headerName} flags={flags}>
      <p className='conf-step__paragraph'>Доступные залы:</p>
      <ul className='conf-step__list'>
        {ulContent}
      </ul>
      <button className='conf-step__button conf-step__button-accent' onClick={showpopup}>Создать зал</button>
    </SectionAdminLayout>
  )
}
