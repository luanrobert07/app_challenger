import Cabecalho from "../partials/cabecalho";import ProgressBar from "../components/ProgressBar";
import ProgressItem from "../components/ProgressItem";
import ProgressItemFilter from "../components/ProgressItemFilter";

function Dashboard() {
  const progress = 50; // Defina o valor do progresso aqui
    return (
      <div>
        <Cabecalho/>
        <h1>Dados Mensais</h1>
        <div>
            <div
      style={{
        backgroundColor: "black",
        width: "60%",
        height: "170px",
        borderRadius: "8px",
        padding: "10px"
      }}
    >
      <h3 style={{ color: "gray" }}>Análise de gastos</h3>
      <h2 style={{ color: "gray" }}>Day 9 - 15</h2>
      <ProgressBar progress={progress} />
    </div>

    <ProgressItem/>
    <ProgressItemFilter/>
        </div>
      </div>
    );
  }
  
  export default Dashboard;