import { Head, Link } from '@inertiajs/react';
import React, { Children } from 'react';

export default function ClientPageLayout({children}) {
  return (
    <>
      <Head title='Идем в кино'/>
      <div className='body_client' style={{fontSize: '55%', height: '100vh'}}>
        <header className='page-header' style={{padding: '0.5rem'}}>
          <Link href={route('welcome')}><h1 className='page-header__title'>Идём<span>в</span>кино</h1></Link>
        </header>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
