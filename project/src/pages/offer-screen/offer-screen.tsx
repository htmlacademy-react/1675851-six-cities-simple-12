import { Props } from './types';
import SvgIcons from '../../components/svg-icons/svg-icons';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderNav from '../../components/header-nav/header-nav';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import './styles.css';
// import OfferCards from '../../components/offer-cards/offer-cards';
// import OfferMap from '../../components/offer-map/offer-map';

function OfferScreen({offer}: Props): JSX.Element {

  return (
    <div className="page">
      <SvgIcons />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <HeaderNav />
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((image, index) => {
                  const keyValue = `${index}-${image}`;

                  return (
                    <div
                      key={keyValue}
                      className="property__image-wrapper"
                    >
                      <img className="property__image" src={image} alt="" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.goods.map((item, index) => {
                      const keyValue = `${index}-${item}`;

                      return (
                        <li
                          key={keyValue}
                          className="property__inside-item"
                        >
                          {item}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      `user__avatar-wrapper property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''}`
                    }
                  >
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro ? <span className="property__user-status">Pro</span> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <OfferReviews />
            </div>
          </div>
          {/* className="property__map map" */}
          {/* <OfferMap /> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* <OfferCards /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
