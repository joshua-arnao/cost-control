import { useState } from 'react'
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

  const handleNewSpent = () => {
    setModal(true)

    setTimeout(() => {
      setanimateModal(true)
    }, 200)
  }

  const saveSpend = (spend) => {
    // console.log(spend)
    spend.id = generateId()
    spend.date = Date.now()
    setExpenses([...expenses, spend])

    setanimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 400)
  }

  return (
    <div className={modal && 'fijar'}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ListExpenses expenses={expenses} />
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
        />
      )}
    </div>
  )
}

export default App
