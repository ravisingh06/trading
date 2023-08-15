import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { Heading,Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const NYSE100 = () => {

  const [stock, setStock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const stocks = [
            'AAPL', 'MSFT', 'AMZN', 'GOOGL', 'GOOG', 'FB', 'TSLA', 'JPM', 'V', 'JNJ',
            'PG', 'NVDA', 'HD', 'UNH', 'MA', 'BAC', 'DIS', 'PYPL', 'CMCSA', 'XOM',
            'VZ', 'ADBE', 'PEP', 'CSCO', 'INTC', 'NFLX', 'KO', 'PFE', 'MRK', 'CRM',
            'CVX', 'ABBV', 'T', 'WMT', 'ACN', 'COST', 'TMO', 'DHR', 'ORCL', 'NKE',
            'PM', 'C', 'BMY', 'MCD', 'AMGN', 'HON', 'UNP', 'LIN', 'IBM', 'MO',
            'GS', 'HDB', 'NEE', 'ABT', 'AMT', 'LLY', 'HUM', 'CVS', 'MS', 'LOW',
            'TXN', 'TGT', 'AXP', 'MDT', 'CHL', 'PLD', 'BABA', 'LMT', 'BA', 'SYK',
            'BHP', 'AMD', 'RTX', 'NOW', 'COP', 'DUK', 'UPS', 'AMTD', 'CAT', 'CCI',
            'BTI', 'AX', 'AMAT', 'SNY', 'TJX', 'BIIB', 'SAN', 'SAP', 'CL', 'BBY',
            'BLK', 'ASML', 'SPG', 'CSX', 'CTSH', 'DE', 'TFC', 'INTU', 'CI'
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
  <div>
  

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

          </div>
  )

};

export default NYSE100;

