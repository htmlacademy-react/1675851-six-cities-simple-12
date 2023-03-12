import { OfferProps, PlaceCardState } from './place-card-types';
import { Offer } from '../../mocks/offers-types';
import { AppRoute } from '../../enums';
import { Link } from 'react-router-dom';
import './place-card-styles.css';

function PlaceCard(props: OfferProps): JSX.Element {
  const {offer, onPlaceCard, outPlaceCard} = props;

  function createPlaceCardState(item: Offer): PlaceCardState {
    return {
      id: item.id,
      isPremium: item.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '',
      route: `${AppRoute.Offer}/${item.id}`,
      previewImage: item.previewImage,
      price: item.price,
      rating: `${item.rating * 20}%`,
      title: item.title,
      type: item.type
    };
  }

  const state = createPlaceCardState(offer);

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => onPlaceCard(offer.id)}
      onMouseLeave={() => outPlaceCard(null)}
    >
      {state.isPremium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ state.route }>
          <img className="place-card__image" src={ state.previewImage } width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ state.price }&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: state.rating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ state.route }>{ state.title }</Link>
        </h2>
        <p className="place-card__type">{ state.type }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
