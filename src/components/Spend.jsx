import React from 'react'
import { formatDate } from '../helpers'
import SavingIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'

const iconDictionary = {
  saving: SavingIcon,
  food: FoodIcon,
  house: HouseIcon,
  expenses: ExpensesIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon
}

const Spend = ({ spend }) => {
  const { category, name, amount, id, date } = spend

  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={iconDictionary[category]} alt='Icono Gasto' />

        <div className='descripcion-gasto'>
          <p className='categoria'>{category}</p>
          <p className='nombre-gasto'>{name}</p>
          <p className='fecha-gasto'>
            Agregado el: {''}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>

      <p className='cantidad-gasto'>${amount}</p>
    </div>
  )
}

export default Spend
