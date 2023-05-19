import React from 'react';
import { Stack } from '@mui/material';

const Progress = ({ itemName, progress }) => {
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

const ProgressItem = () => {
  return (
    <>
      <h1 style={{textAlign: "center", paddingTop: "30px" }} >Análise por ítem</h1>
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
          marginBottom= "100px"
        >
          <Progress itemName="Item 1" progress={80} />
          <Progress itemName="Item 2" progress={50} />
          <Progress itemName="Item 3" progress={30} />
          <Progress itemName="Item 4" progress={65} />
          <Progress itemName="Item 5" progress={90} />
        </Stack>
      </div>

    </>
  );
};

export default ProgressItem;
