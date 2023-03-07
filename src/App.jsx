import { useEffect, useState } from 'react'
import Filters from './components/Filters'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/Modal'
import { generateId } from './helpers'

import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? ''
  )
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : []
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setanimateModal] = useState(false)

  const [editSpend, setEditSpend] = useState({})

  const [filter, setFilter] = useState('')
  const [filterExpenses, setFilterExpenses] = useState([])

  useEffect(() => {
    console.log('Componente listo')
    if (Object.keys(editSpend).length > 0) {
      handleNewSpent()
    }
  }, [editSpend])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? '')
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    const budgetLocalStorage = Number(localStorage.getItem('budget')) ?? ''

    if (budgetLocalStorage > 0) {
      setIsValidBudget(true)
    }
  }, [])

  useEffect(() => {
    if (filter) {
      console.log('Filtrando ...', filter)

      //Filtra gasto por categoria
      const filterExpenses = expenses.filter(
        (spend) => spend.category === filter
      )

      setFilterExpenses(filterExpenses)
    }
  }, [filter])

  const handleNewSpent = () => {
    setModal(true)

    setTimeout(() => {
      setanimateModal(true)
    }, 200)
  }

  const saveSpend = (spend) => {
    //console.log(spend)
    if (spend.id) {
      // Actualizar
      const updateExpenses = expenses.map((spendState) =>
        spendState.id === spend.id ? spend : spendState
      )
      setExpenses(updateExpenses)
    } else {
      // Nuevo Gasto
      spend.id = generateId()
      spend.date = Date.now()
      setExpenses([...expenses, spend])
    }

    setanimateModal(false)

    setTimeout(() => {
      setModal(false)
      setEditSpend({})
    }, 400)
  }

  const deleteSpend = (id) => {
    const updateExpenses = expenses.filter((spend) => spend.id !== id)

    setExpenses(updateExpenses)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />

            <ListExpenses
              expenses={expenses}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
              filter={filter}
              filterExpenses={filterExpenses}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              src={IconNewSpent}
              alt='icon new spent'
              onClick={handleNewSpent}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setanimateModal={setanimateModal}
          saveSpend={saveSpend}
          editSpend={editSpend}
          setEditSpend={setEditSpend}
        />
      )}
    </div>
  )
}

export default App
