import { useState } from 'react';
import { useForm } from 'react-hook-form';

import XClose from '../../../../../../../images/svg/XClose';
import AvatarIcon from '../../../../../../../images/svg/AvatarIcon';
import CamIcon from '../../../../../../../images/svg/CamIcon';

import Button from '../../../../../../../components/Button';
import Input from '../../../../../../../components/Input';

import { usePurchases } from '../../../../../../../context/PurchasesContext';

const PurchaseModal = () => {
 const { openNewPurchase, setOpenNewPurchase } = usePurchases();
  const [avatar, setAvatar] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
   } = useForm();

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0])
  };

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenNewPurchase(false);
  }
 };

 const handleCreate = async (data) => {
  console.log(data)
};

 return (
  <div className='flex flex-col gap-3'>
       <Button
        name='Nova compra'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        onClick={() => {
            setOpenNewPurchase(true);
        }}
       />
   {openNewPurchase && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <form onSubmit={handleSubmit(handleCreate)} className='w-[605px] min-h-[566px] bg-offWhite rounded-3xl z-20 drop-shadow-md shadow-slate-700'>
       
      <div className='flex items-center justify-between p-6'>
        <div className='flex items-center gap-3'>
          <div
            className='cursor-pointer'
            onClick={() => {
              setOpenNewPurchase(false);
            }}
          >
            <XClose />
          </div>
          <p className='text-lg text-black font-medium'>Nova compra</p>
        </div>

        <Button name='Criar' width={'w-28'} height={'h-8'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
      </div>
      <div className='border-t border-border'>
        <div className='flex justify-center py-10'>
          <div className='relative'>
            <label htmlFor='avatar' className='relative cursor-pointer bg-red4 rounded-full overflow-hidden h-24 w-24'>
              {avatar ? <img alt="avatar do cliente" className='w-full h-full object-fill' src={URL.createObjectURL(avatar)} /> : <AvatarIcon className="mx-3 my-2" />}
            </label>
            <div className="absolute bg-primar bottom-1 right-1 rounded-full p-1 border-2 border-white">
              <CamIcon />
            </div>
            <input 
              type="file" 
              name="avatar" 
              id="avatar"
              className='hidden'
              onChange={handleAvatarChange} 
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 p-6'>
          <div>
            <Input
              label="Selecione o fornecedor"
              error={errors.supplier}
              placeholder="Insira a razão social"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'supplier'}
              register={register}
            />
            <Input
              label="Produto"
              error={errors.name}
              placeholder="Insira o nome do produto"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'name'}
              register={register}
            />
            <Input
              label="SKU"
              error={errors.credits}
              placeholder="Insira o sku do produto"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'sku'}
              register={register}
            />
          </div>

          <div>
            <Input
              label="Quantidade"
              error={errors.quantity}
              placeholder="Insira a quantidade da compra"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'quantity'}
              register={register}
            />
            <Input
              label="Valor unitário"
              error={errors.value}
              placeholder="Insira o valor unitário"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'value'}
              register={register}
            />
          </div>
        </div>
      </div>
     </form>
    </div>
   )}
  </div>
 );
};

export default PurchaseModal;
