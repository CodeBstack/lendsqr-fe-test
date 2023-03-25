import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.scss';
import AllRoutes from './Routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AllRoutes />
    </ThemeProvider>
  );
};

export default App;
