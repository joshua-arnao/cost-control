import React, { useState } from 'react'
import Message from './Message'

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault()

    if (!budget || budget < 0) {
      setMessage('No es un presupuesto valido')

      return
    }
    setMessage('')
    setIsValidBudget(true)
  }

  return (
    <div className='container-budget container shade'>
      <form onSubmit={handleBudget} className='form'>
        <div className='field'>
          <label>Definir Presupuesto</label>
          <input
            className='new-budget'
            type='number'
            placeholder='Añade Presupuesto'
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />

          <input type='submit' value='Añadir' />

          {message && <Message tipo='error'>{message}</Message>}
        </div>
      </form>
    </div>
  )
}

export default NewBudget
