import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TwoColumnLayout from '../../../../layouts/Desktop/TwoColumnLayout';
import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import InputPassword from '../../../../components/InputPassword';

import ImageLogin from '../../../../images/svg/ImageLogin';
import Logo from '../../../../images/svg/Logo';

const Login = () => {
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });
 const navigate = useNavigate();

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const postLogin = (data) => {};

 return (
  <>
   {isSmartphone ? (
    <OneColumnLayoutMobile
     page={'Login'}
     column1={
      <>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h1 className='text-font font-boldc text-3xl text-left py-3'>Faça o login</h1>

       <form onSubmit={handleSubmit(postLogin)} className='flex flex-col items-center'>
        <Input
         label='E-mail'
         placeholder='Insira seu e-mail'
         registerKey={'email'}
         register={register}
         error={errors.email}
         validate={{
          required: 'Campo obrigatório!',
          pattern: {
           value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
           message: 'E-mail inválido!',
          },
         }}
        />

        <InputPassword
         label='Senha'
         placeholder='8+ Caracteres'
         registerKey={'password'}
         register={register}
         error={errors.password}
         validate={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
        />

        <input type='checkbox' {...register('terms')} />

        <div className='w-full pt-2'>
         <p className='font-regularc text-font text-right' onClick={() => navigate('/lostpassword')}>
          Esqueceu a senha?
         </p>
        </div>

        <div className='w-full pt-12'>
         <Button name='Login' width={'w-full'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} type='submit' />
        </div>

        <p className='font-regularc text-font text-left text-label pt-4 text-colors-50'>
         Não é cadastrado?
         <span onClick={navigate('/register')} className='text-blue1 cursor-pointer'>
          Cadastre-se
         </span>
        </p>
       </form>
      </>
     }
    />
   ) : (
    <TwoColumnLayout
     page={'Login'}
     column1={
      <div className='h-full w-full flex items-center justify-center'>
       <ImageLogin />
      </div>
     }
     column2={
      <>
       <h1 className='text-font font-boldc text-3xl pb-4'>Faça o login</h1>

       <form onSubmit={handleSubmit(postLogin)} className='flex flex-col'>
        <Input
         label='E-mail'
         error={errors.email}
         placeholder='Insira seu e-mail'
         validate={{
          required: 'Campo obrigatório!',
          pattern: {
           value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
           message: 'E-mail inválido!',
          },
         }}
         registerKey={'email'}
         register={register}
        />

        <InputPassword
         label='Senha'
         placeholder='8+ Caracteres'
         validate={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
         registerKey={'password'}
         register={register}
         error={errors.password}
        />

        <div className='flex justify-between pt-4'>
         <Button name='Login' width='w-40' height={'h-12'} textColor={'text-white'} backgroundColor='bg-blue1' type='submit' />

         <div className='font-regularc text-font flex justify-end items-center'>
          <p onClick={() => navigate('/lostpassword')} className='cursor-pointer'>
           Esqueceu a senha?
          </p>
         </div>
        </div>
       </form>

       <p className='font-regularc text-font text-left pt-4 text-label text-colors-50'>
        Não é cadastrado?
        <span onClick={() => navigate('/register')} className='text-blue1 cursor-pointer pl-2'>
         Cadastre-se
        </span>
       </p>
      </>
     }
    />
   )}
  </>
 );
};

export default Login;
