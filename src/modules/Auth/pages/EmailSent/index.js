import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import TwoColumnLayout from '../../../../layouts/Desktop/TwoColumnLayout';
import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';

import Button from '../../../../components/Button';

import ImageLostPassword from '../../../../images/svg/ImageLostPassword';
import Logo from '../../../../images/svg/Logo';

const EmailSent = () => {
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });
 const navigate = useNavigate();

 const [email, setEmail] = useState();

 const getEmailSent = async (event) => {
  event.preventDefault();

  if (!email) return false;
 };

 return (
  <>
   {isSmartphone ? (
    <OneColumnLayoutMobile
     page={'EmailSent'}
     column1={
      <>
       <div className='flex justify-center pb-12'>
        <Logo width={155} height={61} />
       </div>

       <h1 className='text-font font-boldc text-3xl pb-4 text-center'>E-mail enviado!</h1>

       <p className='font-regularc text-font text-base pb-8 text-center'>
        Um link de recuperação de senha foi enviado para o e-mail lucas.coutinho@gopn.ai{email}
       </p>

       <div className='flex items-center mt-8 flex-col gap-4'>
        <Button
         name='Entendi'
         width={'w-full'}
         height={'h-12'}
         textColor={'text-white'}
         backgroundColor={'bg-blue1'}
         onClick={() => {
          navigate('/login');
         }}
        />
        <Button
         name='Reenviar e-mail'
         width={'w-full'}
         height={'h-12'}
         textColor={'text-white'}
         backgroundColor={'bg-secondary'}
         border={'border-border border-1 '}
         onClick={() => {
          navigate('/lostpassword');
         }}
        />
       </div>
      </>
     }
    />
   ) : (
    <TwoColumnLayout
     page={'EmailSent'}
     column1={
      <div className='h-full w-full flex items-center justify-center'>
       <ImageLostPassword />
      </div>
     }
     column2={
      <div className='flex h-full w-full flex-col justify-center items-center pl-24 pr-16 pb-4 m-1'>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h1 className='text-font font-boldc text-3xl pb-4 text-center'>E-mail enviado!</h1>

       <p className='font-regularc text-font text-base pb-8 text-center'>
        Um link de recuperação de senha foi enviado para o e-mail lucas.coutinho@gopn.ai{email}
       </p>

       <div className='flex justify-between pt-8 flex-col gap-4'>
        <Button
         name='Entendi'
         width={'w-56'}
         height={'h-12'}
         textColor={'text-white'}
         backgroundColor={'bg-blue1'}
         onClick={() => {
          navigate('/login');
         }}
        />
        <Button
         name='Reenviar e-mail'
         width={'w-56'}
         height={'h-12'}
         textColor={'text-white'}
         backgroundColor={'bg-secondary'}
         border={'border-border border-1 '}
         onClick={() => {
          navigate('/lostpassword');
         }}
        />
       </div>
      </div>
     }
    />
   )}
  </>
 );
};

export default EmailSent;
