import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react';

const MonthDisplay = () => {
  return (
    <Grid margin='5' templateColumns='repeat(7, 1fr)' gap={4}>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
    </Grid>
  );
}

export default MonthDisplay;