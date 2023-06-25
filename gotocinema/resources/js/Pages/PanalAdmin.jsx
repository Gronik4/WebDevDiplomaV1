import ConfigurationHalls from '@/Components/AdminC/HallsConfig/ConfigurationHalls';
import ConfigurationPrice from '@/Components/AdminC/PriceConfig/ConfigurationPrice';
import ManagingHolls from '@/Components/AdminC/ManagingHolls'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function PanalAdmin({halls, mess}) {
  if(mess) {alert(mess);}
  const headers = Array.from(document.querySelectorAll('.conf-step__header'));
  headers.forEach(header => header.addEventListener('click', () => {
    header.classList.toggle('conf-step__header_closed');
    header.classList.toggle('conf-step__header_opened');
  }));
  return (
    <>
      <Head title='идемВкино | админпанель'/>
      <div className='body_admin'>
       <ApplicationLogo>
        <span className="page-headerA__subtitle">Администраторская</span>
        <div>
          <Link href={route('dashboard')} className="movie__title_a">
            На панель управления
          </Link>
        </div>
       </ApplicationLogo>
        <main className='conf-steps'>
          <ManagingHolls datas={halls}/>
          <ConfigurationHalls datas={halls}/>
          <ConfigurationPrice datas={halls}/>
        </main>
      </div>
    </>
    
  )
}
