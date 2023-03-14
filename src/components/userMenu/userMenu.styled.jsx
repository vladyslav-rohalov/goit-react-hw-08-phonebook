import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { RiLogoutCircleLine } from 'react-icons/ri';

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const ContainerUserMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  width: calc(100% - 1.25em);
  height: 1.5em;
  padding: 0 0.625em;
  color: #ffffff;
`;

export const GreetingsText = styled.p`
  font-size: 1.25em;
  margin: 0;
`;

export const IconUser = styled(RxAvatar)`
  width: 1.5em;
  height: 1.5em;
  fill: #ffffff;
`;

export const ButtonSignOut = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  border: none;
  cursor: pointer;
  width: 6em;
  height: 2em;
  border-radius: 0.5em;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 1) 27%,
    rgba(254, 186, 82, 1) 31%,
    rgba(254, 186, 82, 1) 100%
  );
`;

export const IconSignOut = styled(RiLogoutCircleLine)`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-7%, -50%);
  fill: #000000;
  width: 1em;
  height: 1em;
`;
