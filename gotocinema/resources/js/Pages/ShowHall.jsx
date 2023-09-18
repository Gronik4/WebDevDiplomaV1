import React from 'react';
import { Head, Link } from '@inertiajs/react';
import RenderInfo from '@/Components/Client/showHall/RenderInfo';
import RenderClientLegend from '@/Components/Client/showHall/RenderClientLegend';
import RenderSchemeHall from '@/Components/Client/showHall/RenderSchemeHall';

export default function ShowHall({seats}) {
  const [dat, start, namehall, namefilm, vip, odinary, soldSeats] = seats;
  
  function reservation(){

  }

  return (
    <>
      <Head title="идемВкино"/> 
      <div className='body_client'>
        <header className='page-header'>
            <Link href={route('welcome')}><h1 className='page-header__title'>Идём<span>в</span>кино</h1></Link>
        </header>
        <main> 
          <section className='buying'>
            <RenderInfo info={[dat, start, namehall, namefilm]}/>
            <div className='buying-scheme'>
              <RenderSchemeHall schemeJson={soldSeats}/>
              <RenderClientLegend prices={[vip, odinary]}/>
            </div>
            <div style={{display: 'flex',flexDirection: 'row' , justifyContent: 'center'}}>
              <button className="acceptin-button" onClick={reservation} >Забронировать</button>
              <Link href={route('welcome')} className='acceptin-button'><button>На главную</button></Link>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
