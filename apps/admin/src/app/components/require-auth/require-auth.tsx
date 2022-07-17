import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
