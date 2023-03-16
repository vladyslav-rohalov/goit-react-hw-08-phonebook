import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const ContainerLock = styled.div`
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
  font-size: 0.9em;
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
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 25%;
  background: linear-gradient(
    90deg,
    rgba(180, 98, 14, 1) 0%,
    rgba(240, 195, 78, 1) 13%,
    rgba(240, 195, 78, 1) 100%
  );
`;

export const ButtonSignIn = styled.button`
  position: relative;
  ${buttonCoomonStyle}
  width: 56px;
  height: 56px;
  border-radius: 25%;

  background: linear-gradient(
    90deg,
    rgba(25, 133, 55, 1) 0%,
    rgba(58, 211, 100, 1) 13%,
    rgba(58, 211, 100, 1) 100%
  );
`;

export const IconSignIn = styled(AiOutlineLogin)`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translate(-3%, -50%);
  fill: #000000;
  width: 2em;
  height: 2em;
`;

export const IconSignUp = styled(HiArrowNarrowRight)`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translate(-3%, -50%);
  fill: #000000;
  width: 2em;
  height: 2em;
`;
