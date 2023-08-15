// import { Button, HStack } from "@chakra-ui/react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <HStack p="4" shadow="base" bgColor="blackAlpha.900" spacing="4" display="flex">
//       <Button variant="unstyled" color="white" marginRight="5">
//         <Link to="/">Home</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/exchanges">CryptoExchanges</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/coins">CryptoCoins</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/allstock">Indian_Stocks</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/allusstock">US_Stocks</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/stockexchanges">StockExchanges</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/commodities">Commodities</Link>
//       </Button>
//       {/* <Button variant="unstyled" color="white">
//         <Link to="/commodityexchange">CommodityExchange</Link>
//       </Button> */}
//       {/* <Button variant="unstyled" color="white">
//         <Link to="/forexpairs">Forex Pairs</Link>
//       </Button> */}
//       {/* <Button variant="unstyled" color="white">
//         <Link to="/forexexchange">ForexExchanges</Link>
//       </Button> */}
//     </HStack>
//   );
// };

// export default Header;

import { Button, HStack, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bgColor="blackAlpha.900" p={4}>
      <HStack
        spacing="4"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="unstyled" color="white">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/exchanges">CryptoExchanges</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/coins">CryptoCoins</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/allstock">Indian_Stocks</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/allusstock">US_Stocks</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/stockexchanges">StockExchanges</Link>
        </Button>
        <Button variant="unstyled" color="white">
          <Link to="/commodities">Commodities</Link>
        </Button>
        {/* Add more items here */}
      </HStack>

      {/* Responsive Hamburger Menu */}
      <Button
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        color="white"
        onClick={toggleMenu}
      >
        ☰
      </Button>
      {isOpen && (
        <HStack
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/exchanges">CryptoExchanges</Link>
          </Button>
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/coins">CryptoCoins</Link>
          </Button>
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/allstock">Indian_Stocks</Link>
          </Button>
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/allusstock">US_Stocks</Link>
          </Button>
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/stockexchanges">StockExchanges</Link>
          </Button>
          <Button variant="unstyled" color="white" mb={2}>
            <Link to="/commodities">Commodities</Link>
          </Button>
          {/* Add more items here */}
        </HStack>
      )}
    </Box>
  );
};

export default Header;
