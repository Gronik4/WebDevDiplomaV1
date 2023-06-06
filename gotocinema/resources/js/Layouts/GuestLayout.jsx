import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';


export default function GuestLayot({ children }) {
  return (
    <div className='body_admin'>
      <ApplicationLogo/>
    <main>{children}</main>  
    </div>
  )
}
