import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/Auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['nav-link'];

  return (
    <nav className={css.navigation}>
      <NavLink className={navLinkClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navLinkClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;