import { Offer } from '../../types/data';
import { useAppDispatch } from '../../hooks';
import { setSelectedOffer, resetSelectedOffer } from '../../store/offers-data/offers-data';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import './styles.css';

type Props = {
  offer: Offer;
}

function Card({offer}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => dispatch(setSelectedOffer(offer))}
      onMouseLeave={() => dispatch(resetSelectedOffer())}
    >
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
