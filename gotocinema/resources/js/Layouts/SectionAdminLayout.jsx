import Popup from '@/Components/AdminC/Popup';
import React from 'react'

export default function SectionAdminLayout({ children, headerName, flags, nameEl, idEl }) {
  return (
    <section className='conf-step'>
      <header className='conf-step__header conf-step__header_opened'>
        <h2 className='conf-step__title'>{headerName}</h2>
      </header>
      <div className='conf-step__wrapper'>
        {children}
      </div>
      { flags.flag? <Popup flag={flags.flag} idp={flags.add}/>: null }
      { flags.flagDel? <Popup flag={flags.flagDel} idp={flags.del} nameEl={nameEl} idEl={idEl}/>: null }
    </section>
  )
}
