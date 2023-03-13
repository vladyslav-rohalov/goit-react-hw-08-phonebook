import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerLogin,
  ButtonStyled,
  IconAuthefication,
  ContainerAuth,
  ButtonSignUp,
  ButtonSignIn,
} from './authNav.styled';

export default function AuthNav() {
  const [login, setLogin] = useState(false);

  return (
    <ContainerLogin>
      <ButtonStyled onClick={() => setLogin(!login)}>
        <IconAuthefication />
      </ButtonStyled>
      {login && (
        <ContainerAuth>
          <Link>
            <ButtonSignUp type="button">Sign Up</ButtonSignUp>
          </Link>

          <Link>
            <ButtonSignIn type="button">Sign In</ButtonSignIn>
          </Link>
        </ContainerAuth>
      )}
    </ContainerLogin>
  );
}
