let Ambiente = '';

Ambiente = 'Local';
// Ambiente = 'Desarrollo';
//Ambiente = 'QA';
// Ambiente = 'Produ';


let ruta_apis_alumnos = '';
let ruta_apis_cursos = '';
let ruta_apis_tipo_cambio = '';

switch(Ambiente){
    case 'Local':
        ruta_apis_alumnos = "http://localhost:3001/";
        ruta_apis_cursos = "http://localhost:3002/";
        ruta_apis_tipo_cambio = "http://localhost:3003";
        break;
    case 'Desarrollo':
        ruta_apis_alumnos = "http://192.168.42.13:3001/";
        ruta_apis_cursos = "http://1192.168.42.13:3002/";
        ruta_apis_tipo_cambio = "http://192.168.88.40:3001/";
        break;
    case 'QA':
        ruta_apis_alumnos = "http://192.168.51.20:3001/";
        ruta_apis_cursos = "http://192.168.51.20:3002/";
          ruta_apis_tipo_cambio = "http://192.168.88.40:3001/";
        break;
    case 'Produ':
        ruta_apis_alumnos = "https://apis.bancoamerica.com:3001/";
        ruta_apis_cursos = "https://apis.bancoamerica.com:3002/";
        ruta_apis_tipo_cambio = "http://192.168.88.40:3001/";
        break;               
    default:
        ruta_apis_alumnos = "http://localhost:3001/";
        ruta_apis_cursos = "http://localhost:3002/";
        ruta_apis_tipo_cambio = "http://192.168.88.40:3001/";
        break;  
}



 export const rutas_endpoint = {

    getAlumnoById : ruta_apis_alumnos + "api/alumnos/listarPorId/",

    createAlumno : ruta_apis_alumnos + "api/alumnos/insertar",

    //Listar todos los alumnos
    getAllAlumnos: ruta_apis_alumnos + "api/alumnos/listarTodos",

    //Activar o inactivar un alumno
    delete_Logico_O_Fisico_Alumno: ruta_apis_alumnos + "api/alumnos/activarOinactivar",

    //Actualizar un alumno
    update_Alumno: ruta_apis_alumnos + "api/alumnos/actualizacionTotal/",

    getAllCursos: ruta_apis_cursos +  "api/cursos/listarTodos"


}