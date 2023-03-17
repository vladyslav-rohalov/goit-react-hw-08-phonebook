import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/selectors';
import Time from 'components/time/time';
import AuthNav from 'components/authNav/authNav';
import { Locked, UnlockButton, IconFingerPrint } from './screenLock.styled';

export default function ScreenLock() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const [lock, setLock] = useState(false);
  return (
    <Locked>
      <Time />
      {lock && <AuthNav />}
      {isLoggedIn ? (
        <Link to="/home">
          <UnlockButton type="button">
            <IconFingerPrint />
          </UnlockButton>
        </Link>
      ) : (
        <UnlockButton
          type="button"
          onClick={() => {
            setLock(!lock);
          }}
        >
          <IconFingerPrint />
        </UnlockButton>
      )}
    </Locked>
  );
}
