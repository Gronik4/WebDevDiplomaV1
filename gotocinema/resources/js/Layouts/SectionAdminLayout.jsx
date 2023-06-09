import Popup from '@/Components/AdminC/Popup';
import React from 'react'

export default function SectionAdminLayout({ children, headerName }) {
  let flag = 0;
  const flag1 = 'hd'
  switch(headerName) {
    case 'Управление залами':
      flag = 1;
      break;
    case 'Сетка сеансов':
      flag = 2;
      break;
    default: flag = 0; break;
  }
  return (
    <section className='conf-step'>
      <header className='conf-step__header conf-step__header_opened'>
        <h2 className='conf-step__title'>{headerName}</h2>
      </header>
      <div className='conf-step__wrapper'>
        {children}
      </div>
      { flag? <Popup flag={flag}/>: null }
      { flag === 1? <Popup flag={flag1}/>: null }
    </section>
  )
}
