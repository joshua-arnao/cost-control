import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setanimateModal] = useState(false)

  const handleNewSpent = () => {
    setModal(true)

    setTimeout(() => {
      setanimateModal(true)
    }, 200)
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img
            src={IconNewSpent}
            alt='icon new spent'
            onClick={handleNewSpent}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setanimateModal={setanimateModal}
        />
      )}
    </div>
  )
}

export default App
