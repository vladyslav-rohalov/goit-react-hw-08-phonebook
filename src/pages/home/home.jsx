import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/selectors';
import Time from 'components/time/time';
import Navigation from 'components/navigation/navigation';
import AuthNav from 'components/authNav/authNav';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Container>
      <Time />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <Navigation />}
    </Container>
  );
}
