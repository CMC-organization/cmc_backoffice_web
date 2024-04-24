import Close from "../../images/svg/Close"


const ModalActionsMobile = ({ close, showModalEdit, showModalDelete, title }) => {
    return (
        <div className='w-full h-full fixed flex flex-col bottom-0 z-20 justify-between bg-modalbackground'>
            <div className='w-full h-full' onClick={close} />
            <div className='w-full border-border border-1 rounded-t-2xl bg-primar drop-shadow-md shadow-slate-700'>
                <div className='border-border w-full flex items-center justify-between h-20 border-b-2 px-3'>
                    <p className='text-font font-boldc text-2xl'>Ações</p>
                    <div onClick={close} className='cursor-pointer'>
                        <Close width={18} height={18} />
                    </div>
                </div>
                <div className='flex flex-col bg-primar px-0 pt-0 h-60'>
                    <div className='flex w-full justify-center items-center border-border border-b-2 h-16 cursor-pointer' onClick={() => { showModalEdit(); close() }}>
                        <p className='text-font font-semiboldc text-center text-base xl:text-lg 2xl:text-xl'>Editar {title}</p>
                    </div>
                    <div className='flex w-full justify-center items-center border-border border-b-2 h-16 cursor-pointer' onClick={() => { showModalDelete(); close() }}>
                        <p className='text-red1 font-semiboldc  text-center text-base xl:text-lg 2xl:text-xl'>Excluir {title}</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ModalActionsMobile