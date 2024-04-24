import Modal from 'react-bootstrap/Modal';

import Close from "../../images/svg/Close"
import Button from "../../components/Button"


const ModalDelete = ({ show, close, handleDelete, name, title }) => {
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
                    <div className='flex items-center gap-3'>
                        <div onClick={close} className='cursor-pointer'>
                            <Close width={18} height={18} />
                        </div>
                        <p className='text-font font-boldc text-xl'>Excluir {title}</p>
                    </div>
                    <Button name="Excluir" width={"w-32"} height={"h-10"} textColor={"text-red1"} backgroundColor={"bg-red4"} border={"border-border border-1 "} onClick={() => { handleDelete(); close(); }} />

                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='flex justify-center items-center bg-primar px-4 pt-0 h-60'>
                <p className='text-font font-semiboldc text-center text-base xl:text-lg 2xl:text-xl'>Tem certeza que deseja excluir {title} {name} ?</p>
            </Modal.Body>
        </Modal>
    )
}

export default ModalDelete