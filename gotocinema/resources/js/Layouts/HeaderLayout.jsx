import React from 'react'

export default function HeaderLayout({ header  }) {
  return (
    <header className='login__header'>
      <h2 className="login__title">{header}</h2>
    </header>
  )
}
