import { Props } from './types';
import { useAppSelector } from '../../hooks';
import { getData } from '../../store/reducer';
import OfferList from '../offer-list/offer-list';
import OfferMap from '../offer-map/offer-map';

function MainScreenOffers({offers}: Props): JSX.Element {
  const {locationName, locationCenter} = useAppSelector(getData);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {locationName}</b>
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
          <OfferList offers={offers} />
        </div>
      </section>
      <div className="cities__right-section">
        <OfferMap
          locationCenter={locationCenter}
          offers={offers}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainScreenOffers;
