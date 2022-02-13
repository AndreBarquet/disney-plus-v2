import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, IconButton, Box, AppBar } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Link } from "react-router-dom";

import styled from '@emotion/styled';

import routes from './config/routes';
import logo from './assets/disney-plus-logo.png';
import { exists } from './utils/utils';

const NavBarItem = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;

  .title{
    font-size: 17px;
    padding-top: 1px;
  };

  .icon{
    font-size: 6px;
    margin-right: 6px;
  }
`;

const LogoContainer = styled(Typography)`
  display: flex;
  margin-right: 15px;
`;

const NavLogo = styled.img`
  height: 3.2rem;
`;

const primaryColor = {
  main: '#322E3F',
  light: '#757ce8',
  dark: '#002884',
  contrastText: '#fff',
};

const secondaryColor = {
  light: '#ff7961',
  main: '#f44336',
  dark: '#ba000d',
  contrastText: '#000',
};

const theme = createTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState();

  function onPageChange(currentRoute) {
    setCurrentPage(currentRoute?.key);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={{ padding: '0px 15px' }}>
              <LogoContainer component="div" sx={{ flexGrow: 1 }}>
                <NavLogo src={logo} />
              </LogoContainer>
              {routes.map(currentRoute => (
                <Typography component="div" sx={{ flexGrow: 1 }} onClick={() => onPageChange(currentRoute)}>
                  <NavBarItem to={currentRoute?.path}>
                    <span className="icon">{currentRoute?.icon}</span>
                    <span className="title">{currentRoute?.label}</span>
                  </NavBarItem>
                </Typography>
              ))}
              <Typography component="div" sx={{ flexGrow: 4 }} style={{ textAlign: 'right' }}>
                <Button color="inherit">Login</Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {exists(routes) && routes.length > 0 && routes.find(page => page.key === currentPage)?.component}
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;