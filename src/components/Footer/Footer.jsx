import Container from 'components/Container/Container';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <p className={css['footer-text']}>PhoneBook</p>
        <p className={css['footer-text']}>Feel in touch the world</p>
        <p className={css['footer-text']}>&copy; 2023</p>
      </Container>
    </footer>
  );
};

export default Footer;