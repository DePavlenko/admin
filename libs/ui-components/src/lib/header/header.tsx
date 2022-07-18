import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Avatar,
  useScrollTrigger,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export type NavItem = {
  title: string;
  path: string;
};

interface HeaderProps {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  navigation: NavItem[];
  avatar: string;
  isLogged: boolean;
}

export const Header = ({
  logo: Logo,
  navigation,
  avatar,
  isLogged,
}: HeaderProps) => {
  const { pathname } = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      sx={{ backgroundColor: 'white', color: 'text.primary' }}
      elevation={trigger ? 4 : 0}
      position="sticky"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Logo />
        </Box>
        {isLogged && (
          <>
            <Tabs
              value={pathname}
              sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
              aria-label="navigation"
            >
              {navigation.map((item) => (
                <Tab
                  sx={{
                    height: 64,
                    color: '#666',
                    '&.Mui-selected': { color: '#666', fontWeight: 700 },
                  }}
                  key={item.title}
                  value={item.path}
                  label={item.title}
                  component={Link}
                  to={item.path}
                />
              ))}
            </Tabs>
            <Avatar
              alt="user"
              src={avatar}
              sx={{ width: 32, height: 32, mr: 2 }}
            />
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
