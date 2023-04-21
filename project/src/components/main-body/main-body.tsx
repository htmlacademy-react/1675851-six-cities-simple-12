import { useAppSelector } from '../../hooks';
import { getlocationOffers } from '../../store/offers-data/selectors';
import LocationContent from '../location-content/location-content';
import LocationPlaceholder from '../location-placeholder/location-placeholder';

function MainBody(): JSX.Element {
  const locationOffers = useAppSelector(getlocationOffers);

  return (
    <div className="cities">
      {
        locationOffers.length ? <LocationContent /> : <LocationPlaceholder />
      }
    </div>
  );
}

export default MainBody;
