import UserMenu from 'components/userMenu/userMenu';
import Time from 'components/time/time';
import Navigation from 'components/navigation/navigation';
import AuthNav from 'components/authNav/authNav';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';

export default function Home() {
  return (
    <Container>
      <UserMenu />
      <Time />
      <AuthNav />
      <Navigation />
    </Container>
  );
}
