import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FormularioCrearAlumno() {

    const [nombre, setNombre] = useState('');

    return (

        <>

            <Form>

                <Form.Group className='mb-3'>

                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='Ingresa tu nombre'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>

                    <Form.Label>Apellidos:</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='Ingresa tus apellidos'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>

                    <Form.Label>Fecha de nacimiento:</Form.Label>
                    <Form.Control 
                        type='date'
                        placeholder='Ingresa tu fecha de nacimiento'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>

                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type='email'
                        placeholder='Ingresa tu email'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>

                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='Ingresa tu telefono'
                    />

                </Form.Group>

                <Form.Group className='mb-3'>

                    <Form.Label>Dirección:</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        placeholder='Ingresa tu dirección'
                    />

                </Form.Group>

                <p className='mt-4'>
                    <Button type='submit'>Guardar</Button>
                </p>


                <p>
                    <Button variant='danger' as={Link} to='/'>Cancelar</Button>
                </p>

            </Form>

        </>

    )
}
