import { Props } from './types';
import { Fragment } from 'react';
import OfferItem from '../offer-item/offer-item';

function OfferList({offers}: Props): JSX.Element {
  return (
    <Fragment>
      {
        offers.map((offer) => (
          <OfferItem
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </Fragment>
  );
}

export default OfferList;
