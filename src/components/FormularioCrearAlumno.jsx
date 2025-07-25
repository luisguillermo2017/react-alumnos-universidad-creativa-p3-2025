import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createAlumno } from '../services/AlumnosServices';
import { setEstadoConsultaApiInactivo, setEstadoConsultaApiActivo } from '../store';
import SpinnerApi from './SpinnerApi';

export default function FormularioCrearAlumno() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const estadoConsultaApi = useSelector((state) => state.datosSpinnerRedux.estadoConsultaApi);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const onChangeNombre = (event) => {

        event.preventDefault();

        //Validar que no escriban numeros

        /*
        if (!/\d/.test(event.target.value)) {
           setNombre(event.target.value);
        }

        */

        setNombre(event.target.value);



    }

    const onChangeApellidos = (event) => {

        event.preventDefault();

        setApellidos(event.target.value);
    }


    const onChangeFechaNacimiento = (event) => {

        event.preventDefault();

        setFechaNacimiento(event.target.value);
    }


    const onChangeEmail = (event) => {

        event.preventDefault();

        setEmail(event.target.value);
    }


    const onChangeTelefono = (event) => {

        event.preventDefault();

        setTelefono(event.target.value);
    }


    const onChangeDireccion = (event) => {

        event.preventDefault();

        setDireccion(event.target.value);
    }

    const guardar = async (event) => {

        event.preventDefault();

        //Validaciones
        //if(nombre === null || nombre === '' || nombre === undefined)
        if (
            !nombre ||
            !apellidos ||
            !fechaNacimiento ||
            !email ||
            !telefono ||
            !direccion
        ) {
            Swal.fire(
                {
                    icon: 'info',
                    title: 'Para su información',
                    text: 'Debes completar todos los campos'
                }
            )
        }
        else {

            //Activo el spinner
            dispatch(setEstadoConsultaApiActivo());

            //Se envian los datos del formulario al servicio
            const result = await createAlumno({
                nombre,
                apellidos,
                fechaNacimiento,
                email,
                telefono,
                direccion,
                estado: true
            });

            //Desactivar el spinner
            dispatch(setEstadoConsultaApiInactivo());


            if (result) {
                navigate('/');
            }

        }
    }

    if (estadoConsultaApi) {

        return (

            <div className='d-flex justify-content-center align-items-center vh-100'>
                <SpinnerApi
                    titulo='Creando'
                    subtitulo1='alumno'
                    subtitulo2='información'
                    subtitulo3='un registro'
                    subtitulo4='alumno'
                    subtitulo5='información'
                />
            </div>


        )


    }


    return (

        <>

            <Container>

                <Form onSubmit={guardar}>

                    {/* Fila 1 */}
                    <Row>

                        <Col md={4}>

                            <Form.Group className='mb-3'>

                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Ingresa tu nombre'
                                    value={nombre}
                                    onChange={onChangeNombre}
                                />

                            </Form.Group>

                        </Col>

                        <Col md={4}>

                            <Form.Group className='mb-3'>

                                <Form.Label>Apellidos:</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Ingresa tus apellidos'
                                    value={apellidos}
                                    onChange={onChangeApellidos}
                                />

                            </Form.Group>

                        </Col>

                        <Col md={4}>

                            <Form.Group className='mb-3'>

                                <Form.Label>Fecha de nacimiento:</Form.Label>
                                <Form.Control
                                    type='date'
                                    placeholder='Ingresa tu fecha de nacimiento'
                                    value={fechaNacimiento}
                                    onChange={onChangeFechaNacimiento}
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    {/* Fila 2 */}
                    <Row>

                        <Col md={4}>

                            <Form.Group className='mb-3'>

                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Ingresa tu email'
                                    value={email}
                                    onChange={onChangeEmail}
                                />

                            </Form.Group>

                        </Col>

                        <Col md={4}>

                            <Form.Group className='mb-3'>

                                <Form.Label>Telefono:</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Ingresa tu telefono'
                                    value={telefono}
                                    onChange={onChangeTelefono}
                                />

                            </Form.Group>

                        </Col>

                        <Col md={4}>

                        </Col>

                    </Row>

                    {/* Fila 3 */}
                    <Row>

                        <Col md={12}>

                            <Form.Group className='mb-3'>

                                <Form.Label>Dirección:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder='Ingresa tu dirección'
                                    value={direccion}
                                    onChange={onChangeDireccion}
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                    {/* Fila 4 */}
                    <Row className='mt-4'>

                        <Col md={10}>
                        
                        </Col>

                        <Col md={1}>
                            <Button type='submit'>Guardar</Button>
                        </Col>

                        <Col md={1}>
                            <Button variant='danger' as={Link} to='/'>Cancelar</Button>
                        </Col>

                    </Row>

                </Form>

            </Container>

        </>

    )
}
