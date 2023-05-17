import './App.css';

import {
  Route,
  Routes
} from "react-router-dom";


import Dashboard from './views/Dashboard';
import PaginaInicial from './views/PaginaInicial';
import Login from './views/Login';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <PaginaInicial/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
    </>
  );
}

export default App;
