import React from 'react';
import {
  ChakraProvider,
  Box,
  theme, Text,
} from '@chakra-ui/react';
import MonthDisplay from './features/month-display/components/MonthDisplay';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text align='center' minH='15'>PlannerMate</Text>
        <MonthDisplay/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
