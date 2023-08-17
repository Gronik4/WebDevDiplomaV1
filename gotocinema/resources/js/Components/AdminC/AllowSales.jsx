import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React from 'react';

export default function AllowSales() {
  const headerName = 'Открыть продажи';
  
  function openingSale() {
    alert('openingSale');
  }
  return (
    <SectionAdminLayout  headerName={headerName} flags='' nameEl='' idEl=''>
      <div className='conf-step__wrapper text-center'>
        <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
        <button onClick={openingSale} className="conf-step__button conf-step__button-accent">Открыть продажу билетов</button>
      </div>
    </SectionAdminLayout>
  )
}
