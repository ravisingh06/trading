import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { Heading,Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const SnP100 = () => {

  const [stock, setStock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stocks = [
        'AAPL', 'MSFT', 'AMZN', 'GOOGL', 'GOOG', 'FB', 'TSLA', 'JPM', 'V', 'JNJ',
        'BAC', 'NVDA', 'UNH', 'HD', 'MA', 'PYPL', 'DIS', 'VZ', 'PG', 'ADBE',
        'XOM', 'T', 'CMCSA', 'CRM', 'PFE', 'INTC', 'NFLX', 'PEP', 'ABT', 'KO',
        'CSCO', 'TMO', 'CVX', 'MRK', 'COST', 'WMT', 'ABBV', 'AMGN', 'MDT', 'MCD',
        'NKE', 'BA', 'HON', 'PM', 'ACN', 'UNP', 'ORCL', 'LIN', 'MMM', 'IBM',
        'NOW', 'LOW', 'RTX', 'CAT', 'AMD', 'UPS', 'C', 'SBUX', 'AVGO', 'CVS',
        'AXP', 'QCOM', 'TMUS', 'BA', 'CHTR', 'EL', 'BKNG', 'LMT', 'GS', 'FDX',
        'BDX', 'INTU', 'SPGI', 'DHR', 'ANTM', 'CL', 'CI', 'ISRG', 'TXN', 'CME',
        'BLK', 'CCI', 'FIS', 'ADP', 'ATVI', 'ADSK', 'MU', 'EW', 'AGN', 'NSC',
        'VRTX', 'BK', 'ILMN', 'SO', 'MMC', 'GM', 'PNC', 'USB', 'CNC', 'CB', 'MET',
        'MDLZ', 'DUK', 'ZTS', 'SO', 'TGT', 'ADP', 'ADI', 'MO', 'AEP', 'COP',
        'DUK', 'ETN', 'GS', 'HCA', 'HON', 'HPQ', 'ITW', 'LOW', 'MRO', 'NOC',
        'OXY', 'PX', 'PEP', 'SLB', 'SYK', 'VZ', 'WMT', 'XEL', 'XYL', 'ZBH'
      ];
      

      const symbols = stocks.join(',');

      const apiUrl = `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=f9bc9e1dcc91b8cb1fb51f4214c54209`;

      try {
        const response = await axios.get(apiUrl);
        // console.log(response.data);
        setStock(response.data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const StockCard = ({ id, name, price, symbol, open, dayHigh, dayLow, change }) => (
    <Link to={`/stock/${id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
  
       
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>Price = {price}</Text>
        <Text noOfLines={1}>Opening= {open}</Text>
        <Text noOfLines={1}>DayHigh= {dayHigh}</Text>
        <Text noOfLines={1}>DayLow= {dayLow}</Text>
        <Text noOfLines={1}>Change= {change}</Text>
  
  
        
      </VStack>
    </Link>
  );

  return (
  <>
  

<HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {stock.map((i) => (
              <StockCard
                
                key={i.symbol}
                name={i.name}
                price={i.price}
                symbol={i.symbol}
                open = {i.open}
                dayHigh = {i.dayHigh}
                dayLow = {i.dayLow}
                change = {i.change}

              />
            ))}
          </HStack>

  </>
  )

};

export default SnP100;

