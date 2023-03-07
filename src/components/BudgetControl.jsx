import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({
  budget,
  setBudget,
  expenses,
  setExpenses,
  setIsValidBudget
}) => {
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

  const handleRestApp = () => {
    console.log('Reseteando la app...')

    const result = confirm('¿Deseas reiniciar presupuesto y gastos?')
    if (result) {
      setExpenses([])
      setBudget('')
      setIsValidBudget(false)
    }
  }

  return (
    <div className='container-budget container shade two-columns'>
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#ffac4d',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#ffac4d'
          })}
          text={`${percentage}% Gastado`}
        />
      </div>

      <div className='content-budget'>
        <button className='reset-app' type='button' onClick={handleRestApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {amountFormat(budget)}
        </p>

        <p className={`${available < 0 ? 'negativo' : ''}`}>
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
