import React from 'react'

const BudgetControl = ({ budget }) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>gráfica aquí</p>
      </div>

      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> ${budget}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
