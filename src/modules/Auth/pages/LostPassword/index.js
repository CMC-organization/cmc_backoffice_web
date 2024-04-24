import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TwoColumnLayout from '../../../../layouts/Desktop/TwoColumnLayout';
import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import ImageLostPassword from '../../../../images/svg/ImageLostPassword';
import Logo from '../../../../images/svg/Logo';

const LostPassword = () => {
 const navigate = useNavigate();
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const postLostPassword = async (data) => {
  navigate('/emailsent');
 };

 return (
  <>
   {isSmartphone ? (
    <OneColumnLayoutMobile
     page={'LostPassword'}
     column1={
      <>
       <div className='flex justify-center pb-12'>
        <Logo width={155} height={61} />
       </div>

       <h2 className='text-font font-boldc text-3xl text-center pb-4'>Esqueceu a senha ?</h2>

       <p className='font-regularc text-font text-base text-center pb-8'>
        Não se preocupe! Digite seu e-mail para receber instruções de recuperação de senha
       </p>

       <form onSubmit={handleSubmit(postLostPassword)}>
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

        <div className='w-full pt-12'>
         <Button name='Recuperar senha' width={'w-full'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} type='submit' />
        </div>

        <p
         className='font-regularc text-font text-center text-label pt-4 text-colors-50'
         onClick={() => {
          navigate('/login');
         }}
        >
         Lembrou da senha?
        </p>
       </form>
      </>
     }
    />
   ) : (
    <TwoColumnLayout
     page={'LostPassword'}
     column1={
      <div className='h-full w-full flex items-center justify-center'>
       <ImageLostPassword />
      </div>
     }
     column2={
      <>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h2 className='text-font font-boldc text-3xl text-left pb-4'>Esqueceu a senha ?</h2>

       <p className='font-regularc text-font text-base pb-8'>Não se preocupe! Digite seu e-mail para receber instruções de recuperação de senha</p>

       <form onSubmit={handleSubmit(postLostPassword)}>
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

        <div className='flex justify-between mt-8 gap-3'>
         <Button name='Recuperar senha' width={'w-52'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} type='submit' />

         <div className='font-regularc text-font flex items-center'>
          <p
           onClick={() => {
            navigate('/login');
           }}
           className='cursor-pointer'
          >
           Lembrou da senha?
          </p>
         </div>
        </div>
       </form>
      </>
     }
    />
   )}
  </>
 );
};

export default LostPassword;
