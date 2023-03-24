import { Props } from './types';
import { LocationRoute } from '../../enums';
import { useLocation, Link } from 'react-router-dom';
import './styles.css';

const ConditionalLink = ({pathname, children}: Props): JSX.Element => {
  switch (pathname) {
    case LocationRoute.Paris: {
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
          <Link className="header__logo-link" to={LocationRoute.Paris}>
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
