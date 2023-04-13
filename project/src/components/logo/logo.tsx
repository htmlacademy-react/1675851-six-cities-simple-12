import { Props } from './types';
import { useLocation, Link } from 'react-router-dom';
import { LocationRoute } from '../../enums';
import './styles.css';

const ConditionalLink = ({children}: Props): JSX.Element => {
  const {pathname} = useLocation();

  switch (pathname) {
    case LocationRoute.Paris:
      return (
        <div className="header__logo-link">
          {children}
        </div>
      );

    default:
      return (
        <Link className="header__logo-link" to={LocationRoute.Paris}>
          {children}
        </Link>
      );
  }
};

function Logo(): JSX.Element {
  return (
    <div className="header__left">
      <ConditionalLink>
        <img className="header__logo" src="img/logo.svg" alt="Logo of Six Cities" width="81" height="41" />
      </ConditionalLink>
    </div>
  );
}

export default Logo;
