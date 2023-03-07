import React from 'react'
import './estilos.css'

const Card = ({nombre, equipo, grande}) => {
  return (
    <div className='cardDiv'>
        <h3 className='cardMsg'>Hola {nombre}! sos incha de {equipo}, todos sabemos que {equipo} es un club {grande}</h3>
    </div>
  )
}

export default Card