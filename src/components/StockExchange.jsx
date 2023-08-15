import { Button, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const StockExchange = () => {
  return (
    <VStack spacing={125} align="center" m={75}>
      <Button
        as={RouterLink}
        to="/indbrokerlist"
        variant="outline"
        colorScheme="purple"
        size="lg"
        borderRadius="full"
        w="40%"
        _hover={{
          bgGradient: "linear(to-b, purple.700, red.600)",
          color: "white",
        }}
      >
        <Link to="/indbrokerlist" style={{ textDecoration: "none", color: "inherit" }}>
          Indian Broker
        </Link>
      </Button>

      <Button
        as={RouterLink}
        to="/usbrokerlist"
        variant="outline"
        colorScheme="purple"
        size="lg"
        borderRadius="full"
        w="40%"
        _hover={{
          bgGradient: "linear(to-b, purple.700, red.600)",
          color: "white",
        }}
      >
        <Link to="/usbrokerlist" style={{ textDecoration: "none", color: "inherit" }}>
          US Broker
        </Link>
      </Button>
    </VStack>
  );
};

export default StockExchange;
