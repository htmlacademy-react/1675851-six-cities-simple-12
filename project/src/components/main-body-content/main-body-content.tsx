import { useAppSelector } from '../../hooks';
import CardsComponent from '../cards-component/cards-component';
import MapComponent from '../map-component/map-component';
import { getData } from '../../store/selectors';
import Sort from '../sort/sort';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
        <b className="places__found">{locationOffers.length} places to stay in {locationOffers[0].city.name}</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          <CardsComponent offers={locationOffers} />
        </div>
      </section>
      <div className="cities__right-section">
        <MapComponent
          locationPoint={locationPoint}
          locationOffers={locationOffers}
          selectedOffer={selectedOffer}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainBodyContent;
