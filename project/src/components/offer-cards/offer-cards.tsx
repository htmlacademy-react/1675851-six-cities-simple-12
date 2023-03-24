import { Props } from './types';
import { Fragment } from 'react';
import OfferCard from '../offer-card/offer-card';

function OfferCards({offers}: Props): JSX.Element {
  return (
    <Fragment>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </Fragment>
  );
}

export default OfferCards;
