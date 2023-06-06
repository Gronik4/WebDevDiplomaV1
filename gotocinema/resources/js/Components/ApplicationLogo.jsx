import React from 'react';
import { Link } from '@inertiajs/react';

export default function ApplicationLogo() {
  return (
    <header className="page-headerA">
      <Link href='/'>
       <h1 className="page-headerA__title link">Идём<span>в</span>кино</h1> 
      </Link>
      <span className="page-headerA__subtitle">Для администратора</span>
    </header>
  )
}
