import { OffersProps } from '../../mocks/offers-types';
import { useState, Fragment } from 'react';
import PlaceCard from '../place-card/place-card';

function PlaceCards(props: OffersProps): JSX.Element {
  const {offers} = props;

  const [currentCard, setCurrentCard] = useState<null | number>(null);

  const {log} = console;

  log(currentCard);

  return (
    <Fragment>
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onPlaceCard={(id) => setCurrentCard(id)}
            outPlaceCard={(empty) => setCurrentCard(empty)}
          />
        ))
      }
    </Fragment>
  );
}

export default PlaceCards;
