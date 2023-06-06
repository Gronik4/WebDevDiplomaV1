import React from 'react';
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/HeaderLayout';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title="Авторизация | идёмВкино"/>
      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
      <section className='login'>
        <HeaderLayout header='Авторизация'/>
        <div className='login__wrapper'>
          <form className='login__form' onSubmit={submit}>
            <div>
              <InputLabel htmlFor="email" value="E-mail" className='login__label'/>
              <TextInput
                placeholder='example@domain.xyz'
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="login__input"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
              <InputLabel htmlFor="password" value="Пароль" className='login__label'/>
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="login__input"
                autoComplete="current-password"
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div className='login_add'>
              <label className='login__label' style={{display: 'flex', alignItems: 'center', color:'#848484'}}>
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                />
                <span >Запомнить меня</span>
              </label>
              {canResetPassword && (
                <Link href={route('password.request')} style={{ width: '110px'}}>
                  Забыли пароль?
                </Link>
              )}
            </div>
            <div className='text-center'>
              <PrimaryButton className='login__button' disabled={processing}>
                Авторизоваться
              </PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </GuestLayout>
  )
}
