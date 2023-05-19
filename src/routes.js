import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Analisegasto from './views/Analise_gastos';
import GastoMensal from './views/Gasto_mensal';
import Dashboard from './views/Dashboard';
import PaginaInicial from './views/PaginaInicial';
import Analiserede from './views/Analise_rede';
import Login from './views/Login';
import Cadastro from './views/Cadastro'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analisegasto" element={<Analisegasto />} />
        <Route path="/analiserede" element={<Analiserede />} />
        <Route path="/gastomensal" element={<GastoMensal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;