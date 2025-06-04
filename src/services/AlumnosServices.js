import axios from 'axios';

//Función para devolver todos los alumnos, se va a procesar para divirlos en activos e inactivos
export const getAllAlumnos = async () => {

    try {

        //axios requiere url, parametros, y el header con el tipo de formato de los parametros enviados
        //(tambien se pueden enviar otros datos por el header)

        const { data } = await axios.get(
            "http://localhost:3001/api/alumnos/listarTodos",
            {},
            {
                'Content-Type': 'applicacion/json',
                //'pais' : 'CR'
            }
        );

        if(data.resultado_tipo === "success"){

            let listAlumno = data.datos;
            
            //uso de map para cambiar el estado de true o false a activo o inactivo
            //Recorrer cada objeto y cambiar el estado
            //Se usa un map, un esparcir de datos del objeto y luego un if ternario 
            listAlumno = listAlumno.map(
                alumno =>
                {
                    return {
                        //esparcir datos = ...
                        ...alumno,
                        //función ternaria = hago pregunta ? si es verdadero se muestra este dato : sino se muestre este otro
                        Estado : alumno.Estado ? "activo" : "inactivo"
                    }
                }
            );

            //debugger

            //Crear un array que contenga adentro 2 arrays
            //Uno con los datos de los alumnos activos y otro con los inactivos
            //acc resultado de la información procesada que se especifico en el segundo argumento del reduce
            const alumnosActivosInactivos = listAlumno.reduce(
                (acc, alumno) =>
                {
                    if(alumno.Estado === "activo"){
                        acc.activos.push(alumno);
                    }
                    else if(alumno.Estado === "inactivo"){
                        acc.inactivos.push(alumno);
                    }

                    return acc;
                }
                
                ,
                {
                    activos : [],
                    inactivos : []
                }
            );

            return alumnosActivosInactivos;

        }
        else if (data.resultado_tipo === "warning"){

        }
        else if (data.resultado_tipo === "error"){
            
        }

        
   

    } catch (error) {

    }

}