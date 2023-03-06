import React from 'react'
import Spend from './Spend'

const ListExpenses = ({ expenses }) => {
  return (
    <div className='listado-gastos contenedor'>
      {/* {expenses ? <h2>Listado de Gastos</h2> : <p>Aún no hay gastos</p>} */}
      <h2>{expenses.length ? 'Listado de Gastos' : 'No hay gastos aún'}</h2>

      {expenses.map((spend) => (
        <Spend key={spend.id} spend={spend} />
      ))}
    </div>
  )
}

export default ListExpenses
