import SectionAdminLayout from '@/Layouts/SectionAdminLayout'
import React from 'react'

export default function ManagingHolls({ datas }) {
  console.log(datas);
  const showPopup = document.querySelector('.popup');
  
  const deleteHall = (e)=> {
    e.preventDefault();
    alert('Delete hall??');
  }

  const addHall = (e)=> {
    e.preventDefault();
    if(showPopup.style.display === '') {
      showPopup.style.display = 'block';
    } else {
      showPopup.style.display = 'none';
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
    <SectionAdminLayout headerName='Управление залами'>
      <p className='conf-step__paragraph'>Доступные залы:</p>
      <ul className='conf-step__list'>
        {ulContent}
      </ul>
      <button className='conf-step__button conf-step__button-accent' onClick={addHall}>Создать зал</button>
    </SectionAdminLayout>
  )
}
