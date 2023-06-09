import SectionAdminLayout from '@/Layouts/SectionAdminLayout'
import React from 'react'

export default function ManagingHolls({ films }) {
  return (
    <SectionAdminLayout headerName='Управление залами'>
      <p className='conf-step__paragraph'>Доступные залы</p>
      <ul className='conf-step__list'>
        
      </ul>
    </SectionAdminLayout>
  )
}
