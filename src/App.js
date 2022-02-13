import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from '@emotion/styled';

import routes from './config/routes';

import { exists } from './utils/utils';
import NavBar from './components/NavBar/NavBar';

const primaryColor = {
  main: '#322E3F',
  light: '#05d1e8',
  dark: '#002884',
  contrastText: '#fff',
};

const secondaryColor = {
  main: '#f44336',
  light: '#ff7961',
  dark: '#ba000d',
  contrastText: '#05d1e8',
};

const theme = createTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
});

const RenderPage = styled(Box)`
  padding: 5px 10px;
`;

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <NavBar />
        </Box>
        <RenderPage sx={{ flexGrow: 1 }}>
          <Routes>
            {exists(routes) && routes.length > 0 && <Route path="/" element={routes[0].component} />}
            {exists(routes) && routes.length > 0 && routes.map(page => <Route path={page?.path} element={page?.component} />)}
          </Routes>
        </RenderPage>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;