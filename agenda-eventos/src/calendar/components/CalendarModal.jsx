import { addHours, differenceInSeconds } from 'date-fns';
import { useMemo, useState } from 'react';
import Modal from 'react-modal';
import Datepicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale/es';
registerLocale('es', es);
import Swal from 'sweetalert2'
import { useUiStore } from '../../hooks';


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

    // estado del modal
    // const [ isOpen, setIsOpen ] = useState(true)

    const { isDateModalOpen, closeDateModal } = useUiStore()

    const [ formSubmitted, setFormSbmitted ] = useState(false)

    const [ formValues, setFormValues ] = useState({
      title: 'Titulo evento',
      notes: 'Descripcion del evento',
      start: new Date(),
      end: addHours( new Date(), 2 )
    })

    // utilizamos el useMemo
    const titleClass = useMemo(() => {

      if ( !formSubmitted ) return ''

      return ( formValues.title.length > 0 ) 
      ? 'is-valid' 
      : 'is-invalid'

    }, [ formValues.title, formSubmitted ])

    const onInputChange = ({ target }) => {
      setFormValues({
        ...formValues,
        [ target.name ]: target.value
      })
    }

    const onDateChanged = (event, changing) => {
      setFormValues({
        ...formValues,
        [ changing ]: event
      })
    }
    
    const onCloseModal = () => {
        closeDateModal()
        //setIsOpen(false)
    }

    const onSubmit = (event) => {
      event.preventDefault()
      setFormSbmitted(true)

      const difference = differenceInSeconds( formValues.end, formValues.start )
      console.log(difference)

      if (isNaN( difference ) || difference <= 0){
        Swal.fire('Las fechas ingresadas no coinciden', 'error')
        return
      }

      if ( formValues.title.length <= 0 ){
        console.log('Es necesario indicar un titulo al evento')
        return
      }

      console.log(formValues)
    }

    return(
      <Modal 
        isOpen={ isDateModalOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={ 200 }
      >
        <h2>Nuevo evento</h2>
        <hr />
        <form className='container' onSubmit={ onSubmit }>
          <div className="form-group mb-2">
            <label>Fecha y hora de inicio</label>
            <Datepicker
              selected={ formValues.start } //fecha de inicio seleccionada
              className='form-control'
              onChange={ (event) => onDateChanged(event, 'start') }
              dateFormat='Pp'
              showTimeSelect
              locale='es'
              timeCaption='Hora'
            />
          </div>

          <div className="form-group mb-2">
            <label>Fecha y hora de fin</label>
            <Datepicker
              minDate={ formValues.start } // para no seleccionar fecha inferior a la de inicio
              selected={ formValues.end } //fecha de inicio seleccionada
              className='form-control '
              onChange={ (event) => onDateChanged(event, 'end') }
              dateFormat='Pp'
              showTimeSelect
              locale='es'
              timeCaption='Hora'
            />
          </div>

          <hr />
          <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input 
              type="text"
              className={`form-control ${ titleClass }`}
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
            type='submit'
          >
            <i className="far fa-save"></i>
            &nbsp;
            <span>Guardar</span>
          </button>
        </form>
      </Modal>
    
    )
}