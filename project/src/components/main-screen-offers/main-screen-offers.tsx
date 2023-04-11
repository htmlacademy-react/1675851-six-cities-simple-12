import { Props } from './types';
import { useAppSelector } from '../../hooks';
import OfferList from '../offer-list/offer-list';
import OfferMap from '../offer-map/offer-map';
import { getData } from '../../store/selectors';
import Sort from '../sort/sort';

function MainScreenOffers({offers}: Props): JSX.Element {
  const {locationPoint, locationOffers, selectedOffer} = useAppSelector(getData);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {offers[0].city.name}</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          <OfferList offers={offers} />
        </div>
      </section>
      <div className="cities__right-section">
        <OfferMap
          locationPoint={locationPoint}
          locationOffers={locationOffers}
          selectedOffer={selectedOffer}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainScreenOffers;
