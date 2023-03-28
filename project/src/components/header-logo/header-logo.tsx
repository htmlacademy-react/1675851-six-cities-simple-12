import { Props } from './types';
import { LocationRoute } from '../../enums';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const ConditionalLink = ({pathname, children}: Props): JSX.Element => {
  switch (pathname) {
    case LocationRoute.Paris: {
      return (
        <div className="header__logo-link">{children}</div>
      );
    }
    default: {
      return (
        <Link className="header__logo-link" to={LocationRoute.Paris}>{children}</Link>
      );
    }
  }
};

function HeaderLogo(): JSX.Element {
  const {pathname} = useLocation();

  return (
    <div className="header__left">
      <ConditionalLink pathname={pathname}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </ConditionalLink>
    </div>
  );
}

export default HeaderLogo;
