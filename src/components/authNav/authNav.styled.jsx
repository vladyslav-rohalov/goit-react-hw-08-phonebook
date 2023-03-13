import styled from '@emotion/styled';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 1.25em);
  height: 10em;
  padding: 0 0.625em;
  margin-top: 1em;
`;
const buttonCoomonStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export const ButtonStyled = styled.button`
  position: fixed;
  ${buttonCoomonStyle}
  width: 56px;
  height: 56px;
  border-radius: 25%;
  background-color: #f31717;
`;

export const IconAuthefication = styled(FaLock)`
  width: 80%;
  height: 80%;
  fill: #ffffff;
`;

export const ContainerAuth = styled.div`
  display: flex;
  gap: 3em;
  margin-top: 9em;
`;

export const ButtonSignUp = styled.button`
  ${buttonCoomonStyle}
  width: 9em;
  height: 3em;
  border-radius: 0.5em;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 1) 27%,
    rgba(254, 186, 82, 1) 31%,
    rgba(254, 186, 82, 1) 100%
  );
`;

export const ButtonSignIn = styled.button`
  ${buttonCoomonStyle}
  width: 9em;
  height: 3em;
  border-radius: 0.5em;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 1) 27%,
    rgba(58, 211, 100, 1) 31%,
    rgba(58, 211, 100, 1) 100%
  );
`;
