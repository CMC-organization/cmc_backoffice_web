import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import Input from "../../../../../../components/Input"
import CloudIcon from "../../../../../../images/svg/CloudIcon"
import TrashIcon from "../../../../../../images/svg/TrashIcon"

const AddVariables = () => {
    const { control, formState: { errors }, watch } = useForm();
    const { fields, append, remove } = useFieldArray({ control, name: "variables" });
    const [icons, setIcons] = useState([]);

    const handleIconChange = (event, index) => {
        const files = [...icons];
        files[index] = event.target.files[0];
        setIcons(files);
    };

    const handleAddVariable = () => {
        append({ variable: "", icon: "", option: "", value: "" });
    };

    watch("variables");

    const handleRemoveVariable = (index) => {
        remove(index);
        const files = [...icons];
        files.splice(index, 1);
        setIcons(files);
    };

    return (
        <div className='px-4 overflow-auto h-96'>
           {fields.map((field, index) => (
            <div key={field.id} className='flex border-b py-4'>
                     <div className='flex items-start pr-4 pt-7'>
                      <span className='bg-primar rounded-full px-3 py-2 text-white font-medium text-xl'>{index+1}</span>
                     </div>
                     <div>
             <div>
              <div className='flex gap-3'>
               <Input
                name={`variables[${index}].variable`}
                label='Nome da variavel'
                error={errors.variables && errors.variables[index] && errors.variables[index].variable}
                placeholder='Insira o nome do variavel'
                control={control}
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
         </div>
           ))}
            <button className='py-3' type='button' onClick={handleAddVariable}>
                <span className='text-primar font-medium text-base'>+ Adicionar nova variavel</span>
            </button>
        </div>
    )
}

export default AddVariables
