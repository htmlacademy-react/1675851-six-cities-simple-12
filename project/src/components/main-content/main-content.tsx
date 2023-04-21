import { useLocation, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { setFilter } from '../../store/offers-data/offers-data';
import { filterCallbackMap } from '../../maps';
import { LocationRoute } from '../../enums';
import Filter from '../filter/filter';

function MainContent(): JSX.Element {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilter(filterCallbackMap[pathname as LocationRoute]));
  }, [pathname, dispatch]);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <Filter />
      <Outlet />
    </main>
  );
}

export default MainContent;
