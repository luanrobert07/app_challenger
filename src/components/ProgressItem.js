import React from 'react';

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
      <h1>Análise por ítem</h1>
      <div
      style={{
        backgroundColor: "black",
        width: "60%",
        height: "170px",
        borderRadius: "8px",
        padding: "10px",
        paddingTop: "30px"
      }}
    >
        
        <Progress itemName="Item 1" progress={80} />
        <Progress itemName="Item 2" progress={50} />
        <Progress itemName="Item 3" progress={30} />
        <Progress itemName="Item 4" progress={65} />
        <Progress itemName="Item 5" progress={90} />
      </div>
    </>
  );
};

export default ProgressItem;
