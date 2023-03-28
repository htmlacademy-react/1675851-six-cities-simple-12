import { Props } from './types';
import { Fragment } from 'react';
import cn from 'classnames';
import ReviewList from '../review-list/review-list';
import { MapClassName } from '../../enums';
import OfferMap from '../offer-map/offer-map';
import OfferList from '../offer-list/offer-list';

function OfferScreenContent({offer, offers, locationCenter}: Props): JSX.Element {
  return (
    <Fragment>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              offer.images.map((image, index) => {
                const keyValue = `${index}-${image}`;

                return (
                  <div className="property__image-wrapper" key={keyValue}>
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
              <h1 className="property__name">{offer.title}</h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
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

                    return <li className="property__inside-item" key={keyValue}>{item}</li>;
                  })
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={cn('property__avatar-wrapper user__avatar-wrapper', {
                  'property__avatar-wrapper--pro': offer.host.isPro
                })}
                >
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="" />
                </div>
                <span className="property__user-name">{offer.host.name}</span>
                {offer.host.isPro ? <span className="property__user-status">Pro</span> : ''}
              </div>
              <div className="property__description">
                <p className="property__text">{offer.description}</p>
              </div>
            </div>
            <ReviewList />
          </div>
        </div>
        <OfferMap
          locationCenter={locationCenter}
          offers={offers}
          className={MapClassName.Offer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferList offers={offers}/>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default OfferScreenContent;
