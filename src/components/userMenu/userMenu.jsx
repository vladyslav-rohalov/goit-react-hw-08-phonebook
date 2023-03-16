import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/selectors';
import authOperations from 'Redux/auth/operations';
import {
  ContainerUserMenu,
  Greetings,
  IconUser,
  LinkStyled,
  ButtonSignOut,
  IconSignOut,
} from './userMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);
  return (
    <ContainerUserMenu>
      <Greetings>
        <IconUser />
        Hi, {userName}
      </Greetings>

      <LinkStyled>
        <ButtonSignOut onClick={() => dispatch(authOperations.signOut())}>
          <IconSignOut />
        </ButtonSignOut>
      </LinkStyled>
    </ContainerUserMenu>
  );
}
