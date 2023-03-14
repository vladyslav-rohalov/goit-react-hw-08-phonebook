import {
  ContainerUserMenu,
  GreetingsText,
  IconUser,
  LinkStyled,
  ButtonSignOut,
  IconSignOut,
} from './userMenu.styled';

export default function UserMenu() {
  return (
    <ContainerUserMenu>
      <GreetingsText>Hi, </GreetingsText>
      <IconUser />
      <LinkStyled>
        <ButtonSignOut>
          <IconSignOut />
          SignOut
        </ButtonSignOut>
      </LinkStyled>
    </ContainerUserMenu>
  );
}
