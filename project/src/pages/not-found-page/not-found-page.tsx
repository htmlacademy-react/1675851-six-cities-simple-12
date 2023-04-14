import Header from '../../components/header/header';
import NotFoundContent from '../../components/not-found-content/not-found-content';

const TITLE = '6 Cities — 404 page';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <Header title={TITLE} />
      <NotFoundContent />
    </div>
  );
}

export default NotFoundPage;
