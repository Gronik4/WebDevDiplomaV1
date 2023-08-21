import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import React from 'react';

export default function AllowSales({flag}) {
  const headerName = 'Открыть продажи';
  const titleButt = flag === 'suspend'? 'Приостановить продажу билетов': 'Открыть продажу билетов';
  
  function openingSale() {
    const dateSelect = document.getElementById('SGDate').value;
    alert(dateSelect);
  }
  return (
    <SectionAdminLayout  headerName={headerName} flags='' nameEl='' idEl=''>
      <div className='conf-step__wrapper text-center'>
        <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
        <button onClick={openingSale} className="conf-step__button conf-step__button-accent">{titleButt}</button>
      </div>
    </SectionAdminLayout>
  )
}
