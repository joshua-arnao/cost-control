import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalSpend = expenses.reduce(
      (total, spend) => spend.amount + total,
      0
    )
    const totalAvaible = budget - totalSpend

    // Calcular el porcentaje gastado
    const newPercentage = (((budget - totalAvaible) / budget) * 100).toFixed(2)

    setTimeout(() => {
      setPercentage(newPercentage)
    }, 600)

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
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6'
          })}
          text={`${percentage}% Gastado`}
        />
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
