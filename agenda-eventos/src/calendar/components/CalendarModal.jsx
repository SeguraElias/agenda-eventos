import { addHours } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal';
import Datepicker from 'react-datepicker';
import 'react-datepicker'

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

    const [ formValues, setFormValues ] = useState({
      title: 'Titulo evento',
      notes: 'Descripcion del evento',
      start: new Date(),
      end: addHours( new Date(), 2 )
    })

    const onInputChange = ({ target }) => {
      setFormValues({
        ...formValues,
        [ target.name ]: target.value
      })
    }

    const onDateChanged = (event, changing) 

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
            <Datepicker
              minDate={ formValues.start }
              selected={ formValues.end }
              className='form-control'
              onChange={ (event) => onDateChanged(event, end) }
            />
          </div>

          <div className="form-group mb-2">
            <label>Fecha y hora de fin</label>
            <input type="text" placeholder="Fecha fin" className="form-control" />
          </div>

          <hr />
          <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input 
              type="text"
              className="form-control"
              placeholder='Titulo del evento'
              autoComplete='off' 
              name='title'
              value={ formValues.title }
              onChange={ onInputChange }
            />
            <small className='form-text text-muted'>Una descripcion corta</small>
          </div>

          <div className="form-group mb-2">
            <textarea 
              type='text'
              className='form-control'
              name='notes' 
              rows="5"
              placeholder='Notas'
              value={ formValues.notes }
              onChange={ onInputChange }
              >

            </textarea>
            <small className='form-text text-muted'>Informacion adicional</small>
          </div>

          <button 
            className="btn btn-outline-primary btn-block"
            type='submit'>
              <i className="far fa-save"></i>
              &nbsp;
              <span>Guardar</span>
          </button>
        </form>
      </Modal>
    
    )
}