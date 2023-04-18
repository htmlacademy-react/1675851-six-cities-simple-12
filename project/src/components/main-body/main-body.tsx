import { useAppSelector } from '../../hooks';
import MainBodyContent from '../main-body-content/main-body-content';
import MainBodyPlaceholder from '../main-body-placeholder/main-body-placeholder';
import { getlocationOffers } from '../../store/offers-data/selectors';

function MainBody(): JSX.Element {
  const locationOffers = useAppSelector(getlocationOffers);

  return (
    <div className="cities">
      {
        locationOffers.length ?
          <MainBodyContent /> :
          <MainBodyPlaceholder />
      }
    </div>
  );
}

export default MainBody;
