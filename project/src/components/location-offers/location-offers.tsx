import { Props } from './types';
import { Context } from './context';
import OfferCards from '../offer-cards/offer-cards';
import OfferMap from '../offer-map/offer-map';
import { useState } from 'react';

function LocationsOffers({offers}: Props): JSX.Element {
  const [offer, setOffer] = useState<number | null>(null);
  const locationSettings = offers[0].city.location;

  const set = (value: number | null) => setOffer(value);

  return (
    <Context.Provider value={{set}}>
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">places to stay in</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by&nbsp;</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            <OfferCards offers={offers} />
          </div>
        </section>
        <div className="cities__right-section">
          <OfferMap
            locationSettings={locationSettings}
            offers={offers}
            selectedOffer={offer}
          />
        </div>
      </div>
    </Context.Provider>
  );
}

export default LocationsOffers;
