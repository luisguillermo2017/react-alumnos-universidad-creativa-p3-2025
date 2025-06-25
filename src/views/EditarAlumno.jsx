import React from 'react'
import Titulo from '../components/Titulo'
import SubTitulo from '../components/SubTitulo'
import FormularioEditarAlumno from '../components/FormularioEditarAlumno'

export default function EditarAlumno() {
  return (
    
    <>
            <div className='container'>
    
                <center>
                    <Titulo titulo='Editar Alumno' />
                </center>
    
                <SubTitulo SubTitulo='Por favor ingrese los siguientes datos:' />
    
                <FormularioEditarAlumno />
    
            </div>
        </>

  )
}
