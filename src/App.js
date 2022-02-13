import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, IconButton, Box, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeProvider } from '@mui/system';

import routes from './config/routes';

const primaryColor = {
  main: '#6b7281',
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
  return (
    <ThemeProvider theme={theme} >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* colocar a logo aqui */}
            {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton> */}
            {routes.map(currentRoute => (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => setCurrentPage(currentRoute?.key)}>
                {currentRoute?.label}
              </Typography>
            ))}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        { }
      </Box>
    </ThemeProvider>
  );
}

export default App;