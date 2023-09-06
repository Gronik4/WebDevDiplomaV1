import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import { ASContext } from '@/Pages/PanelAdmin';
import React, { useContext, useEffect } from 'react';
import handlerConder from './servicceAS/hendlerConder';

export default function AllowSales() {
  const {conder, setConder} = useContext(ASContext);
  const {mess, contentButt} = handlerConder(conder);
  useEffect(()=>{
    if(contentButt === 'non') {return;}
    const butt = document.getElementById('asb');
    if(contentButt === 'Кнопка заблокирована') { 
      butt.setAttribute('disabled','disabled')
    } else {
      if(butt && butt.hasAttribute('disabled')) {butt.removeAttribute('disabled');} 
    }
  })
  const headerName = 'Открыть продажи';
  
  function openingSale() {
    const dateSelect = document.getElementById('SGDate').value;
    alert(dateSelect);
  }
  return (
    <SectionAdminLayout  headerName={headerName} flags='' nameEl='' idEl=''>
      {mess !== 'non'?
        <div className='conf-step__wrapper text-center'>
        <p className="conf-step__paragraph">{mess}</p>
        {contentButt !== 'hidd'?
           <button id='asb' onClick={openingSale} className="conf-step__button conf-step__button-accent">{contentButt}</button>: null
        }
      </div>:null
      }
    </SectionAdminLayout>
  )
}
