import { useSelector } from 'react-redux';

import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import Authorization from 'components/Authorization/Authorization';
import UserMenu from 'components/UserMenu/UserMenu';

import { selectIsLoggedIn } from 'redux/Auth/selectors';
import css from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <div className={css['header-wrapper']}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <Authorization />}
        </div>
      </Container>
    </header>
  );
};

export default Header;