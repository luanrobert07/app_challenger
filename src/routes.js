import {
    Route,
    Routes,
    BrowserRouter
  } from "react-router-dom";
  
  
  import Dashboard from './views/Dashboard';
  import PaginaInicial from './views/PaginaInicial';
  import Login from './views/Login';

function RoutesApp() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/" element={ <PaginaInicial/> } />
        </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;