import ConfigurationHalls from '@/Components/AdminC/HallsConfig/ConfigurationHalls';
import ConfigurationPrice from '@/Components/AdminC/PriceConfig/ConfigurationPrice';
import ManagingHolls from '@/Components/AdminC/ManagingHolls';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, usePage } from '@inertiajs/react';
import SessionGrid from '@/Components/AdminC/SessionGrid/SessionGrid';
import accordeon from '@/Components/AdminC/srevces/accordeon';
import AllowSales from '@/Components/AdminC/AllowSales/AllowSales';
import React, { useEffect, useState } from 'react';
export const ASContext = React.createContext(null);

export default function PanelAdmin({halls, films}) {

  const { flash } = usePage().props;
  const [conder, setConder] = useState('ix');
  let status;

  if(flash.mess) {alert(flash.mess); flash.mess = '';} // flash приходит из HandleInertiaRequests.php <-HallsConfigController <-with()
  accordeon();
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
          <ASContext.Provider value={{conder, setConder}}>
            <SessionGrid datas={films} halls={halls}/>
            <AllowSales status={status}/>
          </ASContext.Provider>
        </main>
      </div>
    </>
    
  )
}
