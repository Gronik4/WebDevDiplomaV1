import handlerClientParameters from '@/Components/Client/services/handlerClientParameters';
import ClientPageLayout from '@/Layouts/ClientPageLayout';
import { Link } from '@inertiajs/react';
import React from 'react';
import QRCode from 'react-qr-code';

export default function Ticket() {
  const getData = location.search.slice(1, -1);
  const handled = handlerClientParameters(getData);
  let areals = '';
  handled.places.forEach(el => { areals += el+'.'+'.'+'. '});
  const areal = areals.slice(0, -5);
  const qrCodeString = `${handled.namefilm} - ${handled.namehall}- ${handled.start} - `+areal;
  return (
    <ClientPageLayout>
      <section className='ticket'>
        <header className="tichet__check">
          <h2 className="ticket__check-title">Электронный билет</h2>
        </header>
        <div className='ticket__info-wrapper' >
          <p className='ticket__info'>На фильм: <span className="ticket__details ticket__title">{handled.namefilm}</span></p>
          <p className='ticket__info'>Места: <span className="ticket__details ticket__chairs">{areal}</span></p>
          <p className='ticket__info'>В зале: <span className="ticket__details ticket__hall">{handled.namehall}</span></p>
          <p className='ticket__info'>Начло сеанса: <span className="ticket__details ticket__start">{handled.start}</span></p>
          <div className='qrcode' style={{width: '190px', margin: '2px auto', padding: '5px', bgColor: '#FFFFFF'}}>
            <QRCode
              value={qrCodeString}
              size={180}
              bgColor={'#FFFFFF'}
            />
          </div>
          <p className='ticket__hint'>Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
          <p className='ticket__hint'>Приятного просмотра!</p>
        </div>
        <Link href={route('welcome')}>
          <button className='acceptin-button' style={{marginTop: '1rem'}}>Вернуться на главную</button>
        </Link>
      </section>
    </ClientPageLayout>
          

  )
}
