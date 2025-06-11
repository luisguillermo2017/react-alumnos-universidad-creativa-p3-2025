import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImagenError404 from '../assets/images/error404.png';
import Titulo from '../components/Titulo';



export default function Error404() {
  return (
    <>
        <center>
             <Titulo titulo='La página que buscas no existe.' />
        <img 
            src={ImagenError404}
            alt='Imagen Error 404'
            className='mt-4 mb-4'
        />
        <p>
             <Button variant='danger' as={Link} to='/' >Regresar</Button>
        </p>
       
        </center>


       
    </>
  )
}
