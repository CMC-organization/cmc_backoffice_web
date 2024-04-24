import Modal from 'react-bootstrap/Modal';
import Close from "../../images/svg/Close"


const ModalActions = ({ show, close, showModalEdit, showModalDelete, title }) => {
    return (
        <Modal
            centered
            show={show}
            onHide={close}
            scrollable={true}
            animation
        >
            <Modal.Header className='bg-primar border-border'>
                <Modal.Title className='w-full flex items-center justify-between'>
                    <p className='text-font font-boldc text-2xl'>Ações</p>
                    <div onClick={close} className='cursor-pointer'>
                        <Close width={18} height={18} />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='flex flex-col bg-primar px-0 pt-0 h-60'>
                <div className='flex w-full justify-center items-center border-border border-b-2 h-16 cursor-pointer' onClick={() => { showModalEdit(); close() }}>
                    <p className='text-font font-semiboldc text-center text-base xl:text-lg 2xl:text-xl'>Editar {title}</p>
                </div>
                <div className='flex w-full justify-center items-center border-border border-b-2 h-16 cursor-pointer' onClick={() => { showModalDelete(); close() }}>
                    <p className='text-red1 font-semiboldc  text-center text-base xl:text-lg 2xl:text-xl'>Excluir {title}</p>
                </div>
            </Modal.Body>
        </Modal >
    )
}

export default ModalActions