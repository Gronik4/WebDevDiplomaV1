import SectionAdminLayout from '@/Layouts/SectionAdminLayout';
import { ASContext } from '@/Pages/PanelAdmin';
import React, { useContext, useEffect } from 'react';
import asHandlerConder from './servicceAS/asHandlerConder';
import { useForm } from '@inertiajs/react';

export default function AllowSales() {
  const {conder, setConder} = useContext(ASContext);
  const {mess, contentButt} = asHandlerConder(conder);
  const {patch, processing, errors, success } = useForm();
  let sign, code; //sign - только для обновления таблицы БД
  if(conder[1] === '1') {sign = false; code= '00';} else {sign = true; code = '01'}

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
  if(errors.grid) {alert('Действие не возможно. Сетка сеансов пуста.' + errors.grid);}

  function toggleSale() {
    const dateSelect = document.getElementById('SGDate').value;
    patch(route('grid.update', {grid: ['allow', dateSelect], allpwed: sign}), {onSuccess: ()=>setConder(code)});
  }
  return (
    <SectionAdminLayout  headerName={headerName} flags='' nameEl='' idEl=''>
      {mess !== 'non'?
        <div className='conf-step__wrapper text-center'>
        <p className="conf-step__paragraph">{mess}</p>
        {contentButt !== 'hidd'?
           <button type='submit' id='asb' onClick={toggleSale} disabled={processing} className="conf-step__button conf-step__button-accent">{contentButt}</button>: null
        }
      </div>:null
      }
    </SectionAdminLayout>
  )
}
