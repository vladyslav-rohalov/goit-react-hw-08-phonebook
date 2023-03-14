import { useState } from 'react';

import {
  LinkStyled,
  ContainerLock,
  ButtonStyled,
  IconAuthefication,
  ContainerAuth,
  ButtonSignUp,
  ButtonSignIn,
  IconSignIn,
  IconSignUp,
} from './authNav.styled';

export default function AuthNav() {
  const [lock, setLogin] = useState(false);

  return (
    <ContainerLock>
      <ButtonStyled onClick={() => setLogin(!lock)}>
        <IconAuthefication />
      </ButtonStyled>
      {lock && (
        <ContainerAuth>
          <LinkStyled to="/signup">
            <ButtonSignUp type="button">
              <IconSignUp />
              Sign Up
            </ButtonSignUp>
          </LinkStyled>

          <LinkStyled to="/signin">
            <ButtonSignIn type="button">
              <IconSignIn />
              Sign In
            </ButtonSignIn>
          </LinkStyled>
        </ContainerAuth>
      )}
    </ContainerLock>
  );
}
