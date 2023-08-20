import { Helmet } from 'react-helmet';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <main>
        <Section title="Registration form">
          <Container>
            <RegistrationForm />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Register;