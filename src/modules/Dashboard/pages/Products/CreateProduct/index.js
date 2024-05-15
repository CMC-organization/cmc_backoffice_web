import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';

import ArrowLeft from '../../../../../images/svg/ArrowLeft';
import TrashIcon from '../../../../../images/svg/TrashIcon';
import CloudIcon from '../../../../../images/svg/CloudIcon';

import SidebarLayout from '../../../../../layouts/Desktop/SidebarLayout';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import ImagesProduct from '../Components/ImagesProduct';

const CreateProducts = () => {
 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const navigate = useNavigate();
 const [images, setImages] = useState([])
 const fileInputRef = useRef()
 const [variables, setVariables] = useState([])
 const [icon, serIcon] = useState()

 const handleFile = (e) => {
    const newFile = e.target.files
    const newFilesArray = [...images, newFile[0]]
    setImages(newFilesArray)
  }

  const handleAddImage = () => {
    fileInputRef.current.click()
  }

  const handleIconChange = (event) => {
    serIcon(event.target.files[0])
  };

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
            <ImagesProduct images={images} />
            <button
                className="bg-primar text-white min-w-8 min-h-8 rounded-full text-2xl"
                type="button"
                onClick={handleAddImage}
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

        <div className='px-4 py-2'>
            <div className='flex border-b'>
                <div className='flex items-start pr-4 pt-7'>
                    <span className='bg-primar rounded-full px-3 py-2 text-white font-medium text-xl'>1</span>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <Input label='Nome da variavel' error={errors.variable} placeholder='Insira o nome do variavel' registerKey={'variable'} register={register} />
                        <button className='pb-2'>
                            <TrashIcon />
                        </button>
                    </div>

                    <div className='pb-4'>
                        <label htmlFor='icon' className='cursor-pointer rounded-full overflow-hidden h-11 w-full border-2 border-dashed flex justify-center'>
                            {icon ? <img alt="icone do produto" className='w-full h-full object-fill' src={URL.createObjectURL(icon)} /> : 
                            <div className='flex items-center text-sm font-medium'>
                                <CloudIcon className="mx-3 my-2" />
                                <span>Upload do icone</span>
                            </div>
                            }
                        </label>
                        <input 
                        type="file" 
                        name="icon" 
                        id="icon"
                        className='hidden'
                        onChange={handleIconChange} 
                        />
                    </div>

                    <div className='flex gap-4'>
                        <Input label='Opção' error={errors.option} placeholder='Insira o nome' registerKey={'option'} register={register} />
                        <Input label='Valor adicional' error={errors.value} placeholder='0,00' registerKey={'value'} register={register} />
                    </div>
                    <button className='pb-3' type='button'>
                        <span className='text-primar font-medium text-base'>+ Adicionar opção</span>
                    </button>
                </div>
            </div>
          <button className='py-3' type='button'>
            <span className='text-primar font-medium text-base'>+ Adicionar nova variavel</span>
          </button>
        </div>   
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
