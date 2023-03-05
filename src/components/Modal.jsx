import React from 'react'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setanimateModal }) => {
  const hideModal = () => {
    setanimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 400)
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CloseBtn} alt='Cerrar Modal' onClick={hideModal} />
      </div>

      <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
          <label htmlFor='name'>Nombre Gasto</label>
          <input
            id='name'
            type='text'
            placeholder='Añade el nombre del Gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='amount'>Cantidad</label>
          <input
            id='amount'
            type='number'
            placeholder='Añade la cantidad del gasto. ej: 300'
          />
        </div>

        <div className='campo'>
          <label htmlFor='category'>Categoría</label>
          <select id='category'>
            <option value=''> -- Seleccionar -- </option>
            <option value='saving'>Ahorro</option>
            <option value='food'>Comida</option>
            <option value='house'>Casa</option>
            <option value='bills'>Gastos varios</option>
            <option value='leisure'>Ocio</option>
            <option value='health'>Salud</option>
            <option value='services'>Servicios</option>
          </select>
        </div>

        <input type='submit' value='Eñadir gastos' />
      </form>
    </div>
  )
}

export default Modal
