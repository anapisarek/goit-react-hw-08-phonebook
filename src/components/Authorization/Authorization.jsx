import { NavLink } from 'react-router-dom';
import css from './Authorization.module.css';

const Authorization = () => {
  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['nav-link'];

  return (
    <nav className={css.navigation}>
      <NavLink className={navLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={navLinkClassName} to="/log-in">
        Log In
      </NavLink>
    </nav>
  );
};

export default Authorization;