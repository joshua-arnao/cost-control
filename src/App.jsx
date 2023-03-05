import { useState } from 'react'
import Header from './components/Header'
import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)

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
          <img src={IconNewSpent} alt='icon new spent' />
        </div>
      )}
    </div>
  )
}

export default App
