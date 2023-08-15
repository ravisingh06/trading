// import { ChakraProvider, CSSReset, extendTheme, IconButton, useColorMode } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'light',
//     useSystemColorMode: false,
//   },
// });

// const ThemeProvider = ({ children }) => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <ChakraProvider theme={theme}>
//       <CSSReset />
//       {children}
//       <IconButton
//         aria-label="Toggle Theme"
//         icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//         onClick={toggleColorMode}
//         position="fixed"
//         bottom="4"
//         right="4"
//         borderRadius="full"
//         colorScheme="teal"
//         zIndex="999"
//       />
//     </ChakraProvider>
//   );
// };

// export default ThemeProvider;
