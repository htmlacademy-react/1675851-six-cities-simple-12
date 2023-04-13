import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import ListMain from '../list-main/list-main';
import ListPlaceholder from '../list-placeholder/list-placeholder';
import { getData } from '../../store/selectors';
import { filterCallbackMap } from '../../maps';
import { setFilter } from '../../store/action';

function MainContent(): JSX.Element {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const {locationOffers} = useAppSelector(getData);

  useEffect(() => {
    dispatch(setFilter(filterCallbackMap[pathname]));
  }, [pathname, dispatch]);

  if (locationOffers.length) {
    return <ListMain />;
  }

  return <ListPlaceholder />;
}

export default MainContent;
