import { Offers } from '../../types/data';
import { Fragment } from 'react';
import Card from '../card/card';

type Props = {
  offers: Offers;
};

function Cards({offers}: Props): JSX.Element {
  return (
    <Fragment>
      {
        offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </Fragment>
  );
}

export default Cards;
