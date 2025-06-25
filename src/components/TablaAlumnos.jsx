import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Grid } from 'gridjs-react';
import { h } from 'gridjs';
import "gridjs/dist/theme/mermaid.css";
import Swal from 'sweetalert2';
import { getAllAlumnos, deleteLogicoAlumno, getAlumnoById } from "../services/AlumnosServices";
import { setAlumno } from '../store';

export default function TablaAlumnos() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [datosAlumnos, setDatosAlumnos] = useState([]);

  const getInitialData = async () => {

    const result = await getAllAlumnos();

    if (result) {
      setDatosAlumnos(result);
    }



    //debugger

  }

  const actualizarAlumno = async (id) => {

    const result = await getAlumnoById(id);

    if(result){

      //se guarda la información en Redux
      dispatch(setAlumno(result));
      //Se redirecciona a la pagina de editar
       navigate('/editarAlumno');
    }


  }

  const inactivarAlumno = async (id) => {

    Swal.fire({
      title: "Estás seguro de inactivar este alumno?",
      text: "Esta acción puede ser reversada.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, inactivalo."
    }).then((result) => {
      if (result.isConfirmed) {

        accionInactivar(id);

      }
    });

  }


  const accionInactivar = async (id) => {

    const result = await deleteLogicoAlumno(id, 0);

    if(result){
      getInitialData();
    }

  }

  const activarAlumno = async (id) => {

    Swal.fire({
      title: "Estás seguro de activar este alumno?",
      text: "Esta acción puede ser reversada.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, activalo."
    }).then((result) => {
      if (result.isConfirmed) {

        accionActivar(id);

      }
    });

  }


  const accionActivar = async (id) => {

    const result = await deleteLogicoAlumno(id, 1);

    if(result){
      getInitialData();
    }

  }

  useEffect(
    () => {
      getInitialData();
    },
    []
  )


  return (
    <>

      <Tabs
        defaultActiveKey="TablaActiva"
        id="fill-tab-example"
        className='mt-4 text-black p-3'
      >

        <Tab
          eventKey="TablaActiva"
          title="Lista de alumnos activos"
        >

          <Grid
            data={datosAlumnos.activos || []}
            columns={
              [
                //posicion 0
                { id: 'AlumnoID', name: 'Id ' },
                //posicion 1
                { id: 'Nombre', name: 'Nombre' },
                { id: 'Apellido', name: 'Apellidos' },
                { id: 'FechaNacimiento', name: 'Nacimiento' },
                { id: 'Email', name: 'Email' },
                { id: 'Telefono', name: 'Telefono' },
                { id: 'Direccion', name: 'Direccion' },
                //{ id: 'FechaRegistro', name: 'FechaRegistro' },
                //{ id: 'Estado', name: 'Estado' },
                {
                  name: 'Editar',
                  formatter: (cell, row) => {
                    return h('Button', {
                      className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-warning bg-blue-600',
                      onClick: () => actualizarAlumno(`${row.cells[0].data}`)
                    }, 'Seleccionar');
                  }
                },
                {
                  name: 'Inactivar',
                  formatter: (cell, row) => {
                    return h(
                      'Button',
                      {
                        className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-danger bg-blue-600',
                        onClick: () => inactivarAlumno(`${row.cells[0].data}`)
                      },
                      'Seleccionar'
                    )
                  }

                }
              ]
            }
            sort={true}
            resizable={true}
            language={{
              search: {
                placeholder: 'Escribe para buscar...',
              },
              sort: {
                sortAsc: 'Orden de columna ascendente.',
                sortDesc: 'Orden de columna descendente.',
              },
              pagination: {
                previous: 'Anterior',
                next: 'Siguiente',
                navigate: (page, pages) => `Página ${page} de ${pages}`,
                page: (page) => `Página ${page}`,
                showing: 'Mostrando del',
                of: 'de',
                to: 'al',
                results: 'registros',
              },
              loading: 'Cargando...',
              noRecordsFound: 'Sin coincidencias encontradas.',
              error: 'Ocurrió un error al obtener los datos.',
            }}
            className={{
              table: 'table table-bordered mb-0'
            }}
            search={true}
            pagination={
              {
                enabled: true,
                limit: 10,
              }
            }
          />

        </Tab>

        <Tab
          eventKey="TablaInactiva"
          title="Lista de alumnos inactivos"
        >
          <Grid
            data={datosAlumnos.inactivos || []}
            columns={
              [
                //posicion 0
                { id: 'AlumnoID', name: 'Id ' },
                { id: 'Nombre', name: 'Nombre' },
                { id: 'Apellido', name: 'Apellidos' },
                { id: 'FechaNacimiento', name: 'Nacimiento' },
                { id: 'Email', name: 'Email' },
                { id: 'Telefono', name: 'Telefono' },
                { id: 'Direccion', name: 'Direccion' },
                //{ id: 'FechaRegistro', name: 'FechaRegistro' },
                //{ id: 'Estado', name: 'Estado' },
                {
                  name: 'Activar',
                  formatter: (cell, row) => {
                    return h(
                      'Button',
                      {
                        className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-success bg-blue-600',
                        onClick: () => activarAlumno(`${row.cells[0].data}`)
                      },
                      'Seleccionar'
                    )
                  }

                }
              ]
            }
            sort={true}
            resizable={true}
            language={{
              search: {
                placeholder: 'Escribe para buscar...',
              },
              sort: {
                sortAsc: 'Orden de columna ascendente.',
                sortDesc: 'Orden de columna descendente.',
              },
              pagination: {
                previous: 'Anterior',
                next: 'Siguiente',
                navigate: (page, pages) => `Página ${page} de ${pages}`,
                page: (page) => `Página ${page}`,
                showing: 'Mostrando del',
                of: 'de',
                to: 'al',
                results: 'registros',
              },
              loading: 'Cargando...',
              noRecordsFound: 'Sin coincidencias encontradas.',
              error: 'Ocurrió un error al obtener los datos.',
            }}
            className={{
              table: 'table table-bordered mb-0'
            }}
            search={true}
            pagination={
              {
                enabled: true,
                limit: 10,
              }
            }
          />
        </Tab>


      </Tabs>


    </>
  )
}
