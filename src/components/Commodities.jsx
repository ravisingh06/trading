// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Commodities = () => {
// //   const [prices, setPrices] = useState({});

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const options = {
// //         method: 'GET',
// //         url: 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR,USD,CAD,AUD,JPY,INR,KRW,CNY,HKD,RUB,ZAR,CHF,MXN,TRY,SGD/USD',
// //         headers: {
// //           'X-RapidAPI-Key': 'ed94d076b4mshb19cdd601713b86p196628jsn5865cae13be0',
// //           'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
// //         }
// //       };

// //       try {
// //         const response = await axios.request(options);
// //         setPrices(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const containerStyle = {
// //     backgroundColor: 'lightred',
// //     padding: '10px',
// //     borderRadius: '5px',
// //     textAlign: 'center',

// //   };

 
// //   return (
// //     <div>
// //       <h2>Commodity Prices in USD</h2>
// //       {prices.success ? (
// //         <div style={containerStyle}>
// //           <p>XAU: {prices.rates.XAU}</p>
// //           <p>XAG: {prices.rates.XAG}</p>
// //           <p>PA: {prices.rates.PA}</p>
// //           <p>PL: {prices.rates.PL}</p>
// //           <p>GBP: {prices.rates.GBP}</p>
// //           <p>EUR: {prices.rates.EUR}</p>
// //           <p>USD: {prices.rates.USD}</p>
// //           <p>CAD: {prices.rates.CAD}</p>
// //           <p>AUD: {prices.rates.AUD}</p>
// //           <p>JPY: {prices.rates.JPY}</p>
// //           <p>INR: {prices.rates.INR}</p>
// //           <p>KRW: {prices.rates.KRW}</p>
// //           <p>CNY: {prices.rates.CNY}</p>
// //           <p>HKD: {prices.rates.HKD}</p>
// //           <p>RUB: {prices.rates.RUB}</p>
// //           <p>ZAR: {prices.rates.ZAR}</p>
// //           <p>CHF: {prices.rates.CHF}</p>
// //           <p>MXN: {prices.rates.MXN}</p>
// //         </div>
// //       ) : (
// //         <p>Failed to fetch commodity prices.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Commodities;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Commodities = () => {
//   const [prices, setPrices] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR,USD,CAD,AUD,JPY,INR,KRW,CNY,HKD,RUB,ZAR,CHF,MXN,TRY,SGD/USD',
//         headers: {
//           'X-RapidAPI-Key': 'ed94d076b4mshb19cdd601713b86p196628jsn5865cae13be0',
//           'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setPrices(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const containerStyle = {
//     backgroundColor: 'green',
//     padding: '40px',
//     borderRadius: '100px',
//     textAlign: 'center',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(1, 1fr)', // One column grid
//     gap: '20px', // Add some gap between items
//   };

//   const boxStyle = {
//     backgroundColor: 'lightblue',
//     padding: '5px',
//     borderRadius: '3px',
    
//     color: 'darkblue',
//   };

//   return (
//     <div>
//       <h2>Commodity Prices in USD</h2>
//       {prices.success ? (
//         <div style={containerStyle}>
//           <div style={gridStyle}>
//             <div style={boxStyle}>
//               <p>XAU: {prices.rates.XAU}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>XAG: {prices.rates.XAG}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>PA: {prices.rates.PA}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>PL: {prices.rates.PL}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>GBP: {prices.rates.GBP}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>EUR: {prices.rates.EUR}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>USD: {prices.rates.USD}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>CAD: {prices.rates.CAD}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>AUD: {prices.rates.AUD}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>JPY: {prices.rates.JPY}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>INR: {prices.rates.INR}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>KRW: {prices.rates.KRW}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>CNY: {prices.rates.CNY}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>HKD: {prices.rates.HKD}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>RUB: {prices.rates.RUB}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>ZAR: {prices.rates.ZAR}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>CHF: {prices.rates.CHF}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>MXN: {prices.rates.MXN}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>TRY: {prices.rates.TRY}</p>
//             </div>
//             <div style={boxStyle}>
//               <p>SGD: {prices.rates.SGD}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Failed to fetch commodity prices.</p>
//       )}
//     </div>
//   );
// };

// export default Commodities;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Commodities = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR,USD,CAD,AUD,JPY,INR,KRW,CNY,HKD,RUB,ZAR,CHF,MXN,TRY,SGD/USD',
        headers: {
          'X-RapidAPI-Key': 'ed94d076b4mshb19cdd601713b86p196628jsn5865cae13be0',
          'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPrices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const containerStyle = {
    backgroundColor: 'lightred',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)', // One column grid
    gap: '10px', // Add some gap between items
  };

  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '5px',
    borderRadius: '3px',
    color: 'darkblue',
    width: '40%', // Make the box width equal to 40% of the container
    margin: 'auto', // Center the box horizontally
  };

  const headingStyle = {
    textAlign: 'centre',
    backgroundColor: 'lightgreen',
    padding: '15px',
    borderRadius: '3px',
    color: 'darkgreen',
    width: '40%', // Make the heading box width equal to 40% of the container
    margin: 'auto', // Center the heading box horizontally
  };

  return (
    <div>
      <div style={headingStyle}>
        <h2>Commodity Prices in USD</h2>
      </div>
      {prices.success ? (
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div style={boxStyle}>
              <p>XAU: {prices.rates.XAU}</p>
            </div>
            <div style={boxStyle}>
              <p>XAG: {prices.rates.XAG}</p>
            </div>
            <div style={boxStyle}>
              <p>PA: {prices.rates.PA}</p>
            </div>
            <div style={boxStyle}>
              <p>PL: {prices.rates.PL}</p>
            </div>
            <div style={boxStyle}>
              <p>GBP: {prices.rates.GBP}</p>
            </div>
            <div style={boxStyle}>
              <p>EUR: {prices.rates.EUR}</p>
            </div>
            <div style={boxStyle}>
              <p>USD: {prices.rates.USD}</p>
            </div>
            <div style={boxStyle}>
              <p>CAD: {prices.rates.CAD}</p>
            </div>
            <div style={boxStyle}>
              <p>AUD: {prices.rates.AUD}</p>
            </div>
            <div style={boxStyle}>
              <p>JPY: {prices.rates.JPY}</p>
            </div>
            <div style={boxStyle}>
              <p>INR: {prices.rates.INR}</p>
            </div>
            <div style={boxStyle}>
              <p>KRW: {prices.rates.KRW}</p>
            </div>
            <div style={boxStyle}>
              <p>CNY: {prices.rates.CNY}</p>
            </div>
            <div style={boxStyle}>
              <p>HKD: {prices.rates.HKD}</p>
            </div>
            <div style={boxStyle}>
              <p>RUB: {prices.rates.RUB}</p>
            </div>
            <div style={boxStyle}>
              <p>ZAR: {prices.rates.ZAR}</p>
            </div>
            <div style={boxStyle}>
              <p>CHF: {prices.rates.CHF}</p>
            </div>
            <div style={boxStyle}>
              <p>MXN: {prices.rates.MXN}</p>
            </div>
            <div style={boxStyle}>
              <p>TRY: {prices.rates.TRY}</p>
            </div>
            <div style={boxStyle}>
              <p>SGD: {prices.rates.SGD}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Failed to fetch commodity prices.</p>
      )}
    </div>
  );
};

export default Commodities;
