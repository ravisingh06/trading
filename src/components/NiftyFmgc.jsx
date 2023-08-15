
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { Heading,Text, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";


const NiftyFmgc = () => {

  const [stock, setStock] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price',
        params: {
          Indices: 'NIFTY FMGC'
        },
        headers: {
          'X-RapidAPI-Key': '42e7a011e1msha411687998d497fp152e8djsn4a380e89146f',
          'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
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
  <div>Fetching data...</div>

<HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {stock.map((i) => (
              <StockCard
                
                key={i.identifier}
                name={i.identifier}
                price={i.lastPrice}
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

export default NiftyFmgc;


  

