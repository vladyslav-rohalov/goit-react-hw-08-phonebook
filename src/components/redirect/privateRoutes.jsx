import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'Redux/auth/selectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isLoading = useSelector(authSelectors.selectIsLoading);
  const shouldRedirect = !isLoggedIn && !isLoading;
  // console.log('shouldRedirect = ', shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}
