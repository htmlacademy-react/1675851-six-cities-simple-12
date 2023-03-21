import { Props } from './main-screen-types';
import { useState } from 'react';
import { LOCATIONS, Context } from './main-screen-utils';
import { Helmet } from 'react-helmet-async';
import SvgIcons from '../../components/svg-icons/svg-icons';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderNav from '../../components/header-nav/header-nav';
import LocationsNav from '../../components/locations-nav/locations-nav';
import OfferCards from '../../components/offer-cards/offer-cards';
import OfferMap from '../../components/offer-map/offer-map';

function MainScreen({offers}: Props): JSX.Element {
  const [currentLocation, setCurrentLocation] = useState<string>(LOCATIONS[0]);
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  offers = offers.filter((offer) => offer.city.name === currentLocation);

  const locationSettings = offers[0].city.location;
  const getSelectedOffer = (value: number | null) => setSelectedOffer(value);

  return (
    <Context.Provider value={{getSelectedOffer}}>
      <div className="page page--gray page--main">
        <Helmet>
          <title>6 Cities &mdash; Main page</title>
        </Helmet>
        <SvgIcons />
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <HeaderLogo />
              <HeaderNav />
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsNav
                locations={LOCATIONS}
                currentLocation={currentLocation}
                onLocationClick={(location) => setCurrentLocation(location)}
              />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentLocation}</b>
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
                  selectedOffer={selectedOffer}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default MainScreen;
