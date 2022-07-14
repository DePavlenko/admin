import * as React from 'react';
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
}

export const Header = ({ logo: Logo, navigation, avatar }: HeaderProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [value, setValue] = React.useState('Dashboard');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
          onChange={handleChange}
          aria-label="navigation"
        >
          {navigation.map((item) => (
            <Tab
              sx={{
                height: 64,
                color: 'gray',
                '&.Mui-selected': { color: 'red' },
              }}
              key={item.title}
              value={item.title}
              label={item.title}
            />
          ))}
        </Tabs>
        <Avatar alt="user" src={avatar} sx={{ width: 32, height: 32, mr: 2 }} />
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
