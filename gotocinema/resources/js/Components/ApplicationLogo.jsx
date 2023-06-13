import React from 'react';
import { Link } from '@inertiajs/react';
// Для заголовков страниц
export default function ApplicationLogo({flag, children}) {
  return (
    <header className="page-headerA">
      <Link href='/'>
       <h1 className="page-header__title link">Идём<span>в</span>кино</h1> 
      </Link>
      {children}
    </header>
  )
}
