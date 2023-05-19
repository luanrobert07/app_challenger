import { StrictMode } from "react";

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
        <h1>Dados Mensais</h1>
        <div>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "170px",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
          <h3 style={{ color: "gray", fontSize: "40px", textAlign: "center" }}>Análise de gastos</h3>
          <h2 style={{ color: "gray", fontSize: "30px", textAlign: "center" }}>Day: </h2>
          <Stack 
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          justifyContent="center"
        >
          <ProgressBar progress={progress} />
        </Stack>
        </div>

        <ProgressItem/>
        </div>
        
        <StrictMode>
          <Footer/>
        </StrictMode>
        
      </div>
    );
  }
  
  export default Dashboard;