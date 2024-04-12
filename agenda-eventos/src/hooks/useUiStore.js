import { useDispatch, useSelector } from 'react-redux'
import { onCloseDateModal, onOpenDateModal } from '../store/ui/uiSlice'

export const useUiStore = () => {
    const { 
        isDateModalOpen 
    } = useSelector( state => state.ui )

    const dispatch = useDispatch()

    // funcion para abrir modal
    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    }

    // funcion para cerrar modal
    const closeDateModal = () => {
        dispatch( onCloseDateModal() )
    }

    return {
        // * Propiedades
        isDateModalOpen,

        // * Metodos
        openDateModal,
        closeDateModal,
    }
}