import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { ContainerUtils } from '../../components/elements/utilsContainer/utilsContainer.styled';
import { Title } from 'components/elements/title/title.styled';
import { Form, Label, Input } from '../../components/elements/form/form.styled';
import ButtonCommon from 'components/elements/button/button';

export default function SignIn() {
  return (
    <Container>
      <ContainerUtils>
        <Title>Sign In</Title>
        <Form>
          <Label>
            <Input type="email" name="email" placeholder="Email" required />
          </Label>
          <Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Label>
          <ButtonCommon titleButton="Sign In" />
        </Form>
      </ContainerUtils>
    </Container>
  );
}
