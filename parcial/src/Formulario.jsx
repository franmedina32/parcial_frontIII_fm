import React, { useState } from 'react'
import Card from './Card';
import './estilos.css'

export const Formulario = () => {
    const [datos,setDatos] = useState({
        nombre: '',
        equipo: '',
        grande: 'chico'
    });

    const pattern = /^\s+/;

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)



    const handleSubmit = (event) => {
        event.preventDefault()
        const hasBlankCh = pattern.test(datos.nombre);
        if (datos.nombre.length > 3 && !hasBlankCh===true && datos.equipo.length >= 6){
            setShow(true)
            setErr(false)
            setTimeout(function(){
                setShow(false)
            }, 3000)
            if(datos.equipo === 'independiente' || datos.equipo === 'river' || datos.equipo === 'boca'){
                setDatos({...datos, grande: 'GRANDE'})
            }
        }
        else {
            setErr(true)
            setTimeout(function(){
                setErr(false)
            }, 3000)
        }
    }

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='labelInputs'>
                <label className='label'>Nombre</label>
                <input className='input' type='text' onChange={(e) => setDatos({...datos, nombre: e.target.value})}></input>
            </div>
            <div className='labelInputs' id='segundo'>
                <label className='label'>Indica tu equipo favorito</label>
                <input className='input' type='text' onChange={(e) => setDatos({...datos, equipo: e.target.value})}></input>
            </div>
            <button className='button'>Enviar</button>
            <div className='errorMsg'>
            {err && 'Por favor chequea que la información sea correcta'}
            </div>
        </form>
        {show && <Card nombre={datos.nombre} equipo={datos.equipo} grande={datos.grande}></Card>}
    </div>
  )
}

export default Formulario
