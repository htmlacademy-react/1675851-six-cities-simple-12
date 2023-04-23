import LoginForm from '../login-form/login-form';
import ToLocation from '../to-location/to-location';

function LoginContent(): JSX.Element {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <LoginForm />
        <ToLocation />
      </div>
    </main>
  );
}

export default LoginContent;
