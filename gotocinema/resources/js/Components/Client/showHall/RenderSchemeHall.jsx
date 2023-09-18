import React, { useEffect } from 'react'

export default function RenderSchemeHall({schemeJson}) {

  const schemeAd = schemeJson? JSON.parse(schemeJson): null;
  const search = /conf-step__/g;
  const schemeCl =  schemeAd.replace(search, 'buying-scheme__');

  useEffect(()=> {
    document.querySelectorAll('.buying-scheme__chair').forEach((el)=>{
      if(!el.classList.contains('buying-scheme__chair_disabled')) {el.addEventListener('click', statusChair);}
    })
  });

  function statusChair(e) {
    e.target.classList.toggle('buying-scheme__chair_selected');
  }
  return (
    <div className='buying-scheme__wrapper'style={{backgroundSize: '190%'}}>
      <div className='dangerous' dangerouslySetInnerHTML={{__html: schemeCl}}></div>
    </div>
  )
}
