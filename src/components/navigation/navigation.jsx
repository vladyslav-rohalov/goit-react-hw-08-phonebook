import {
  HomeIconBar,
  LinkStyled,
  ButtonPhone,
  ButtonMessaage,
  IconPhone,
  IconMessage,
  ButtonMedia,
  ButtonYoutube,
  IconChrome,
  IconYouTube,
} from './navigation.styled';

export default function Navigation() {
  return (
    <HomeIconBar>
      <LinkStyled to="/phonebook">
        <ButtonPhone type="button">
          <IconPhone />
        </ButtonPhone>
      </LinkStyled>

      <LinkStyled>
        <ButtonMessaage>
          <IconMessage />
        </ButtonMessaage>
      </LinkStyled>

      <LinkStyled>
        <ButtonMedia>
          <IconChrome />
        </ButtonMedia>
      </LinkStyled>

      <LinkStyled to="/youtube">
        <ButtonYoutube>
          <IconYouTube />
        </ButtonYoutube>
      </LinkStyled>
    </HomeIconBar>
  );
}
