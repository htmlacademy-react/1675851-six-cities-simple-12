import useStateRef from 'react-usestateref';
import { AuthData } from '../../types/data';
import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { EMAIL_PATTERN } from '../../consts';
import { loginAction } from '../../store/api-actions';
import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header-logo/header-logo';
import './styles.css';

function LoginScreen(): JSX.Element {
  const [formData, setFormData, formDataRef] = useStateRef<AuthData>({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useAppDispatch();

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(false);
    setFormData((prevFormData) => ({ ...prevFormData, [evt.target.name]: evt.target.value }));

    if (
      formDataRef.current.email.match(EMAIL_PATTERN) &&
      formDataRef.current.password.length > 0) {

      setIsFormValid(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formDataRef]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction(formData));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities &mdash; Login page</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  pattern=".+@.+\..+"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isFormValid}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
