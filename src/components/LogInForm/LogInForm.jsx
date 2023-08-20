import { useDispatch } from 'react-redux';
import { login } from 'redux/Auth/operations';
import css from './LogInForm.module.css';

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div className={css['log-in-form-wrapper']}>
      <form
        className={css['log-in-form']}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> Email </span>
          <input className={css['log-in-input']} type="email" name="email" />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> Password </span>
          <input
            className={css['log-in-input']}
            type="password"
            name="password"
          />
        </label>
        <button className={css['log-in-btn']} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInForm;