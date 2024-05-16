import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import InputPassword from '../../../../components/InputPassword';

import Logo from '../../../../images/svg/Logo';

const Login = () => {
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });
 const navigate = useNavigate();

 const {
  handleSubmit,
  control,
  formState: { errors },
 } = useForm({
    defaultValues: {
        email: '',
        password: '',
        },
 });

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
         name='email'
         control={control}
         placeholder='Insira o e-mail'
         rules={{
          required: 'Campo obrigatório!',
          pattern: {
           value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
           message: 'E-mail inválido!',
          },
         }}
         error={errors.email}
        />
        <InputPassword
         label='Senha'
         name='password'
         control={control}
         placeholder='Iinsira uma senha'
         rules={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
         error={errors.password}
        />

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
    <div className='flex flex-col justify-center items-center h-screen px-4 w-100'>
     <div className='w-4/12'>
      <div className='mb-10'>
       <Logo />
      </div>
      <h1 className='text-primar font-boldc text-3xl pb-4'>Dados de acesso</h1>

      <form onSubmit={handleSubmit(postLogin)} className='flex flex-col'>
       <Input
        label='E-mail'
        name='email'
        control={control}
        placeholder='Insira o e-mail'
        rules={{
         required: 'Campo obrigatório!',
         pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'E-mail inválido!',
         },
        }}
        error={errors.email}
       />
       <InputPassword
        label='Senha'
        name='password'
        control={control}
        placeholder='Iinsira uma senha'
        rules={{
         required: 'Campo obrigatório!',
         minLength: {
          value: 8,
          message: 'Mínimo 8 caracteres!',
         },
        }}
        error={errors.password}
       />

       <div className='flex justify-between pt-4'>
        <Button
         name='Entrar'
         width='w-100'
         height={'h-12'}
         textColor={'text-white'}
         backgroundColor='bg-primar'
         type='submit'
         onClick={() => {
          navigate('/orders');
         }}
        />
       </div>
      </form>
     </div>
    </div>
   )}
  </>
 );
};

export default Login;
