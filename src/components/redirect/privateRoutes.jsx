import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'Redux/auth/selectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/home',
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const shoudRedirect = !isLoggedIn && !isRefreshing;

  return shoudRedirect ? <Navigate to={redirectTo} /> : <Component />;
}
