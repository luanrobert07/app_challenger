import React, { useState } from "react";
import Calendar from "react-date-range-calendar";
import "./gastoMensalStyle.css";
import Stack from '@mui/material/Stack';


import ProgressBar from "../../components/ProgressBar";
import Cabecalho from "../../partials/cabecalho";
import Footer from "../../partials/Footer";

const progress = 50; // Defina o valor do progresso aqui

export default function GastoMensal() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  

  return (
    
    <div className="gasto_mensal_container">
      <Cabecalho/>
      <Stack 
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
        >
        <h1 class="title_page">Dados mensais</h1>
      </Stack>

      <div class="div_stacks_calendar">
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
          >
          <Calendar
            onSelect={(startDate, endDate, validDateRange) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            selectedRange={["2023-05-19", "2030-05-19"]}
            tdCssObj={{
              padding: "15px 1px 15px 1px"
            }}
            onHoverTdCssObj={{
              backgroundColor: "#050F26",
              color: "#FFFFFF",
              borderRadius: "50%",
              cursor: "pointer"
            }}
            inRangedTdCssObj={{
              background: "rgba(5, 15, 38, 0.08)",
              fontSize: "14px",
              color: "#050F26",
              borderRadius: "0"
            }}
            startDateTdCssObj={{
              backgroundColor: "#050F26",
              fontSize: "14px",
              color: "#FFFFFF",
              borderRadius: "50%"
            }}
            endDateTdCssObj={{
              backgroundColor: "#050F26",
              fontSize: "14px",
              color: "#FFFFFF",
              borderRadius: "50%"
            }}
            disabledDatesTdCssObj={{
              backgroundColor: "#FFFFFF",
              fontSize: "14px",
              color: "#CDCFD4"
            }}
          />
        </Stack>
      </div>
    <div class="teste">
      <div class= "div_stacks">
        <h3 style={{ color: "gray", fontSize: "20px", textAlign: "center" }}>Análise de gastos</h3>
        <h2 style={{ color: "gray", fontSize: "20px", textAlign: "center" }}>
          Day: {startDate && formatDateString(startDate)} - {endDate && formatDateString(endDate)}
        </h2>
        <Stack 
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          justifyContent="center"
          height="50px"
        >
          <ProgressBar progress={progress} />
        </Stack>

      </div>
    </div>
      <div style={{position: "fixed", bottom: "0", left: "0", width: "100%"}} >
        <Footer/>
      </div>
     
    </div>
  );
}

function formatDateString(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Adiciona 1, pois os meses em JavaScript são indexados de 0 a 11
  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}`;
}
