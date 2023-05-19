import Cabecalho from "../../partials/cabecalho/index";
import ProgressBar from "../../components/ProgressBar";
import ProgressItem from "../../components/ProgressItem";
import Footer from "../../partials/Footer"
import { Stack } from "@mui/material";

function Dashboard() {
  const progress = 50; // Defina o valor do progresso aqui
    return (
      <div>
        <Cabecalho/>
        <h1 style={{textAlign: "center" }}>Dados Mensais</h1>
        <div>
          <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={{ xs: 0, sm: 0, md: 0 }}
            justifyContent="center"
            alignItems="center"
            backgroundColor="black"
            width="40%"
            height="170px"
            borderRadius="8px"
            padding="10px"
            margin="0 auto"
          >
            <h3 style={{ color: "gray", fontSize: "40px", textAlign: "center" }}>Análise de gastos</h3>
            <h2 style={{ color: "gray", fontSize: "30px", textAlign: "center", paddingBottom: "10px" }}>Day: </h2>

            <ProgressBar progress={progress} />
          
            
          </Stack>
        </div>

          <div>
            <ProgressItem/>
          </div>
          <div style={{position: "fixed", bottom: "0", left: "0", width: "100%"}} >
            <Footer/>
          </div>
        
      </div>
    );
  }
  
  export default Dashboard;