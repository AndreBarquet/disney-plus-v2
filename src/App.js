import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Toolbar, Typography, IconButton, Box, AppBar, Menu, MenuItem, Container, Avatar, Tooltip } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import styled from '@emotion/styled';

import routes from './config/routes';
import settings from './config/settingsRoutes';

import logo from './assets/disney-plus-logo.png';
import { exists } from './utils/utils';

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

const NavBarItem = styled(Link)`
  display: flex;
  align-items: center;
  color: ${() => primaryColor?.contrastText};
  text-decoration: none;
  transition: 0.4s;  

  .title{
    font-size: 17px;
    padding-top: 1px;
  };

  .icon{
    font-size: 6px;
    margin-right: 6px;
  }

  &:hover{
    transform: scale(1.05);
    color: #0abbe9;
    background: -webkit-linear-gradient(101deg, #0072ff, #02f3ff 94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const PagesMenu = styled(Menu)`
  ul {
    background-color: ${() => primaryColor?.main};
  }
`;

const PagesList = styled(Box)`
  .MuiTypography-root{
    margin-right: 25px;
    margin-left: 15px;
  }
`;

const UserSettingsMenu = styled(Menu)`
   ul {
    background-color: ${() => primaryColor?.main};
  }
`;

const LogoContainer = styled(Typography)`
  display: flex;
  margin-right: 25px;
`;

const NavLogo = styled.img`
  height: 3.2rem;
`;

const RenderPage = styled(Box)`
  padding: 5px 10px;
`;

function App() {
  const [openPagesMenu, setOpenPageMenu] = useState(null);
  const [openUserMenu, setOpenUserMenu] = useState(null);

  function handleOpenNavMenu(event) {
    setOpenPageMenu(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setOpenUserMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpenPageMenu(null);
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(null);
  };

  const showOnMobile = { flexGrow: 1, display: { xs: 'flex', md: 'none' } };
  const showOnlarge = { mr: 2, display: { xs: 'none', md: 'flex' } };

  const renderUsermenu = (
    <UserSettingsMenu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={openUserMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(openUserMenu)}
      onClose={handleCloseUserMenu}
    >
      {settings.map(currentRoute => (
        <MenuItem key={currentRoute?.label} onClick={handleCloseNavMenu}>
          <Typography textAlign="center" >
            <NavBarItem to={currentRoute?.path}>
              <span className="icon">{currentRoute?.icon}</span>
              <span className="title">{currentRoute?.label}</span>
            </NavBarItem>
          </Typography>
        </MenuItem>
      ))}
      <MenuItem key="logout" onClick={handleCloseNavMenu}>
        <Typography textAlign="center" >
          <NavBarItem to="">
            <span className="icon"><LogoutIcon /></span>
            <span className="title">Logout</span>
          </NavBarItem>
        </Typography>
      </MenuItem>
    </UserSettingsMenu>
  )

  const navBarContent = (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoContainer component="div" sx={showOnlarge}>
            <NavLogo src={logo} />
          </LogoContainer>

          <Box sx={showOnMobile}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <PagesMenu
              id="menu-appbar"
              anchorEl={openPagesMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(openPagesMenu)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {routes.map(currentRoute => (
                <MenuItem key={currentRoute?.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >
                    <NavBarItem to={currentRoute?.path}>
                      <span className="icon">{currentRoute?.icon}</span>
                      <span className="title">{currentRoute?.label}</span>
                    </NavBarItem>
                  </Typography>
                </MenuItem>
              ))}
            </PagesMenu>
          </Box>

          <LogoContainer noWrap component="div" sx={showOnMobile}>
            <NavLogo src={logo} />
          </LogoContainer>

          <PagesList sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map(currentRoute => (
              <Typography component="div">
                <NavBarItem to={currentRoute?.path}>
                  <span className="icon">{currentRoute?.icon}</span>
                  <span className="title">{currentRoute?.label}</span>
                </NavBarItem>
              </Typography>
            ))}
          </PagesList>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {renderUsermenu}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          {navBarContent}
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