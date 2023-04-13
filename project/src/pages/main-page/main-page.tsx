import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import { AppRoute, LocationRoute } from '../../enums';
import Filter from '../../components/filter/filter';
import Header from '../../components/header/header';
import { useEffect } from 'react';

const TITLE = '6 Cities — Main page';

function MainPage(): JSX.Element {
  const {isLoading} = useAppSelector(getData);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === AppRoute.Root) {
      navigate(LocationRoute.Paris);
    }
  }, [pathname, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
      <Header
        title={TITLE}
        profile
      />
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

export default MainPage;
