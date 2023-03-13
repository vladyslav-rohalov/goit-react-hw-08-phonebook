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
        <ButtonPhone>
          <IconPhone />
        </ButtonPhone>
      </LinkStyled>

      <LinkStyled>
        <ButtonMessaage disabled>
          <IconMessage />
        </ButtonMessaage>
      </LinkStyled>

      <LinkStyled>
        <ButtonMedia disabled>
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
