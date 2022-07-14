import Dashboard from './pages/dashboard/Dashboard';
import { ThemeProvider, Header, NavItem } from '@roamlerorg/ui-components';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactComponent as Logo } from '../assets/logo.svg';
import userAvatar from '../assets/user.jpg';

const navigation: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
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
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
