import React from 'react';
import { Link } from '@inertiajs/react';

export default function ApplicationLogo({flag}) {
  return (
    <header className="page-headerA">
      <Link href='/'>
       <h1 className="page-headerA__title link">Идём<span>в</span>кино</h1> 
      </Link>
      {flag===1? null: <span className="page-headerA__subtitle">Для администратора</span>}
      {auth.user? <Link href='dashboard' className='movie__title_a'>Панель управления</Link>:null}
    </header>
  )
}
