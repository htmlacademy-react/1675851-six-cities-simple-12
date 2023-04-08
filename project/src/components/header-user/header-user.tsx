import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import { LocationRoute } from '../../enums';
import { AuthorizationStatus } from '../../enums';
import { useAppSelector } from '../../hooks';
import { Props } from './types';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getData } from '../../store/selectors';

const Avatar = (): JSX.Element => <div className="header__avatar-wrapper user__avatar-wrapper"></div>;

const ConditionalPart = ({authorizationStatus}: Props): JSX.Element => {
  switch (authorizationStatus) {
    case AuthorizationStatus.Auth:
      return (
        <div className="header__nav-profile">
          <Avatar />
          <span className="header__user-name user__name">Email</span>
        </div>
      );
    default:
      return (
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
          <Avatar />
          <span className="header__login">Sign in</span>
        </Link>
      );
  }
};

function HeaderUser(): JSX.Element {
  const {authorizationStatus} = useAppSelector(getData);
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <ConditionalPart authorizationStatus={authorizationStatus}/>
        </li>
        {
          authorizationStatus === AuthorizationStatus.Auth &&

          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={LocationRoute.Paris}
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}

export default HeaderUser;
