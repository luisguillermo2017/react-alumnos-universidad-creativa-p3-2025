import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaAlumnos from './views/ListaAlumnos';
import CrearAlumno from './views/CrearAlumno';
import Error404 from './views/Error404';
import EditarAlumno from './views/EditarAlumno';
import Login from './views/Login';

function App() {

  const estadoLogin = true;
  const rol = 'estandar';

  if (estadoLogin) {

    return (
      <>

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<ListaAlumnos />} ></Route>
            <Route path='/crearAlumno' element={<CrearAlumno />} ></Route>
            <Route path='/editarAlumno' element={<EditarAlumno />} ></Route>
            <Route path='/*' element={<Error404 />} ></Route>
          </Routes>

        </BrowserRouter>

      </>
    );

  }

  if (!estadoLogin) {

    return (
      <>

        <BrowserRouter>

          <Routes>
            <Route path='/*' element={<Login />} ></Route>
          </Routes>

        </BrowserRouter>

      </>
    );

  }



}

export default App;
