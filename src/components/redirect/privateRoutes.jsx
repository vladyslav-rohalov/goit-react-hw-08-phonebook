import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  // console.log('!isLoggedIn =', !isLoggedIn);
  // console.log('!isRefreshing =', !isRefreshing);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
