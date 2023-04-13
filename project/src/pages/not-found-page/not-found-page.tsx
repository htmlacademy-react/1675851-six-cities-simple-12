import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import './styles.css';
import Header from '../../components/header/header';

const TITLE = '6 Cities — 404 page';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <Header
        title={TITLE}
      />
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

export default NotFoundPage;
