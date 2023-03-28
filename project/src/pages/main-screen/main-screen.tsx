import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, LocationRoute } from '../../enums';
import { Helmet } from 'react-helmet-async';
import Icons from '../../components/icons/icons';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderUser from '../../components/header-user/header-user';
import LocationNav from '../../components/main-screen-nav/main-screen-nav';

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
      <Icons />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <HeaderUser />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index page__main--index-empty">
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
