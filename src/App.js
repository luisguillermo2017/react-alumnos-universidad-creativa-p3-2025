import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaAlumnos from './views/ListaAlumnos';
import CrearAlumno from './views/CrearAlumno';
import Error404 from './views/Error404';

function App() {
  return (
    <>

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={  <ListaAlumnos /> } ></Route>
          <Route path='/crearAlumno' element={  <CrearAlumno /> } ></Route>
          <Route path='/*' element={  <Error404 /> } ></Route>
        </Routes>

      </BrowserRouter>


    

    </>
  );
}

export default App;
