import { Helmet } from 'react-helmet';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import LogInForm from 'components/LogInForm/LogInForm';

const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <main>
        <Section title="Log In form">
          <Container>
            <LogInForm />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default LogIn;