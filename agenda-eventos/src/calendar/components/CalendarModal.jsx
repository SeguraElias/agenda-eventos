import { useState } from 'react';
import Modal from 'react-modal';
import '../../styles.css'

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
        overlayClassName='modal-fondo'
        closeTimeoutMS={ 200 }
      >
        <h2>Nuevo evento</h2>
        <hr />
        <form className='container'>
          <div className="form-group mb-2">
            <label>Fecha y hora de inicio</label>
            <input type="text" placeholder="Fecha inicio" className="form-control" />
          </div>

          <div className="form-group mb-2">
            <label>Fecha y hora de fin</label>
            <input type="text" placeholder="Fecha fin" className="form-control" />
          </div>
        </form>
      </Modal>
    
    )
}