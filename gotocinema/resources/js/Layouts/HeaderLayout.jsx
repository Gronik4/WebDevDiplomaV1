import React from 'react';

// Заголовок для окон автооризации и регистрации
export default function ({ header  }) {
  return (
    <header className='login__header' data-info="HeaderLayout">
      <h2 className="login__title">{header}</h2>
    </header>
  )
}
