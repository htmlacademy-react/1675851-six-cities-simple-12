import { LocationRoute } from '../../enums';
import { LocationRouteType } from '../../types';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getData } from '../../store/reducer';
import { useEffect } from 'react';
import { setLocationByName } from '../../store/action';
import MainScreenOffers from '../main-screen-offers/main-screen-offers';
import ListEmpty from '../list-empty/list-empty';

const getLocationByPath = (path: string) => Object.keys(LocationRoute)
  .find((key) => LocationRoute[key as LocationRouteType] === path) as LocationRouteType;

function MainScreenContent(): JSX.Element {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const {offers, offerList} = useAppSelector(getData);

  useEffect(() => {
    dispatch(setLocationByName({locationName: getLocationByPath(pathname)}));
    console.log(offers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, offers]);

  if (offerList.length) {
    return <MainScreenOffers offers={offerList} />;
  }

  return <ListEmpty />;
}

export default MainScreenContent;
