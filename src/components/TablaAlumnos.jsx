import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Grid } from 'gridjs-react';
import { h } from 'gridjs';
import "gridjs/dist/theme/mermaid.css";
import { getAllAlumnos } from "../services/AlumnosServices";

export default function TablaAlumnos() {

  const [datosAlumnos, setDatosAlumnos] = useState([]);

  const getInitialData = async () => {

    const result = await getAllAlumnos();

    if (result) {
      setDatosAlumnos(result);
    }



    //debugger

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
                { id: 'Nombre', name: 'Nombre' },
                { id: 'Apellido', name: 'Apellidos' },
                { id: 'FechaNacimiento', name: 'Nacimiento' },
                { id: 'Email', name: 'Email' },
                { id: 'Telefono', name: 'Telefono' },
                { id: 'Direccion', name: 'Direccion' },
                { id: 'FechaRegistro', name: 'FechaRegistro' },
                { id: 'Estado', name: 'Estado' },
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
                { id: 'FechaRegistro', name: 'FechaRegistro' },
                { id: 'Estado', name: 'Estado' },
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
