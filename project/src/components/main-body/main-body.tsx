import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import MainBodyContent from '../main-body-content/main-body-content';
import MainBodyPlaceholder from '../main-body-placeholder/main-body-placeholder';

function MainBody(): JSX.Element {
  const {locationOffers} = useAppSelector(getData);

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
