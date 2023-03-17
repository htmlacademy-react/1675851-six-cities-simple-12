import { Props } from './place-cards-types';
import { useState, Fragment } from 'react';
import PlaceCard from '../place-card/place-card';

function PlaceCards({offers}: Props): JSX.Element {
  const [/*currentCard*/, setCurrentCard] = useState<null | number>(null);

  return (
    <Fragment>
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onPlaceCard={(id) => setCurrentCard(id)}
            outPlaceCard={(nothing) => setCurrentCard(nothing)}
          />
        ))
      }
    </Fragment>
  );
}

export default PlaceCards;
