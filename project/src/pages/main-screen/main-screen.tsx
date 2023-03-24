import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, LocationRoute } from '../../enums';
import { Helmet } from 'react-helmet-async';
import SvgIcons from '../../components/svg-icons/svg-icons';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderNav from '../../components/header-nav/header-nav';
import LocationNav from '../../components/location-nav/location-nav';

function MainScreen(): JSX.Element {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === AppRoute.Root) {
      navigate(LocationRoute.Paris);
    }
  }, [pathname, navigate]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities &mdash; Main page</title>
      </Helmet>
      <SvgIcons />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <HeaderNav />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationNav />
          </section>
        </div>
        <div className="cities">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
