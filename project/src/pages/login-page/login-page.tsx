import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../../enums';
import { LocationRoute } from '../../enums';
import Header from '../../components/header/header';
import LoginContent from '../../components/login-content/login-content';

const TITLE = '6 Cities — Login page';

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(LocationRoute.Paris);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Header title={TITLE} />
      <LoginContent />
    </div>
  );
}

export default LoginPage;
