import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
          
Welcome to our website, your ultimate source for real-time price, comprehensive charts, and crucial data of cryptocurrencies, stock markets, commodities, and forex. Stay informed and make informed decisions with our concise and accurate information, empowering you to navigate the ever-changing world of financial markets with confidence.
          </Text>
        </VStack>

        <VStack>
          {/* <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} /> */}
          <Text>Our Founder</Text>
          <Text>Sindhu Singh</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
