import { LocationRoute } from '../../enums';
import { LocationRouteType } from '../../types/routes';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { setLocationOffers } from '../../store/action';
import MainScreenOffers from '../main-screen-offers/main-screen-offers';
import ListEmpty from '../list-empty/list-empty';
import { getData } from '../../store/selectors';
import { filterCallbackMap } from '../../maps';
import { setFilter } from '../../store/action';
import { setLocationPointByName } from '../../store/action';

const getLocationByPath = (path: string) => Object.keys(LocationRoute)
  .find((key) => LocationRoute[key as LocationRouteType] === path) as LocationRouteType;

function MainScreenContent(): JSX.Element {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const {offers, locationOffers} = useAppSelector(getData);

  useEffect(() => {
    const location = getLocationByPath(pathname);
    dispatch(setFilter(filterCallbackMap[location]));
    dispatch(setLocationOffers());
    dispatch(setLocationPointByName(location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, offers]);

  if (locationOffers.length) {
    return <MainScreenOffers offers={locationOffers} />;
  }

  return <ListEmpty />;
}

export default MainScreenContent;
