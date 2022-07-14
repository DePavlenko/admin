import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Settings from './pages/settings/settings';
import { ThemeProvider, Header, NavItem } from '@roamlerorg/ui-components';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactComponent as Logo } from '../assets/logo.svg';
import userAvatar from '../assets/user.jpg';

const navigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
  },
  {
    title: 'Settings',
    path: '/settings',
  },
];

export function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Header logo={Logo} navigation={navigation} avatar={userAvatar} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
