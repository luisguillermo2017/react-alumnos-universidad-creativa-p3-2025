import React from 'react'
import Titulo from '../components/Titulo'
import SubTitulo from '../components/SubTitulo'
import FormularioCrearAlumno from '../components/FormularioCrearAlumno'

export default function CrearAlumno() {
  return (
    <>
        <div className='container'>

            <center>
                <Titulo titulo='Crear Alumno' />
            </center>

            <SubTitulo SubTitulo='Por favor ingrese los siguientes datos:' />

            <FormularioCrearAlumno />

        </div>
    </>
  )
}
