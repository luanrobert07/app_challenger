import Cabecalho from "../partials/cabecalho";
import Calendario from "../partials/calendario"
import ProgressBar from "../partials/ProgressBar"

function Dashboard() {
    return (
      <div>
        <Cabecalho/>
        <h1>Dados Mensais</h1>
        <div>
            <Calendario/>
            <h3>Análise de gastos</h3>
            <h2>Day</h2>
            <ProgressBar />
        </div>
      </div>
    );
  }
  
  export default Dashboard;