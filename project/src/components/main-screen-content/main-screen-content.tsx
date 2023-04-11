import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import MainScreenOffers from '../main-screen-offers/main-screen-offers';
import ListEmpty from '../list-empty/list-empty';
import { getData } from '../../store/selectors';
import { filterCallbackMap } from '../../maps';
import { setFilter } from '../../store/action';

function MainScreenContent(): JSX.Element {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const {offers, locationOffers} = useAppSelector(getData);

  useEffect(() => {
    dispatch(setFilter(filterCallbackMap[pathname]));
  }, [pathname, offers, dispatch]);

  if (locationOffers.length) {
    return <MainScreenOffers offers={locationOffers} />;
  }

  return <ListEmpty />;
}

export default MainScreenContent;
