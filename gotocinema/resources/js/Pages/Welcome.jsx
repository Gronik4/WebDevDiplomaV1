import React, { useEffect, useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import RenderNav from '@/Components/Client/renderNav';
import moment from 'moment';
import axios from 'axios';
import receivedDataHandlerClient from '@/Components/Client/services/receivedDataHandlerClient';
import RenderMovie from '@/Components/Client/renderMovie/renderMovie';

export default function Welcome({ auth, films }) {

  const [grid, setGrid] = useState([]);
  const [chosenDate, setChosenDate]= useState('')
  const now = moment(Date.now()).format('YYYY-MM-DD');
  
  useEffect(()=> {handlerChosenDat(now);}, [now]);

  function handlerChosenDat(dat) {
    setChosenDate(dat);
    axios.get(route('grid_client.show', dat)).then((resp)=>{
      const putGrid = receivedDataHandlerClient(resp.data.datas);
      setGrid(putGrid);
    });
  }
  
  return (
    <>
      <Head title="идемВкино" />
      <div className='body_client'>
        <header className="page-header">
          <h1 className="page-header__title">Идём<span>в</span>кино</h1>
          <div>
            {auth.user ? (
              <Link href={route('dashboard')} className="movie__title_a">Панель управления</Link>
            ) : (
              <>
                <Link href={route('login')} className="movie__title_a">вход</Link>
                <Link href={route('register')} className="movie__title_a">Регистрация</Link>
              </>
            )}
          </div>
        </header>
        
        <nav className="page-nav">
          <RenderNav onSelectData={(dat)=> handlerChosenDat(dat)}/>
        </nav>

        <main>
          <RenderMovie grid={grid} films={films} dat={chosenDate}/>    
        </main>
      </div>
    </>
  )
}
