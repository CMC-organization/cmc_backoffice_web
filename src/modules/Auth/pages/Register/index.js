import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TwoColumnLayout from '../../../../layouts/Desktop/TwoColumnLayout';
import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import InputPassword from '../../../../components/InputPassword';

import ChecboxNotChecked from '../../../../images/svg/ChecboxNotChecked';
import ChecboxChecked from '../../../../images/svg/ChecboxChecked';
import ImageLogin from '../../../../images/svg/ImageLogin';
import Logo from '../../../../images/svg/Logo';

const Register = () => {
 const navigate = useNavigate();
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });

 const [checkbox, setCheckbox] = useState();

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const postRegister = (data) => {};

 return (
  <>
   {isSmartphone ? (
    <OneColumnLayoutMobile
     page={'Register'}
     column1={
      <>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h2 className='text-font font-boldc text-3xl text-left py-3'>Criar conta</h2>

       <form onSubmit={handleSubmit(postRegister)} className='flex flex-col items-center'>
        <Input
         label='Nome'
         placeholder='Insira seu nome'
         registerKey={'name'}
         register={register}
         error={errors.name}
         validate={{
          required: 'Campo obrigatório!',
          maxLength: {
           value: 30,
           message: 'Nome inválido! Máximo 30 caracteres!',
          },
          minLength: {
           value: 2,
           message: 'Nome inválido! Mínimo 2 caracteres!',
          },
         }}
        />
        <Input
         label='Sobrenome'
         placeholder='Insira seu sobrenome'
         registerKey={'lastname'}
         register={register}
         error={errors.lastname}
         validate={{
          required: 'Campo obrigatório!',
          maxLength: {
           value: 50,
           message: 'Sobrenome inválido! Máximo 50 caracteres!',
          },
          minLength: {
           value: 2,
           message: 'Sobrenome inválido! Mínimo 2 caracteres!',
          },
         }}
        />
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

        <div className='flex items-center my-10'>
         <div className='w-20'>
          {checkbox ? (
           <ChecboxChecked
            className='cursor-pointer'
            onClick={() => {
             setCheckbox((prevState) => !prevState);
            }}
           />
          ) : (
           <ChecboxNotChecked
            className='cursor-pointer'
            onClick={() => {
             setCheckbox((prevState) => !prevState);
            }}
           />
          )}
         </div>

         <label
          htmlFor='checkbox'
          className='ml-4 text-colors-blue1 cursor-pointer'
          onClick={() => {
           setCheckbox((prevState) => !prevState);
          }}
         >
          <p className='text-font text-base font-mediumc text-label'>
           Ao clicar neste botão, eu concordo com os termos de uso da Gopn.ai LTDA,
           <span className='text-blue text-blue1'>Termos de uso</span>
          </p>
         </label>
        </div>

        <Button name='Criar conta' width={'w-full'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} type='submit' />

        <p className='font-regularc text-font pt-4 text-colors-blue1 '>
         Já é cadastrado?
         <span
          onClick={() => {
           navigate('/login');
          }}
          className='text-blue1 cursor-pointer'
         >
          Login
         </span>
        </p>
       </form>
      </>
     }
    />
   ) : (
    <TwoColumnLayout
     page={'Register'}
     column1={
      <div className='h-full w-full flex items-center justify-center'>
       <ImageLogin />
      </div>
     }
     column2={
      <>
       <h2 className='text-font font-boldc text-3xl text-left pb-2'>Criar conta</h2>

       <form onSubmit={handleSubmit(postRegister)}>
        <div className='flex gap-4 w-full justify-between '></div>
        <Input
         label='Nome'
         placeholder='Insira seu nome'
         registerKey={'name'}
         register={register}
         error={errors.name}
         validate={{
          required: 'Campo obrigatório!',
          maxLength: {
           value: 30,
           message: 'Nome inválido! Máximo 30 caracteres!',
          },
          minLength: {
           value: 2,
           message: 'Nome inválido! Mínimo 2 caracteres!',
          },
         }}
        />
        <Input
         label='Sobrenome'
         placeholder='Insira seu sobrenome'
         registerKey={'lastname'}
         register={register}
         error={errors.lastname}
         validate={{
          required: 'Campo obrigatório!',
          maxLength: {
           value: 50,
           message: 'Sobrenome inválido! Máximo 50 caracteres!',
          },
          minLength: {
           value: 2,
           message: 'Sobrenome inválido! Mínimo 2 caracteres!',
          },
         }}
        />
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

        <div className='flex items-center my-3 mt-4'>
         <div className='w-20'>
          {checkbox ? (
           <ChecboxChecked
            className='cursor-pointer'
            onClick={() => {
             setCheckbox((prevState) => !prevState);
            }}
           />
          ) : (
           <ChecboxNotChecked
            className='cursor-pointer'
            onClick={() => {
             setCheckbox((prevState) => !prevState);
            }}
           />
          )}
         </div>

         <label
          htmlFor='checkbox'
          className='ml-4 text-colors-50 cursor-pointer'
          onClick={() => {
           setCheckbox((prevState) => !prevState);
          }}
         >
          <p className='text-font text-base font-mediumc'>
           Ao clicar neste botão, eu concordo com os termos de uso da Gopn.ai LTDA,
           <span className='text-blue'>Termos de uso</span>
          </p>
         </label>
        </div>

        <div className='flex justify-start flex-col pt-4'>
         <Button name='Criar conta' width={'w-40'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} type='submit' />
         <p className='font-regularc text-font text-left text-label pt-4 text-colors-50'>
          Já é cadastrado?
          <span
           onClick={() => {
            navigate('/login');
           }}
           className='text-blue1 cursor-pointer'
          >
           Login
          </span>
         </p>
        </div>
       </form>
      </>
     }
    />
   )}
  </>
 );
};

export default Register;
