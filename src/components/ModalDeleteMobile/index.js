import Button from '../Button'
import Close from "../../images/svg/Close"


const ModalDeleteMobile = ({ close, handleDelete, title, name }) => {
    return (
        <div className='w-full h-full fixed flex flex-col bottom-0 z-20 justify-between bg-modalbackground'>
            <div className='w-full h-full' onClick={close} />
            <div className='w-full border-border border-1 rounded-t-2xl bg-primar drop-shadow-md shadow-slate-700'>
                <div className='border-border w-full flex items-center justify-between h-20 border-b-2 px-3'>
                    <div className='flex items-center gap-2'>
                        <div onClick={close} className='cursor-pointer'>
                            <Close width={18} height={18} />
                        </div>
                        <p className='text-font font-boldc text-lg'>Excluir plataforma</p>
                    </div>
                    <Button name="Excluir" width={"w-24"} height={"h-10"} textColor={"text-red1"} backgroundColor={"bg-red4"} border={"border-border border-1 "} onClick={() => { handleDelete(); close(); }} />
                </div>
                <div className='flex flex-col justify-center items-center bg-primar px-3 h-60'>
                    <p className='text-font font-semiboldc text-center text-base xl:text-lg 2xl:text-xl'>Tem certeza que deseja excluir {title} {name} ?</p>
                </div>
            </div >
        </div>
    )
}

export default ModalDeleteMobile