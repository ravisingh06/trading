import React from 'react';
import { Box, Link, VStack } from '@chakra-ui/react';

const UsBrokerList = () => {
  const brokers = [
    {
      name: 'Fidelity Investments',
      logo: 'https://www.vhv.rs/dpng/d/108-1081744_fidelity-investments-png-logo-transparent-png.png',
      link: 'https://www.fidelity.com/',
    },
    {
      name: 'TD Ameritrade',
      logo: 'https://www.logo.wine/a/logo/TD_Ameritrade/TD_Ameritrade-Logo.wine.svg',
      link: 'https://www.tdameritrade.com/',
    },
    {
      name: 'E-Trade',
      logo: 'https://www.logo.wine/a/logo/E-Trade/E-Trade-Logo.wine.svg',
      link: 'https://www.etrade.com/',
    },
    {
      name: 'Charles Schwab',
      logo: 'https://www.logo.wine/a/logo/Charles_Schwab_Corporation/Charles_Schwab_Corporation-Logo.wine.svg',
      link: 'https://www.schwab.com/',
    },
    {
      name: 'Interactive Brokers LLC',
      logo: 'https://www.logo.wine/a/logo/Interactive_Brokers/Interactive_Brokers-Logo.wine.svg',
      link: 'https://www.interactivebrokers.com/',
    },
    {
      name: 'Robinhood',
      logo: 'https://1000logos.net/wp-content/uploads/2021/05/Robinhood-Logo-2013-768x432.png',
      link: 'https://robinhood.com/',
    },
  ];

  const brokerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    margin: '20px',
  };

  const brokerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const logoStyle = {
    width: '150px',
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <Box bg="gray.200" p={6} borderRadius="md">
      <VStack spacing={6} align="center">
        {/* <h2>Top US Stock Market Brokers</h2> */}
        <div style={brokerGridStyle}>
          {brokers.map((broker) => (
            <div key={broker.name} style={brokerStyle}>
              <h3>{broker.name}</h3>
              <Link href={broker.link} textDecoration="none" color="inherit" isExternal>
                <img src={broker.logo} alt={broker.name} style={logoStyle} />
              </Link>
            </div>
          ))}
        </div>
      </VStack>
    </Box>
  );
};

export default UsBrokerList;
