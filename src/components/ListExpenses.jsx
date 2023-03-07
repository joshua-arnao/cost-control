import React from 'react'
import Spend from './Spend'

const ListExpenses = ({
  expenses,
  setEditSpend,
  deleteSpend,
  filter,
  filterExpenses
}) => {
  return (
    <div className='list-bills container'>
      {/* {expenses ? <h2>Listado de Gastos</h2> : <p>Aún no hay gastos</p>} */}

      {filter ? (
        <>
          <h2>
            {filterExpenses.length ? 'Listado de Gastos' : 'No hay gastos aún'}
          </h2>
          {filterExpenses.map((spend) => (
            <Spend
              key={spend.id}
              spend={spend}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? 'Listado de Gastos' : 'No hay gastos aún'}</h2>
          {expenses.map((spend) => (
            <Spend
              key={spend.id}
              spend={spend}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ListExpenses
