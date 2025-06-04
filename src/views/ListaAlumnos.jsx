import React from 'react'
import Titulo from '../components/Titulo'
import TablaAlumnos from '../components/TablaAlumnos';

export default function ListaAlumnos() {

    const TextoTitulo = "Lista de Alumnos";

  return (
    <>
    
    <Titulo titulo={TextoTitulo} />
    <TablaAlumnos />
    
     {/* Tabla */}

    </>
  )
}