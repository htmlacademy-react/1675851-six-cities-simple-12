import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';
import { Link } from 'react-router-dom';
import { AppRoute, LocationRoute, AuthorizationStatus } from '../../enums';
import { AppDispatch } from '../../types/store';
import { logout } from '../../store/api-actions';
import './styles.css';

const Avatar = (): JSX.Element => <div className="header__avatar-wrapper user__avatar-wrapper" />;

const handleLogout = (dispatch: AppDispatch) => {
  dispatch(logout());
};

const UserNavigation = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  switch (authorizationStatus) {
    case AuthorizationStatus.Auth:
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <Avatar />
              <span className="header__user-name user__name">{user?.email}</span>
            </div>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={LocationRoute.Paris}
              onClick={() => handleLogout(dispatch)}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      );
    default:
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <Avatar />
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      );
  }
};

function Profile(): JSX.Element {
  return (
    <nav className="header__nav">
      <UserNavigation />
    </nav>
  );
}

export default Profile;
