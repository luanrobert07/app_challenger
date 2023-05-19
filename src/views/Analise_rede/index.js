import React, { useState } from 'react';
import Cabecalho from '../../partials/cabecalho';
import Footer from '../../partials/Footer';
import { Stack } from '@mui/material';
import './analiseRedeStyle.css'

const ProgressFilter = ({ itemName, progress }) => {


  const color = progress > 75 ? 'red' : 'green';

  return (
    <div class="progress_filter_container">
      <div class="progress_filter_box">
        <div class="progress_filter_item_name">
          {itemName}
        </div>
        <div class="progress_filter_progress_bar">
          <div class="progress_filter_progress_bar_fill"
            style={{
              backgroundColor: `${color}`,
              width: `${progress}%`,
            }}
          ></div>
          <div class="progress_filter_progress_bar_text">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

const AnaliseGasto = () => {

  const items = [
    { name: "Pessoa 1", progress: 20 },
    { name: "Pessoa 2", progress: 10 },
    { name: "Pessoa 3", progress: 40 },
    { name: "Pessoa 4", progress: 15 },
    { name: "Pessoa 5", progress: 15 },
  ];


  return (
    <div class="analise_container">
      <Cabecalho />
      <h1 class="title_page">Análise da rede</h1>

      <div class="div_stacks plano_stats">
      <h2 class="stack_title">Informações do plano</h2>
      <div>
        <h4 class="stack_info">Plano contratado: 100Gb</h4>
        <h4 class="stack_info">Total gasto na rede: 73Gb</h4>
      </div>
        <ProgressFilter itemName="Total" progress={73} />
      </div>


      <div class="div_stacks">
        <Stack
          direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 0, sm: 0, md: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          <h2 class="stack_title">Análise por pessoa</h2>
          <div>
            {items.map((item, index) => (
              <div key={index}>
                <ProgressFilter itemName={item.name} progress={item.progress} />
              </div>
            ))}
          </div>
        </Stack>
      </div>

      <Footer />
    </div>

  );
};

export default AnaliseGasto;
