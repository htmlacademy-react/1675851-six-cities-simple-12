import { Link } from 'react-router-dom';
import { LocationRoute } from '../../enums';
import './styles.css';

function NotFoundContent(): JSX.Element {
  return (
    <main className="page__main">
      <div className="container">
        <section className="not-found">
          <h1 className="not-found__title">
            <span className="not-found__status-code">404</span>
            <span className="not-found__status-text">Page not found</span>
          </h1>
          <Link className="not-found__link" to={LocationRoute.Paris}>Go to main page</Link>
        </section>
      </div>
    </main>
  );
}

export default NotFoundContent;
