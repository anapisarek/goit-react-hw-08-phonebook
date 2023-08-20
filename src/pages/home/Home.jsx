import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <main className={css['home-main']}>
        <Section>
          <Container>
            <div className={css['greeting-wrap']}>
              <p className={css['greeting-text']}>
                Welcome to the PhoneBook App! Easily save and manage your
                contacts in one secure place. To get started, please{' '}
                <Link className={css.link} to="/register">
                  register
                </Link>{' '}
                or{' '}
                <Link className={css.link} to="/log-in">
                  log in
                </Link>
                .
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;