import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const Calendarmodal = () => {

    //estado del modal
    const [ isOpen, setIsOpen ] = useState(true)

    const onCloseModal = () => {
        //console.log('Cerrando el Modal...')
        setIsOpen(false)
    }

    return(
      <Modal 
        isOpen={ isOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        
        className='modal'
        overlayClassName='modal-fond'
        closeTimeoutMS={ 200 }
      >
        <h2>Hola Mundooooo!!!!</h2>
        <hr />
        <p>Párrafo del modal..</p>
      </Modal>
    
    )
}