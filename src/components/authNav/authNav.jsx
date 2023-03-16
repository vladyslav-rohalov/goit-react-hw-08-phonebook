import { useState } from 'react';

import {
  LinkStyled,
  ContainerLock,
  ButtonStyled,
  IconAuthefication,
  ContainerAuth,
  ButtonSignUp,
  ButtonSignIn,
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
              Sign <br />
              Up
            </ButtonSignUp>
          </LinkStyled>

          <LinkStyled to="/signin">
            <ButtonSignIn type="button">
              Sign <br />
              In
            </ButtonSignIn>
          </LinkStyled>
        </ContainerAuth>
      )}
    </ContainerLock>
  );
}
