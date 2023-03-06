import React, { useEffect, useState } from 'react'

const BudgetControl = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalSpend = expenses.reduce(
      (total, spend) => spend.amount + total,
      0
    )

    const totalAvaible = budget - totalSpend

    setAvailable(totalAvaible)
    setSpent(totalSpend)
  }, [expenses])

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
          <span>Disponible: </span> {amountFormat(available)}
        </p>

        <p>
          <span>Gastado: </span> {amountFormat(spent)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
