import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';

import ArrowLeft from '../../../../../images/svg/ArrowLeft';
import ImgPlaceholderIcon from '../../../../../images/svg/ImgPlaceholderIcon';

import SidebarLayout from '../../../../../layouts/Desktop/SidebarLayout';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

const CreateProducts = () => {
 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const navigate = useNavigate();
 const [images, setImages] = useState([])
 const fileInputRef = useRef()

 const handleFile = (e) => {
    const newFile = e.target.files
    const newFilesArray = [...images, newFile[0]]
    setImages(newFilesArray)
  }

  const handleAddImage = () => {
    fileInputRef.current.click()
  }

 const postInfos = () => {};

 return (
  <SidebarLayout
   content={
    <div className='flex flex-col gap-10 pb-10'>
     <div className='flex items-center gap-9'>
      <div
       onClick={() => {
        navigate('/products');
       }}
       className='cursor-pointer'
      >
       <ArrowLeft />
      </div>
      <Header page='Criar produto' name='Teste' />
     </div>
     <form onSubmit={handleSubmit(postInfos)} className='flex gap-9'>
      <div className='w-1/2 h-full border border-border rounded-xl'>
       <div className='border-b border-border py-3 pl-8'>
        <p className='text-base text-black font-medium'>Informações do produto</p>
       </div>
       <div className='flex flex-col p-7'>
        <Input
         label='Nome do produto *'
         error={errors.email}
         placeholder='Insira o nome do produto'
         validate={{
          required: 'Campo obrigatório!',
         }}
         registerKey={'email'}
         register={register}
        />
        <Input
         label='Descrição do produto *'
         error={errors.email}
         placeholder='Insira a descrição do produto'
         validate={{
          required: 'Campo obrigatório!',
         }}
         registerKey={'email'}
         register={register}
        />
        <div className='flex items-center justify-between gap-5'>
         <Input
          label='Categoria *'
          error={errors.email}
          placeholder='Selecione'
          validate={{
           required: 'Campo obrigatório!',
          }}
          registerKey={'email'}
          register={register}
         />
         <Input label='SKU' error={errors.email} placeholder='Insira o SKU do produto' registerKey={'email'} register={register} />
        </div>
        <div className='flex items-center justify-between gap-5'>
         <Input label='Estoque' error={errors.email} placeholder='Insira a QTD em estoque' registerKey={'email'} register={register} />
         <Input label='Estoque minimo' error={errors.email} placeholder='Insira a QTD miníma' registerKey={'email'} register={register} />
        </div>
        <div className='flex items-center justify-between gap-5'>
         <Input label='Peso' error={errors.email} placeholder='Insira o peso do produto' registerKey={'email'} register={register} />
         <Input label='Valor base' error={errors.email} placeholder='Insira o valor base' registerKey={'email'} register={register} />
        </div>
       </div>
      </div>
      <div className='w-1/2 flex flex-col gap-6'>
       <div className='w-full border border-border rounded-xl'>
        <div className='border-b border-border py-3 pl-8'>
         <p className='text-base text-black font-medium'>Conteúdo do produto</p>
        </div>
        <div className="p-3 w-full flex flex-nowrap gap-4 overflow-x-auto items-center">
            {images.length > 0 ? (
            images.map((file, key) => {
                return (
                <div
                    key={key}
                    className="min-w-28 min-h-28  max-w-28 max-h-28 border border-gray-60 rounded-lg p-1"
                >
                    <img
                    src={URL.createObjectURL(file)}
                    alt="imagem do produto"
                    className="w-full h-full object-cover"
                    />
                </div>
                )
            })
            ) : (
                <div className="border min-w-28 max-w-28 min-h-28 max-h-28 flex flex-col justify-center items-center gap-2 rounded-md border-dashed text-center">
                    <ImgPlaceholderIcon />
                    <span className='text-sm px-2'>Upload foto ou vídeo</span>
                </div>
            )}
            <button
                    className="bg-primar text-white min-w-8 min-h-8 rounded-full text-2xl"
                    type="button"
                    onClick={handleAddImage}
                    disabled={images.length >= 5}
                >
                    +
            </button>
            <input
                type="file"
                name="file"
                accept="image/png, image/jpeg, image/webp"
                ref={fileInputRef}
                onChange={handleFile}
                className="hidden"
            />
        </div>
       </div>
       <div className='w-full border border-border rounded-xl'>
        <div className='border-b border-border py-3 pl-8'>
         <p className='text-base text-black font-medium'>Variações</p>
        </div>
        <div className='flex flex-col p-7'></div>
       </div>
      </div>
     </form>
     <div className='w-full flex flex-col items-end'>
      <Button
       name='Criar produto'
       width={'w-48'}
       height={'h-10'}
       textColor={'text-white'}
       backgroundColor={'bg-primar'}
       border={'border-border border-1 '}
       onClick={() => {}}
      />
     </div>
    </div>
   }
  />
 );
};
export default CreateProducts;
