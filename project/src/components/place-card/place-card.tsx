import { Props } from './place-card-types';
import { AppRoute } from '../../enums';
import { Link } from 'react-router-dom';
import './place-card-styles.css';

function PlaceCard({offer, onPlaceCard, outPlaceCard}: Props): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => onPlaceCard(offer.id)}
      onMouseLeave={() => outPlaceCard(null)}
    >
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ `${AppRoute.Offer}/${offer.id}` }>
          <img className="place-card__image" src={ offer.previewImage } width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ offer.price }&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `${AppRoute.Offer}/${offer.id}` }>{ offer.title }</Link>
        </h2>
        <p className="place-card__type">{ offer.type }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
