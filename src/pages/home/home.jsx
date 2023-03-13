import Time from 'components/time/time';
import Navigation from 'components/navigation/navigation';
import AuthNav from 'components/authNav/authNav';
import { Container } from './home.styled';

export default function Home() {
  return (
    <Container>
      <Time />
      <AuthNav />
      <Navigation />
    </Container>
  );
}
