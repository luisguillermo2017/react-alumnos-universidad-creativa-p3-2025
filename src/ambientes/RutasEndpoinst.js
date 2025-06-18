/*
Mas adelante, en  este mismo archivo, se programaran los diferentes ambientes para:
Producción, QA, Desarrollo Local, Desarrollo en Servidores
Por ahora solamente estarán las rutas
*/

 export const rutas_endpoint = {

    createAlumno : "http://localhost:3001/api/alumnos/insertar",

    //Listar todos los alumnos
    getAllAlumnos: "http://localhost:3001/api/alumnos/listarTodos",

    //Activar o inactivar un alumno
    delete_Logico_O_Fisico_Alumno: "http://localhost:3001/api/alumnos/activarOinactivar",
}