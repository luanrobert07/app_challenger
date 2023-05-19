import React, { useState } from 'react';
import Cabecalho from '../../partials/cabecalho';
import Footer from '../../partials/Footer';
import { Stack } from '@mui/material';
import './analiseStyle.css'

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
  const [filterValue, setFilterValue] = useState('all');

  const items = [
    { name: "Item 1", progress: 80 },
    { name: "Item 2", progress: 50 },
    { name: "Item 3", progress: 30 },
    { name: "Item 4", progress: 65 },
    { name: "Item 5", progress: 90 },
  ];

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (filterValue === 'greater') {
      return item.progress > 50;
    } else if (filterValue === 'lower') {
      return item.progress < 50;
    } else {
      return true;
    }
  });

  return (
    <div class="analise_container">
      <Cabecalho />
      <h1 class="title_page">Análise por item</h1>
      <div class="div_stacks">
        <Stack
          direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 0, sm: 0, md: 0 }}
          justifyContent="center"
          alignItems="center"

        >
          <div>
            {items.map((item, index) => (
              <div key={index}>
                <ProgressFilter itemName={item.name} progress={item.progress} />
              </div>
            ))}
          </div>
        </Stack>
      </div>
      <div
        style={{
          margin: '10px',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <label class="filter_label" labelFor = "filter" htmlFor="filter">Filtrar itens:</label>
        <select
          id="filter"
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option value="all">Todos</option>
          <option value="greater">Maior que 50%</option>
          <option value="lower">Menor que 50%</option>
        </select>
      </div>
      <div class="div_stacks">
        <Stack
          direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 0, sm: 0, md: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          <h2 style={{ color: 'white', }}>Itens Filtrados</h2>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index}>
                <ProgressFilter itemName={item.name} progress={item.progress} />
              </div>
            ))
          ) : (
            <p>Nenhum item corresponde ao filtro.</p>
          )}
        </Stack>
      </div>

      <Footer />
    </div>

  );
};

export default AnaliseGasto;
