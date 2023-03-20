import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/home',
}) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
