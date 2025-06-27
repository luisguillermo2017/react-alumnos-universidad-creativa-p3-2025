import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Titulo from '../components/Titulo'
import TablaAlumnos from '../components/TablaAlumnos';
import SpinnerApi from '../components/SpinnerApi';


export default function ListaAlumnos() {

  const TextoTitulo = "Lista de Alumnos";

  return (
    <>

      <Titulo titulo={TextoTitulo} />
      <center>
        <Button className='mt-3' variant='primary' as={Link} to='/crearAlumno' >Crear Alumno</Button>
      </center>

      <TablaAlumnos />



    </>
  )
}