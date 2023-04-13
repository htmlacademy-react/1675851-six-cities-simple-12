import { Props } from './types';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../logo/logo';
import Profile from '../profile/profile';

function Header({title, profile}: Props): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            {profile && <Profile />}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
