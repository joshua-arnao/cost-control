import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/Modal'
import { generateId } from './helpers'

import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setanimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [editSpend, setEditSpend] = useState({})

  useEffect(() => {
    console.log('Componente listo')
    if (Object.keys(editSpend).length > 0) {
      handleNewSpent()
    }
  }, [editSpend])

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
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
      />

      {isValidBudget && (
        <>
          <main>
            <ListExpenses
              expenses={expenses}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
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
