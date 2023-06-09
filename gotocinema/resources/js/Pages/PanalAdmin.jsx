import ManagingHolls from '@/Components/AdminC/ManagingHolls'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function PanalAdmin() {
  const headers = Array.from(document.querySelectorAll('.conf-step__header'));
  headers.forEach(header => header.addEventListener('click', () => {
    header.classList.toggle('conf-step__header_closed');
    header.classList.toggle('conf-step__header_opened');
  }));
  return (
    <>
      <Head title='идемВкино | админпанель'/>
      <div className='body_admin'>
       <ApplicationLogo/>
       <main className='conf-steps'>
        <ManagingHolls/>
      </main>
      </div>
      
    </>
    
  )
}
