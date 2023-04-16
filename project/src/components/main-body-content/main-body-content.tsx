import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import { pluralize } from '../../utils';
import Sort from '../sort/sort';
import CardsComponent from '../cards-component/cards-component';
import MapComponent from '../map-component/map-component';

function MainBodyContent(): JSX.Element {
  const {pathname} = useLocation();
  const mapRef = useRef<HTMLElement>(null);
  const {locationPoint, locationOffers, selectedOffer} = useAppSelector(getData);

  useEffect(() => {
    if (mapRef.current !== null) {
      mapRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places" ref={mapRef}>
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{pluralize(locationOffers.length, 'place', 'places')} to stay in {locationOffers[0].city.name}</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          <CardsComponent offers={locationOffers} />
        </div>
      </section>
      <div className="cities__right-section">
        <MapComponent
          locationPoint={locationPoint}
          offers={locationOffers}
          selectedOffer={selectedOffer}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainBodyContent;
