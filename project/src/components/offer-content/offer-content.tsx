import { Offer } from '../../types/data';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getLocationPoint, getNearbyOffers } from '../../store/offer-data/selectors';
import { useEffect } from 'react';
import { loadNearbyOffers, loadComments } from '../../store/api-actions';
import { pluralize } from '../../utils';
import cn from 'classnames';
import OfferReviews from '../offer-reviews/offer-reviews';
import Map from '../map/map';
import Cards from '../cards/cards';
import './styles.css';

type Props = {
  offer: Offer;
}

function OfferContent({offer}: Props): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const locationPoint = useAppSelector(getLocationPoint);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  useEffect(() => {
    if (id) {
      dispatch(loadNearbyOffers(id));
      dispatch(loadComments(id));
    }
  }, [id, dispatch]);

  return (
    <main className='page__main page__main--property'>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              offer.images.slice(0, 6).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium && <div className="property__mark"><span>Premium</span></div>}
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
                {pluralize(offer.bedrooms, 'Bedroom', 'Bedrooms')}
              </li>
              <li className="property__feature property__feature--adults">
                Max {pluralize(offer.maxAdults, 'adult', 'adults')}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  offer.goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))
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
                {offer.host.isPro && <span className="property__user-status">Pro</span>}
              </div>
              <div className="property__description">
                <p className="property__text">{offer.description}</p>
              </div>
            </div>
            <OfferReviews />
          </div>
        </div>
        <Map
          locationPoint={locationPoint}
          offers={[offer, ...nearbyOffers]}
          className={'property__map'}
          selectedOffer={offer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <Cards offers={nearbyOffers}/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferContent;
