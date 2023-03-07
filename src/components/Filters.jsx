import React from 'react'

const Filters = ({ filter, setFilter }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Filtrar Gastos</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value=''> -- Todas las categorias -- </option>
            <option value='saving'>Ahorro</option>
            <option value='food'>Comida</option>
            <option value='house'>Casa</option>
            <option value='expenses'>Gastos varios</option>
            <option value='leisure'>Ocio</option>
            <option value='health'>Salud</option>
            <option value='subscriptions'>Servicios</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
