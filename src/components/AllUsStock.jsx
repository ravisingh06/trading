import { Box, Button, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const AllUsStock = () => {
  return (
    <Box
      bgGradient="linear(to-a, purple.900, purple.800)"
      py={12}
      px={6}
      borderRadius="md"
    >
      

      <VStack spacing={6} align="center">
        <Button
          as={RouterLink}
          to="/snp100"
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
          <Link to="/snp100" style={{ textDecoration: "none", color: "inherit" }}>
            S&P100
          </Link>
        </Button>

        <Button
          as={RouterLink}
          to="/nasdaq100"
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
          <Link to="/nasdaq100" style={{ textDecoration: "none", color: "inherit" }}>
            NASDAQ100
          </Link>
        </Button>

        <Button
          as={RouterLink}
          to="/dawjones"
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
          <Link to="/dawjones" style={{ textDecoration: "none", color: "inherit" }}>
            Dow Jones
          </Link>
        </Button>

        <Button
          as={RouterLink}
          to="/nyse100"
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
          <Link to="/nyse100" style={{ textDecoration: "none", color: "inherit" }}>
            NYSE100
          </Link>
        </Button>

        <Button
          as={RouterLink}
          to="/russ2k"
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
          <Link to="/russ2k" style={{ textDecoration: "none", color: "inherit" }}>
            RUT
          </Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default AllUsStock;
