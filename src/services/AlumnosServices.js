import axios from 'axios';
import Swal from "sweetalert2";
import { rutas_endpoint } from '../ambientes/RutasEndpoinst';

//Función para devolver todos los alumnos, se va a procesar para divirlos en activos e inactivos
export const getAllAlumnos = async () => {

    try {

        //axios requiere url, parametros, y el header con el tipo de formato de los parametros enviados
        //(tambien se pueden enviar otros datos por el header)

        const { data } = await axios.get(
            rutas_endpoint.getAllAlumnos,
            {},
            {
                'Content-Type': 'applicacion/json',
                //'pais' : 'CR'
            }
        );

        if (data.resultado_tipo === "success") {

            let listAlumno = data.datos;

            //uso de map para cambiar el estado de true o false a activo o inactivo
            //Recorrer cada objeto y cambiar el estado
            //Se usa un map, un esparcir de datos del objeto y luego un if ternario 
            listAlumno = listAlumno.map(
                alumno => {
                    return {
                        //esparcir datos = ...
                        ...alumno,
                        //función ternaria = hago pregunta ? si es verdadero se muestra este dato : sino se muestre este otro
                        Estado: alumno.Estado ? "activo" : "inactivo"
                    }
                }
            );

            //debugger

            //Crear un array que contenga adentro 2 arrays
            //Uno con los datos de los alumnos activos y otro con los inactivos
            //acc resultado de la información procesada que se especifico en el segundo argumento del reduce
            const alumnosActivosInactivos = listAlumno.reduce(
                (acc, alumno) => {
                    if (alumno.Estado === "activo") {
                        acc.activos.push(alumno);
                    }
                    else if (alumno.Estado === "inactivo") {
                        acc.inactivos.push(alumno);
                    }

                    return acc;
                }

                ,
                {
                    activos: [],
                    inactivos: []
                }
            );

            return alumnosActivosInactivos;

        }
        else if (data.resultado_tipo === "warning") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return false;

        }
        else if (data.resultado_tipo === "error") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return false;

        }




    } catch (error) {

        Swal.fire(
            {
                icon: 'info',
                title: "Para su información",
                text: error.message
            }
        );

        return false;

    }

}


export const createAlumno = async (
    {
        nombre,
        apellidos,
        fechaNacimiento,
        email,
        telefono,
        direccion,
        estado
    }
) => {

    try {

        const { data } = await axios.post(
            rutas_endpoint.createAlumno,
            {
                //nombre : nombre,
                nombre,
                apellidos,
                fechaNacimiento,
                email,
                telefono,
                direccion,
                estado
            },
            {
                'Content-Type': 'applicacion/json',
                //'pais' : 'CR'
            }
        );

        //debugger

        if (data.resultado_tipo === "success") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return true;


        }
        else if (data.resultado_tipo === "warning") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return false;

        }
        else if (data.resultado_tipo === "error") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return false;

        }


    } catch (error) {

        Swal.fire(
            {
                icon: 'info',
                title: "Para su información",
                text: error.message
            }
        );

        return false;

    }

}


//Delete logico para inactiva un alumno
export const deleteLogicoAlumno = async (idRecibido, estado) => {

    try {

        const id = Number(idRecibido);

        //axios requiere url, parametros y el header con tipo de formato de los parametros enviados(tambien se pueden enviar otros datos) 
        const { data } = await axios.post(
            rutas_endpoint.delete_Logico_O_Fisico_Alumno,
            {
                //id: id
                id,
                estado
            },
            {
                'Content-Type' : 'applicacion/json',
                //'pais' : 'CR'
            }
            
        );

        //debugger

        if(data.resultado_tipo === "success"){

            Swal.fire({
                icon: 'info',
                title: "Para su información",
                text: data.respuesta_detalle
            });

            return true;

        }
        else if(data.resultado_tipo === "warning"){

            Swal.fire({
                icon: 'info',
                title: "Para su información",
                text: data.respuesta_detalle
            });

            return false;

        }
        else if(data.resultado_tipo === "error"){

            Swal.fire({
                icon: 'info',
                title: "Para su información",
                text: data.respuesta_detalle
            })

            return false;

        }

        
    } catch (error) {

        Swal.fire({
            icon : 'info',
            title: 'Para su información',
            text: error.message
        })

        return false;
        
    }

}


export const getAlumnoById = async (id_alumno) => {

    try {

        //axios requiere url, parametros y el header con tipo de formato de los parametros enviados(tambien se pueden enviar otros datos) 
        const { data } = await axios.get(
            rutas_endpoint.getAlumnoById + id_alumno,
            {},
            {
                'Content-Type' : 'applicacion/json',
                //'pais' : 'CR'
            }
        );

        //debugger

        if(data.resultado_tipo === "success"){

            return data.datos;

        }
        else if(data.resultado_tipo === "warning"){

            Swal.fire({
                icon: 'info',
                title: "Para su información",
                text: data.respuesta_detalle
            });

            return false;

        }
        else if(data.resultado_tipo === "error"){

            Swal.fire({
                icon: 'info',
                title: "Para su información",
                text: data.respuesta_detalle
            })

            return false;

        }

        
    } catch (error) {

        Swal.fire({
            icon : 'info',
            title: 'Para su información',
            text: error.message
        })

        return false;
        
    }

}


export const updateAlumno = async (
    {
        nombre,
        apellidos,
        fechaNacimiento,
        email,
        telefono,
        direccion,
        estado,
        id
    }
) => {

    try {

        const { data } = await axios.put(
            rutas_endpoint.update_Alumno + id,
            {
                //nombre : nombre,
                nombre,
                apellidos,
                fechaNacimiento,
                email,
                telefono,
                direccion,
                estado
            },
            {
                'Content-Type': 'applicacion/json',
                //'pais' : 'CR'
            }
        );

        //debugger

        if (data.resultado_tipo === "success") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return true;


        }
        else if (data.resultado_tipo === "warning") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return false;

        }
        else if (data.resultado_tipo === "error") {

            Swal.fire(
                {
                    icon: 'info',
                    title: "Para su información",
                    text: data.respuesta_detalle
                }
            );

            return false;

        }


    } catch (error) {

        Swal.fire(
            {
                icon: 'info',
                title: "Para su información",
                text: error.message
            }
        );

        return false;

    }

}

