import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import AllRoutes from './Routes';

import { Provider } from 'react-redux';
import { store } from './store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { usersApi } from './features/apiSlice';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={usersApi}>
        <ThemeProvider theme={theme}>
          <AllRoutes />
        </ThemeProvider>
      </ApiProvider>
    </Provider>
  );
};

export default App;
