import React from 'react';
import { Button } from '@chakra-ui/react';

const IndBrokerList = () => {
  const brokers = [
    {
      name: 'Zerodha',
      link: 'https://zerodha.com/',
    },
    {
      name: 'Angel One',
      link: 'https://www.angelbroking.com/',
    },
    {
      name: 'Upstox',
      link: 'https://upstox.com/',
    },
    {
      name: 'Groww',
      link: 'https://groww.in/',
    },
    {
      name: 'ICICI Direct',
      link: 'https://www.icicidirect.com/',
    },
    {
      name: 'HDFC Securities',
      link: 'https://www.hdfcsec.com/',
    },
    {
      name: '5paisa',
      link: 'https://www.5paisa.com/',
    },
    {
      name: 'IIFL',
      link: 'https://www.iiflsecurities.com/',
    },
  ];

  const brokerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two items per row
    gap: '20px',
    margin: '20px',
    backgroundColor: '#f0f0f0', // Background color for grid
    padding: '20px',
    borderRadius: '10px',
  };

  const brokerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '100px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const containerStyle = {
    backgroundColor: '#363945', // Background color for outer container
    padding: '20px',
    borderRadius: '10px',
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={brokerGridStyle}>
        {brokers.map((broker) => (
          <div key={broker.name} style={brokerStyle}>
            <h3 style={nameStyle}>{broker.name}</h3>
            <Button
              as="a"
              href={broker.link}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="purple"
              size="md"
            >
              Visit Website
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndBrokerList;
