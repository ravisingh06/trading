import { Box, Button, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const AllStock = () => {
  const stockData = [
    { path: "/stocks", label: "Nifty50" },
    { path: "/nifty100", label: "Nifty100" },
    { path: "/nifty200", label: "Nifty200" },
    { path: "/nifty500", label: "Nifty500" },
    { path: "/niftynext50", label: "NiftyNext50" },
    { path: "/niftybank", label: "NiftyBank" },
    { path: "/niftyauto", label: "NiftyAuto" },
    { path: "/niftyit", label: "NiftyIT" },
    { path: "/niftypharma", label: "NiftyPharma" },
    { path: "/niftymedia", label: "NiftyMedia" },
    { path: "/niftyfmgc", label: "NiftyFMGC" },
    { path: "/niftyfinance", label: "NiftyFinance" },
    { path: "/niftyinfra", label: "NiftyInfra" },
    { path: "/niftysmallcap50", label: "SmallCap50" },
    { path: "/niftymidcap50", label: "MidCap50" },
  ];

  return (
    <Box
      bgGradient="linear(to-a, purple.900, purple.800)"
      py={12}
      px={6}
      borderRadius="md"
    >
      <VStack spacing={6} align="center">
        {stockData.map((stock) => (
          <Button
            as={RouterLink}
            to={stock.path}
            variant="outline"
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            w="40%"
            _hover={{
              bgGradient: "linear(to-b, purple.700, red.600)",
              color: "white",
            }}
            key={stock.path}
          >
            {stock.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default AllStock;
