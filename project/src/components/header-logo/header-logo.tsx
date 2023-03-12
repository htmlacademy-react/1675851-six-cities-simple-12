import { useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../enums';

function HeaderLogo(): JSX.Element {
  const location = useLocation();

  switch (location.pathname === AppRoute.Root) {
    case true:
      return (
        <div className="header__left">
          <div className="header__logo-link">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </div>
        </div>
      );
    case false:
      return (
        <div className="header__left">
          <Link className="header__logo-link" to={AppRoute.Root}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
      );
  }
}

export default HeaderLogo;
