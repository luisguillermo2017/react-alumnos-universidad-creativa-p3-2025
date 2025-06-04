import React, { useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getAllAlumnos } from "../services/AlumnosServices";

export default function TablaAlumnos() {

  const getInitialData = async () => {

    const result = await getAllAlumnos();

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
    defaultActiveKey=""
    id="fill-tab-example"
    className='mt-4 text-black p-3'
   >

    <Tab
      eventKey="TablaActiva"
      title="Lista de alumnos activos"
    >
      <p>Acá se programará la tabla de alumnos activos</p>
       {/* Tabla de alumnos activos */}
    </Tab>
           
    <Tab
      eventKey="TablaInactiva"
      title="Lista de alumnos inactivos"
    >
       <p>Acá se programará la tabla de alumnos inactivos</p>
       {/* Tabla de alumnos inactivos */} 
    </Tab>   
           
    
   </Tabs>
  
        
   </>
  )
}
