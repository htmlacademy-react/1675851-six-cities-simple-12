import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import { LocationRoute } from '../../enums';
import { LocationRouteType } from '../../types';
import { setLocationByName, setOfferList, setLocationCenter } from '../../store/action';
import MainScreenOffers from '../main-screen-offers/main-screen-offers';
import MainScreenOffersEmpty from '../main-screen-offers-empty/main-screen-offers-empty';

const getLocationNameByPath = (path: string) => Object.keys(LocationRoute).find((key) => LocationRoute[key as LocationRouteType] === path);

function MainScreenContent(): JSX.Element {
  const {pathname} = useLocation();
  const [locationName, setLocationName] = useState<LocationRouteType>();
  const {location, offerList, locationCenter} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLocationName(getLocationNameByPath(pathname) as LocationRouteType);
    dispatch(setLocationByName({locationName}));
    dispatch(setOfferList());
    dispatch(setLocationCenter());
  }, [pathname, locationName, dispatch]);

  return (location && offerList && locationCenter) ?
    <MainScreenOffers locationName={location} offers={offerList} locationCenter={locationCenter} /> :
    <MainScreenOffersEmpty />;
}

export default MainScreenContent;
