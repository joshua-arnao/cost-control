import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
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

const Spend = ({ spend, setEditSpend, deleteSpend }) => {
  const { category, name, amount, id, date } = spend

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditSpend(spend)}>Editar</SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteSpend(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='bills shade'>
          <div className='content-bills'>
            <img src={iconDictionary[category]} alt='Icono Gasto' />

            <div className='description-bills'>
              <p className='categoria'>{category}</p>
              <p className='name-bills'>{name}</p>
              <p className='fecha-bills'>
                Agregado el: {''}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>

          <p className='cantidad-bills'>${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spend
