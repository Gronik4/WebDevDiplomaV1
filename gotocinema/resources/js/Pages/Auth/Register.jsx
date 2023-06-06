import { useEffect } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import GuestLayot from '@/Layouts/GuestLayout';
import HeaderLayout from '@/Layouts/HeaderLayout';
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

useEffect(() => {
    return () => {
        reset('password', 'password_confirmation');
    };
}, []);

const submit = (e) => {
    e.preventDefault();

    post(route('register'));
};

  return (
    <GuestLayot>
      <Head title="Регистрация | идёмВкино"/>
      <section className='login'>
        <HeaderLayout header='Регистрация'/>
        <div className='login__wrapper'>
          <form className='login__form' onSubmit={submit}>
            <div>
              <InputLabel htmlFor="name" value="Никнейм" className='login__label'/>
              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="login__input"
                autoComplete="name"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)}
                required
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
              <InputLabel htmlFor="email" value="Email" className='login__label'/>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="login__input"
                autoComplete="username"
                onChange={(e) => setData('email', e.target.value)}
                required
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
                autoComplete="new-password"
                onChange={(e) => setData('password', e.target.value)}
                required
              />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div>
              <InputLabel htmlFor="password_confirmation" value="Повторите пароль" className='login__label'/>
              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="login__input"
                autoComplete="new-password"
                onChange={(e) => setData('password_confirmation', e.target.value)}
                required
              />
              <InputError message={errors.password_confirmation} className="mt-2"/>
            </div>
            <Link href={route('login')}>Уже зарегистрированы?</Link>
            <div className='text-center'>
              <PrimaryButton className='login__button' disabled={processing}>
                Регистрация
              </PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </GuestLayot>
  )
}
