import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { filterCallbackMap } from '../../maps';
import { setFilter } from '../../store/action';
import { Outlet } from 'react-router-dom';
import Filter from '../filter/filter';
import { LocationRoute } from '../../enums';

function MainContent(): JSX.Element {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilter(filterCallbackMap[pathname as LocationRoute]));
  }, [pathname, dispatch]);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Filter />
        </section>
      </div>
      <Outlet />
    </main>
  );
}

export default MainContent;
