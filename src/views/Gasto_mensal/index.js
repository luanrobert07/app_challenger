import React, { useState } from "react";
import Calendar from "react-date-range-calendar";
import "./styles.css";
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
        <h1>Dados mensais</h1>
      </Stack>

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
      <div
        style={{
          backgroundColor: "black",
          width: "40%",
          height: "170px",
          borderRadius: "8px",
          padding: "10px"
        }}
      >
        <h3 style={{ color: "gray", fontSize: "40px", textAlign: "center" }}>Análise de gastos</h3>
        <h2 style={{ color: "gray", fontSize: "30px", textAlign: "center" }}>
          Day: {startDate && formatDateString(startDate)} - {endDate && formatDateString(endDate)}
        </h2>
        <Stack 
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          justifyContent="center"
        >
          <ProgressBar progress={progress} />
        </Stack>

      </div>
      <Footer/>
    </div>
  );
}

function formatDateString(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Adiciona 1, pois os meses em JavaScript são indexados de 0 a 11
  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}`;
}
