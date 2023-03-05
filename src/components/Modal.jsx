import React, { useState } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setanimateModal, saveSpend }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')

  const hideModal = () => {
    setanimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, amount, category].includes('')) {
      setMessage('Todos los campos son obligatorios')

      setTimeout(() => {
        setMessage('')
      }, 3000)
      return
    }
    saveSpend({ name, amount, category })
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CloseBtn} alt='Cerrar Modal' onClick={hideModal} />
      </div>

      <form
        className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>

        {message && <Message tipo='error'>{message}</Message>}

        <div className='campo'>
          <label htmlFor='name'>Nombre Gasto</label>
          <input
            id='name'
            type='text'
            placeholder='Añade el nombre del Gasto'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='amount'>Cantidad</label>
          <input
            id='amount'
            type='number'
            placeholder='Añade la cantidad del gasto. ej: 300'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='category'>Categoría</label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
