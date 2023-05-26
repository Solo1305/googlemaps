import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Map from './Map';

const App = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Gym!
      </Typography>
      <Map />
    </Container>
  );
};

export default App;
