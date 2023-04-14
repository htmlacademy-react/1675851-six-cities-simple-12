import { Props } from './types';
import { Fragment } from 'react';
import CardComponent from '../card-component/card-component';

function CardsComponent({offers}: Props): JSX.Element {
  return (
    <Fragment>
      {
        offers.map((offer) => (
          <CardComponent
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </Fragment>
  );
}

export default CardsComponent;
