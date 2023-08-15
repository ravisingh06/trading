import React, { useEffect } from 'react';
import axios from 'axios';

const ForexPairs = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://quotient.p.rapidapi.com/forex/intraday',
        params: {
          symbol: 'EUR/USD',
          interval: '1',
          from: '2020-04-21 10:00',
          to: '2020-04-21 10:30'
        },
        headers: {
          'X-RapidAPI-Key': '42e7a011e1msha411687998d497fp152e8djsn4a380e89146f',
          'X-RapidAPI-Host': 'quotient.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    // Your component's JSX code here
    <div>
      {/* Component content */}
    </div>
  );
};

export default ForexPairs;
