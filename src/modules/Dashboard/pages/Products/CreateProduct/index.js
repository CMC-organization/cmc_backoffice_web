import { useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ArrowLeft from '../../../../../images/svg/ArrowLeft';
import CloudIcon from '../../../../../images/svg/CloudIcon';
import TrashIcon from '../../../../../images/svg/TrashIcon';

import Button from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import InputSelect from '../../../../../components/InputSelect';
import SidebarLayout from '../../../../../layouts/Desktop/SidebarLayout';
import ImagesProduct from '../Components/ImagesProduct';

const categories = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];

const CreateProducts = () => {
 const {
  handleSubmit,
  control,
  formState: { errors },
  watch,
 } = useForm({
  defaultValues: {
    name: '',
    description: '',
    categories: '',
    sku: '',
    stock: '',
    minimun: '',
    weigth: '',
    value: '',
    }
  }
 );

 const { fields, append, remove } = useFieldArray({ control, name: "variables" });
 const navigate = useNavigate();
 const fileInputRef = useRef();
 const [images, setImages] = useState([]);
 const [icons, setIcons] = useState([]);

 const handleFile = (e) => {
  const newFile = e.target.files;
  setImages([...images, newFile[0]]);
 };

 const handleIconChange = (e, index) => {
  const allIcons = [...icons];
  allIcons[index] = e.target.files[0];
  setIcons(allIcons);
};

const handleAddVariable = () => {
  append({ variable: "", icon: "", option: "", value: "" });
};
watch("variables");

const handleRemoveVariable = (index) => {
  remove(index);
  const allIcons = [...icons];
  allIcons.splice(index, 1);
  setIcons(allIcons);
};

const onSubmit = (data) => {
  console.log(data);
  console.log(images);
  console.log(icons);
 };

 return (
  <SidebarLayout
   content={
    <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10 pb-10'>
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
     <div className='flex gap-9'>
      <div className='w-1/2 h-full border border-border rounded-xl'>
       <div className='border-b border-border py-3 pl-8'>
        <p className='text-base text-black font-medium'>Indivações do produto</p>
       </div>
       <div className='flex flex-col p-7'>
        <Input
         label='Nome do produto *'
         name='name'
         control={control}
         placeholder='Insira o  nome do produto'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.name}
        />
        <Input
         label='Descrição do produto *'
         name='description'
         control={control}
         placeholder='Insira a descrição do produto'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.description}
        />
        <div className='flex  justify-between gap-5'>
         <InputSelect label='Categoria *' name='categories' control={control} placeholder='Selecione' options={categories} optionLabel={'name'} />
         <Input label='SKU' name='sku' control={control} placeholder='Insira o SKU do produto' error={errors.sku} />
        </div>
        <div className='flex items-center justify-between gap-5'>
         <Input label='Estoque' name='stock' control={control} placeholder='Insira a QTD em estoque' error={errors.stock} />
         <Input label='Estoque minimo' name='minimun' control={control} placeholder='Insira a QTD mínima' error={errors.minimun} />
        </div>
        <div className='flex items-center justify-between gap-5'>
         <Input label='Peso' name='weigth' control={control} placeholder='Insira o peso do produto' error={errors.weigth} />
         <Input label='Valor base' name='value' control={control} placeholder='Insira o valor base' error={errors.value} />
        </div>
       </div>
      </div>
      <div className='w-1/2 flex flex-col gap-6'>
       <div className='w-full border border-border rounded-xl'>
        <div className='border-b border-border py-3 pl-8'>
         <p className='text-base text-black font-medium'>Conteúdo do produto</p>
        </div>
        <div className='p-3 w-full flex flex-nowrap gap-4 overflow-x-auto items-center'>
         <ImagesProduct images={images} />
         <button className='bg-primar text-white min-w-8 min-h-8 rounded-full text-2xl' type='button' onClick={() =>  fileInputRef.current.click()}>
          +
         </button>
         <input type='file' name='file' accept='image/png, image/jpeg, image/webp' ref={fileInputRef} onChange={handleFile} className='hidden' />
        </div>
       </div>


       <div className='w-full border border-border rounded-xl'>
        <div className='border-b border-border py-3 pl-8'>
         <p className='text-base text-black font-medium'>Variações</p>
        </div>
        <div className='px-4 overflow-auto h-96'>
          {fields.map((field, index) => (
            <div key={field.id} className='flex border-b py-4'>
              <div className='flex items-start pr-4 pt-7'>
                <span className='bg-primar rounded-full px-3 py-2 text-white font-medium text-xl'>{index+1}</span>
              </div>

              <div>
                <div className='flex gap-3'>
                  <Input
                    label='Nome da variavel'
                    name={`variables[${index}].variable`}
                    control={control}
                    placeholder='Insira o nome do variavel'
                    rules={{
                      required: 'Campo obrigatório!',
                    }}
                    error={errors.variables && errors.variables[index] && errors.variables[index].variable}
                  />
                  <button className='pb-2' onClick={() => handleRemoveVariable(index)}>
                    <TrashIcon />
                  </button>
                </div>

                <div className='pb-4'>
                  <label htmlFor={`icon${index}`} className='cursor-pointer rounded-full overflow-hidden h-11 w-full border-2 border-dashed flex justify-center'>
                    {icons[index] ? (
                    <img alt='icone do produto' className='w-full h-full object-fill' src={URL.createObjectURL(icons[index])} />
                    ) : (
                    <div className='flex items-center text-sm font-medium'>
                      <CloudIcon className='mx-3 my-2' />
                      <span>Upload do icone</span>
                    </div>
                    )}
                  </label>
                  <input type='file' name={`variables[${index}].icon`} id={`icon${index}`} className='hidden' onChange={(event) => handleIconChange(event, index)} />
                </div>

                <div className='flex gap-4'>
                  <Input name={`variables[${index}].option`} label='Opção' error={errors.variables && errors.variables[index] && errors.variables[index].option} placeholder='Insira o nome' control={control} />
                  <Input name={`variables[${index}].value`} label='Valor adicional' error={errors.variables && errors.variables[index] && errors.variables[index].value} placeholder='0,00' control={control} />
                </div>
                <button className='pb-3' type='button'>
                  <span className='text-primar font-medium text-base'>+ Adicionar opção</span>
                </button>
              </div>
            </div>
          ))}
          <button className='py-3' type='button' onClick={handleAddVariable}>
              <span className='text-primar font-medium text-base'>+ Adicionar nova variavel</span>
          </button>
        </div>
       </div>
      </div>
     </div>
     <div className='w-full flex flex-col items-end'>
      <Button
       type={'submit'}
       name='Criar produto'
       width={'w-48'}
       height={'h-10'}
       textColor={'text-white'}
       backgroundColor={'bg-primar'}
       border={'border-border border-1 '}
       onClick={() => {}}
      />
     </div>
    </form>
   }
  />
 );
};
export default CreateProducts;
