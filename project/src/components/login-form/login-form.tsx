import { useState, FormEvent } from 'react';
import { AuthFormData } from '../../types/data';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';
import './styles.css';

const EMAIL_PATTERN = /.+@.+\..+/;
const PASSWORD_PATTERN = /(?=.*[a-zA-Z])(?=.*[0-9])/;

function LoginForm(): JSX.Element {
  const [formData, setFormData] = useState<AuthFormData>({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = (evt: FormEvent<HTMLInputElement>) => {
    setIsFormValid(false);

    const input = evt.target as HTMLInputElement;

    setFormData((prevData) => {
      const newData = ({ ...prevData, [input.name]: input.value });

      if (
        newData.email.match(EMAIL_PATTERN) &&
        newData.password.match(PASSWORD_PATTERN)) {

        setIsFormValid(true);
      }

      return newData;
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(formData));
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" onSubmit={handleSubmit}>
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
            onInput={handleChange}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            pattern="^(?:(?=.*[a-zA-Z])(?=.*[0-9]).*)$"
            required
            onInput={handleChange}
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
  );
}

export default LoginForm;
