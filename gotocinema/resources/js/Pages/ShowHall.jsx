import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import RenderInfo from '@/Components/Client/showHall/RenderInfo';
import RenderClientLegend from '@/Components/Client/showHall/RenderClientLegend';
import RenderSchemeHall from '@/Components/Client/showHall/RenderSchemeHall';

export default function ShowHall({seats}) { 
  const [dat, start, namehall, namefilm, vip, odinary, soldSeats, gridId] = seats;
  const {patch, processing, errors, onsuccess} = useForm();
  
  function reservation(){ 
    const selectidSeats = document.querySelectorAll('.buying-scheme__chair_selected');
    if(selectidSeats.length == 1) {alert('Действие не возможно. Места для бронирования не выбраны.'); return;}
    let cost = 0;
    const places = [];
    const payment = {dat, start, namehall, namefilm};

    selectidSeats.forEach((el)=> {
      if(el.id) {
        const price = el.classList.contains('buying-scheme__chair_vip')? vip: odinary;
        cost +=price;
        places.push(el.id);
        el.classList.remove('buying-scheme__chair_selected', 'buying-scheme__chair_vip', 'buying-scheme__chair_standart');
        el.classList.add('buying-scheme__chair_taken');
      } 
    });
    payment.cost = cost;
    payment.places = places;
    const scheme = document.querySelector('.dangerous').innerHTML;
    const jsonData = JSON.stringify(scheme);
console.log(payment);
    patch(route('grid_client.update', {grid_client: gridId, sold_seats: jsonData}), {onSuccess: ()=>{
      route('payment', {payment});
      console.log('Go to payment.');
    }})
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
              <RenderSchemeHall schemeJson={soldSeats} onGetDataSchemeHall={(data)=> handlerDateSH(data)}/>
              <RenderClientLegend prices={[vip, odinary]}/>
            </div>
            <div style={{display: 'flex',flexDirection: 'row' , justifyContent: 'center'}}>
              <button className="acceptin-button" onClick={reservation} disabled={processing}>Забронировать</button>
              <Link href={route('welcome')} className='acceptin-button'><button>На главную</button></Link>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
