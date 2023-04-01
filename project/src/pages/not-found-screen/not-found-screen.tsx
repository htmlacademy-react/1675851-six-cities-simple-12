import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header-logo/header-logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import './styles.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>404 &mdash; Page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">
              <span className="not-found__status-code">404</span>
              <span className="not-found__status-text">Page not found</span>
            </h1>
            <Link className="not-found__link" to={AppRoute.Root}>Go to main page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
