import React, { useState } from 'react';
import Cabecalho from '../../partials/cabecalho';
import Footer from '../../partials/Footer';
import { Stack } from '@mui/material';

const ProgressFilter = ({ itemName, progress }) => {
  return (
    <div
      style={{
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            marginRight: '10px',
            width: '100px',
            fontWeight: 'bold',
          }}
        >
          {itemName}
        </div>
        <div
          style={{
            backgroundColor: 'gray',
            width: '200px',
            height: '20px',
            borderRadius: '5px',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: 'green',
              width: `${progress}%`,
              height: '100%',
              borderRadius: '5px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '14px',
            }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressItemFilter = () => {
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
    <>
      <Cabecalho/>
      <h1 style={{textAlign: "center" }}>Análise por item com filtro</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack
          direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 0, sm: 0, md: 0 }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="black"
          width="30%"
          height="220px"
          borderRadius="8px"
          padding="10px"
          paddingTop="30px"
          margin-left="auto"
          margin-right="auto"
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
        paddingBottom: '10px',
        display: 'flex', justifyContent: 'center', alignItems: 'center'

      }}
      >
          <label htmlFor="filter">Ítem:     </label>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack
          direction={{ xs: 'column', sm: 'column' }}
          spacing={{ xs: 0, sm: 0, md: 0 }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="black"
          width="30%"
          height="220px"
          borderRadius="8px"
          padding="10px"
          paddingTop="30px"
          margin-left="auto"
          margin-right="auto"
        >

        
      
        <h2 style={{color:'white',}}>Itens Filtrados</h2>
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

      <Footer/>
    </>
    
  );
};

export default ProgressItemFilter;
