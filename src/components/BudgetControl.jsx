import React from 'react'

const BudgetControl = ({ budget }) => {
  const amountFormat = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>gráfica aquí</p>
      </div>

      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> {amountFormat(budget)}
        </p>

        <p>
          <span>Disponible: </span> {amountFormat(0)}
        </p>

        <p>
          <span>Gastado: </span> {amountFormat(0)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
