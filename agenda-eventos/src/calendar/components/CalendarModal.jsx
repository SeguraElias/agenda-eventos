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

    const onCloseModal = () => {
        console.log('Cerrando el Modal...')
    }

    return(
      <Modal 
        isOpen={true}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hola Mundooooo!!!!</h2>
        <hr />
        <p>Párrafo del modal..</p>
      </Modal>
    
    )
}