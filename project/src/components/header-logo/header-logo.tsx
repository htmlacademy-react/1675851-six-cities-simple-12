import { Props } from './header-logo-types';
import { useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import './header-logo-styles.css';

const ConditionalLink = ({pathname, children}: Props): JSX.Element => {
  switch (pathname) {
    case AppRoute.Root: {
      return (
        <div className="header__left">
          <div className="header__logo-link">
            {children}
          </div>
        </div>
      );
    }

    default: {
      return (
        <div className="header__left">
          <Link className="header__logo-link" to={AppRoute.Root}>
            {children}
          </Link>
        </div>
      );
    }
  }
};

function HeaderLogo(): JSX.Element {
  const location = useLocation();

  return (
    <div className="header__left">
      <ConditionalLink pathname={location.pathname}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </ConditionalLink>
    </div>
  );
}

export default HeaderLogo;
