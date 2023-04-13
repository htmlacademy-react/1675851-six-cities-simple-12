import { AuthData } from '../../types/data';
import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { EMAIL_PATTERN } from '../../consts';
import { login } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import { AuthorizationStatus } from '../../enums';
import { useNavigate } from 'react-router-dom';
import { LocationRoute } from '../../enums';
import './styles.css';
import Header from '../../components/header/header';
import { useEffect } from 'react';

const TITLE = '6 Cities — Login page';

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<AuthData>({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const {authorizationStatus} = useAppSelector(getData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(false);

    setFormData((prevData) => {
      const newData = ({ ...prevData, [evt.target.name]: evt.target.value });

      if (
        newData.email.match(EMAIL_PATTERN) &&
        newData.password.length > 0) {

        setIsFormValid(true);
      }

      return newData;
    });
  }, []);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(formData));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(LocationRoute.Paris);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Header
        title={TITLE}
      />
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

export default LoginPage;