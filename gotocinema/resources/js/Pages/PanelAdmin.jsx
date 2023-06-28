import ConfigurationHalls from '@/Components/AdminC/HallsConfig/ConfigurationHalls';
import ConfigurationPrice from '@/Components/AdminC/PriceConfig/ConfigurationPrice';
import ManagingHolls from '@/Components/AdminC/ManagingHolls';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function PanelAdmin({halls, mess}) {

  if(mess) {alert(mess)};
  
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
