import handlerClientParameters from '@/Components/Client/services/handlerClientParameters';
import ClientPageLayout from '@/Layouts/ClientPageLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Payment() {
  const received = location.search;
  const handled = handlerClientParameters(received);
  let areals = '';
  handled.places.forEach(el => { areals += el+'.'+'.'+'. '});
  const areal = areals.slice(0, -5);
  
  return (
    <ClientPageLayout>
      <section className='ticket'>
        <header className="tichet__check">
          <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
        </header>
        <div className='ticket__info-wrapper'>
          <p className='ticket__info'>На фильм: <span className="ticket__details ticket__title">{handled.namefilm}</span></p>
          <p className='ticket__info'>Места: <span className="ticket__details ticket__chairs">{areal}</span></p>
          <p className='ticket__info'>В зале: <span className="ticket__details ticket__hall">{handled.namehall}</span></p>
          <p className='ticket__info'>Начло сеанса: <span className="ticket__details ticket__start">{handled.dat} в: {handled.start}</span></p>
          <p className='ticket__info'>Стоимость: <span className="ticket__details ticket__cost">{handled.cost}</span> рублей</p>
          <Link href={route('ticket', received)}>
            <button className='acceptin-button'>Получить код бронирования</button>
          </Link>
          <p className='ticket__hint'>После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
          <p className='ticket__hint'>Приятного просмотра!</p>
        </div>
      </section> 
    </ClientPageLayout>
  )
}
