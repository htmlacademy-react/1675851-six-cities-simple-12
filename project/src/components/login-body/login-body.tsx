import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { AuthFormData } from '../../types/data';
import { useAppDispatch } from '../../hooks';
import { EMAIL_PATTERN } from '../../consts';
import { login } from '../../store/api-actions';

function LoginBody(): JSX.Element {
  const [formData, setFormData] = useState<AuthFormData>({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);
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

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(formData));
  }, [formData, dispatch]);

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
  );
}

export default LoginBody;
