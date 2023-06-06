import GuestLayot from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import HeaderLayout from '@/Layouts/HeaderLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';

export default function ForgotPassword({ status }) {
  const {data, setData, post, processing, errors } = useForm({
    email: '',
  })
  const submit = (e)=> {
    e.preventDefault();
    post(route('password.email'));
  }
  return (
    <GuestLayot>
      <Head title='Восстановить пароль | идемВкино'/>
      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
      
      <section className='login'>
        <HeaderLayout header='Восстановить пароль'/>
        <div className='login__wrapper'>
          <form className='login__form' onSubmit={submit}>
            <div>
              <InputLabel htmlFor="email" className='login__label' 
              value="Забыли свой пароль? Нет проблем! Просто сообщите нам свой адрес электронной почты, и мы его Вам вышлем."
              />
              <TextInput 
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="login__input"
                isFocused={true}
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
            <div className='text-center'>
              <PrimaryButton className='login__button' disabled={processing}>
                Выслать пароль
              </PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </GuestLayot>
  )
}
