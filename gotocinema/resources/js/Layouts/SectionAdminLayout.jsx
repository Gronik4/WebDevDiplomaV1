import React from 'react'

export default function SectionAdminLayout({ children, headerName }) {
  return (
    <section className='conf-step'>
      <header className='conf-step__header conf-step__header_opened'>
        <h2 className='conf-step__title'>{headerName}</h2>
      </header>
      <div className='conf-step__wrapper'>{children}</div>
    </section>
  )
}
