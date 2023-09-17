import React from 'react';
import { Head, Link } from '@inertiajs/react';
import RenderInfo from '@/Components/Client/RenderInfo';

export default function ShowHall({seats}) {
  const [, , places] = seats;
  //const infodata = [date, start, hallname, filmname];
  function reservation(){

  }
  console.log(seats);
  return (
    <>
      <Head title="идемВкино"/> 
      <div className='body_client'>
        <header className='page-header'>
            <h1 className='page-header__title'>Идём<span>в</span>кино</h1>
        </header>
        <main> 
          <section className='buying'>
            <RenderInfo info={seats}/>
            <div className='buying-scheme'>
              <div className='buying-scheme__wrapper'>

              </div>
              <div className='buying-scheme__legend'>
                <div className='col'>
                  <p className='buying-scheme__legend-price'><span className="buying-scheme__chair buying-scheme__chair_standart"></span> Свободно (<span className="buying-scheme__legend-value">250</span>руб)</p>
                  <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_vip"></span> Свободно VIP (<span className="buying-scheme__legend-value">350</span>руб)</p>            
                </div>
                <div className="col">
                  <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_taken"></span> Занято</p>
                  <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_selected"></span> Выбрано</p>                    
                </div>
              </div>
            </div>
            <p>
            <button className="acceptin-button" onClick={reservation} >Забронировать</button>
            </p>
          </section>
        </main>
      </div>
    </>
  )
}
