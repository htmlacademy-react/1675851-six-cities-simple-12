import LoginBody from '../login-body/login-body';
import LoginToLocation from '../login-to-location/login-to-location';
import './styles.css';

function LoginContent(): JSX.Element {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <LoginBody />
        <LoginToLocation />
      </div>
    </main>
  );
}

export default LoginContent;
