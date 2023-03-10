import React, { useEffect, useState } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({
  setModal,
  animateModal,
  setanimateModal,
  saveSpend,
  editSpend,
  setEditSpend
}) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setName(editSpend.name)
      setAmount(editSpend.amount)
      setCategory(editSpend.category)
      setId(editSpend.id)
      setDate(editSpend.date)
    }
  }, [])

  const hideModal = () => {
    setanimateModal(false)

    setTimeout(() => {
      setModal(false)
      setEditSpend({})
    }, 400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, amount, category].includes('')) {
      setMessage('Todos los fields son obligatorios')

      setTimeout(() => {
        setMessage('')
      }, 3000)
      return
    }
    saveSpend({ name, amount, category, id, date })
  }

  return (
    <div className='modal'>
      <div className='closed-modal'>
        <img src={CloseBtn} alt='Cerrar Modal' onClick={hideModal} />
      </div>

      <form
        className={`form ${animateModal ? 'animar' : 'closed'}`}
        onSubmit={handleSubmit}
      >
        <legend>{editSpend.name ? 'Editar Gasto' : 'Añadir Gasto'}</legend>

        {message && <Message tipo='error'>{message}</Message>}

        <div className='field'>
          <label htmlFor='name'>Gasto:</label>
          <input
            id='name'
            type='text'
            placeholder='Añade el nombre del Gasto'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='field'>
          <label htmlFor='amount'>Cantidad:</label>
          <input
            id='amount'
            type='number'
            placeholder='Añade la cantidad del gasto. ej: 300'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className='field'>
          <label htmlFor='category'>Categoría:</label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''> -- Seleccionar -- </option>
            <option value='saving'>Ahorro</option>
            <option value='food'>Comida</option>
            <option value='house'>Casa</option>
            <option value='expenses'>Gastos varios</option>
            <option value='leisure'>Ocio</option>
            <option value='health'>Salud</option>
            <option value='subscriptions'>Servicios</option>
          </select>
        </div>

        <input
          type='submit'
          value={editSpend.name ? 'Guardar Cambios' : 'Añadir Gasto'}
        />
      </form>
    </div>
  )
}

export default Modal
