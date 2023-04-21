import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { getlocationOffers, getLocationName, getLocationPoint, getSelectedOffer } from '../../store/offers-data/selectors';
import { pluralize } from '../../utils';
import Sort from '../sort/sort';
import Cards from '../cards/cards';
import Map from '../map/map';

function LocationContent(): JSX.Element {
  const {pathname} = useLocation();
  const mapRef = useRef<HTMLElement>(null);

  const locationOffers = useAppSelector(getlocationOffers);
  const locationName = useAppSelector(getLocationName);
  const locationPoint = useAppSelector(getLocationPoint);
  const selectedOffer = useAppSelector(getSelectedOffer);

  useEffect(() => {
    if (mapRef.current !== null) {
      mapRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <div className="cities__places-container container">
      <section
        className="cities__places places"
        ref={mapRef}
      >
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {pluralize(locationOffers.length, 'place', 'places')} to stay in {locationName}
        </b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          <Cards offers={locationOffers} />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          locationPoint={locationPoint}
          offers={locationOffers}
          selectedOffer={selectedOffer}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}

export default LocationContent;
