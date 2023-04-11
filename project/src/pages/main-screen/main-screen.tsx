import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderUser from '../../components/header-user/header-user';
import Filter from '../../components/filter/filter';
import { Outlet } from 'react-router-dom';

function MainScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities &mdash; Main page</title>
      </Helmet>
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
            <Filter />
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
