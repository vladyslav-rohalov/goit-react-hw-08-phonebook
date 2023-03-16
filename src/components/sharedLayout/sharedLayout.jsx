import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Backdrop from 'components/backdrop/backdrop';
import UserMenu from 'components/userMenu/userMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/selectors';
import {
  Frame,
  Camera,
  ButtonLock,
  BackBar,
  Button,
  IconHome,
  IconBack,
} from './sharedLayout.styled';

export default function SharedLayout() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <div>
      <Backdrop />
      <Frame>
        <Camera />

        {isLoggedIn && <UserMenu />}
        {/* <Suspense fallback={<p>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>}>
         */}
        <Suspense>
          <Outlet />
        </Suspense>

        <Link to={'/'}>
          <ButtonLock />
        </Link>

        <BackBar>
          <Link to={'/home'}>
            <Button>
              <IconHome />
            </Button>
          </Link>
          <Link to={backLinkHref}>
            <Button>
              <IconBack />
            </Button>
          </Link>
        </BackBar>
      </Frame>
    </div>
  );
}
