// import { Box, Image, Text } from "@chakra-ui/react";
// import React from "react";
// import btcSrc from "../assets/btc.png";
// import stkSrc from "../assets/st7.jpg";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
//       <motion.div
//         style={{
//           height: "80vh",
//         }}
//         animate={{
//           translateY: "20px",
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         <Image
//           w={"full"}
//           h={"full"}
//           objectFit={"contain"}
//           src={btcSrc}
//           filter={"grayscale(1)"}
//         />
//       </motion.div>

//       <Text
//         fontSize={"6xl"}
//         textAlign={"center"}
//         fontWeight={"thin"}
//         color={"whiteAlpha.700"}
//         mt={"-20"}
//       >
//         EyeOnCrypto
//       </Text>
//     </Box>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import { Box, Image, Text } from "@chakra-ui/react";
// import btcSrc from "../assets/btc.png";
// import stkSrc from "../assets/st7.jpg";
// import cmdSrc from "../assets/st4.jpg";

// import { motion } from "framer-motion";

// const Home = () => {
//   const [imageSrc, setImageSrc] = useState(btcSrc);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageSrc((prevSrc) => (prevSrc === btcSrc ? stkSrc : btcSrc));
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
//       <motion.div
//         style={{
//           height: "80vh",
//         }}
//         animate={{
//           translateY: "20px",
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         <Image
//           w={"full"}
//           h={"full"}
//           objectFit={"contain"}
//           src={imageSrc}
//           filter={"grayscale(0)"}
//         />
//       </motion.div>

//       <Text
//         fontSize={"6xl"}
//         textAlign={"center"}
//         fontWeight={"thin"}
//         color={"whiteAlpha.700"}
//         mt={"-20"}
//       >
//         MarketView
//       </Text>
//     </Box>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../assets/c1.jpg";

import stkSrc from "../assets/st7.jpg";
import cdmSrc from "../assets/st4.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(btcSrc);
  const images = [btcSrc, stkSrc, cdmSrc];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setImageSrc(images[currentImageIndex]);
  }, [currentImageIndex]);

  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={imageSrc}
          filter={"grayscale(0)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-30"}
      >
        MarketView
      </Text>
    </Box>
  );
};

export default Home;
