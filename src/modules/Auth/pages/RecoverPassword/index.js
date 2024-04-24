import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';

import TwoColumnLayout from '../../../../layouts/Desktop/TwoColumnLayout';
import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import ImageLostPassword from '../../../../images/svg/ImageLostPassword';
import Logo from '../../../../images/svg/Logo';

const RecoverPassword = () => {
 const navigate = useNavigate();
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });
 const { token } = useParams();

 const [password1, setPassword1] = useState();
 const [password2, setPassword2] = useState();

 /* MESSAGE ERROS */
 const [password1Error, setPassword1Error] = useState();
 const [password2Error, setPassword2Error] = useState();

 const getLostPassword = async (event) => {
  event.preventDefault();
  navigate('/emailsent');
 };

 useEffect(() => {
  if (!token || token.length === 10) {
   navigate('/login');
  }
 }, []);

 return (
  <>
   {isSmartphone ? (
    <OneColumnLayoutMobile
     page={'RecoverPassword'}
     column1={
      <>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h2 className='text-font font-boldc text-3xl text-center mb-4'>Esqueceu a senha ?</h2>

       <p className='font-regularc text-font text-base text-center mb-4'>Preencha os campos abaixo com a nova senha que deseja cadastrar</p>

       <form onSubmit={getLostPassword} className='flex flex-col items-center'>
        <Input
         name='Nova senha'
         error={password1Error}
         onChange={(e) => setPassword1(e.target.value)}
         placeholder='Insira a nova senha'
         type={'password'}
         required={true}
        />
        <Input
         name='Confirmação da nova senha'
         error={password2Error}
         onChange={(e) => setPassword2(e.target.value)}
         placeholder='Insira a confirmação da senha'
         type={'password'}
         required={true}
        />

        <div className='flex items-center mt-20 flex-col gap-4 w-full'>
         <Button name='Recuperar senha' width={'w-full'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} />

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
   ) : (
    <TwoColumnLayout
     page={'RecoverPassword'}
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

       <h2 className='text-font font-boldc text-3xl text-left mb-4'>Esqueceu a senha ?</h2>

       <p className='font-regularc text-font text-base mb-4'>Preencha os campos abaixo com a nova senha que deseja cadastrar</p>

       <form onSubmit={getLostPassword} className='flex flex-col'>
        <Input
         name='Nova senha'
         error={password1Error}
         onChange={(e) => setPassword1(e.target.value)}
         placeholder='Insira a nova senha'
         type={'password'}
         required={true}
        />
        <Input
         name='Confirmação da nova senha'
         error={password2Error}
         onChange={(e) => setPassword2(e.target.value)}
         placeholder='Insira a confirmação da senha'
         type={'password'}
         required={true}
        />

        <div className='flex justify-between mt-8 gap-3'>
         <Button name='Recuperar senha' width={'w-52'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} />

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

export default RecoverPassword;
