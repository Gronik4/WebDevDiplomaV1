import React, { useEffect } from 'react'

export default function RenderSchemeHall({schemeJson}) {

  const schemeAd = schemeJson? JSON.parse(schemeJson): null;
  const scheme = schemeAd.includes('conf-step')? schemeAd.replace(/conf-step__/g, 'buying-scheme__'): schemeAd;

  useEffect(()=> {
    document.querySelectorAll('.buying-scheme__chair').forEach((el)=>{
      if(!el.classList.contains('buying-scheme__chair_disabled') && !el.classList.contains('buying-scheme__chair_taken')) {
        el.addEventListener('click', statusChair);
      }
    })
  });

  function statusChair(e) {
    e.target.classList.toggle('buying-scheme__chair_selected');
  }
  return (
    <div className='buying-scheme__wrapper'style={{backgroundSize: '190%'}}>
      <div className='dangerous' dangerouslySetInnerHTML={{__html: scheme}}></div>
    </div>
  )
}
