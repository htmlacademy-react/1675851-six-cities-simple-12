import { filterTitleMap } from '../../maps';
import { getRandomInteger } from '../../utils';
import { memo } from 'react';

const locations = Object.entries(filterTitleMap).map(([route, title]) => ({route, title}));

function ToLocation(): JSX.Element {
  const randomLocation = locations[getRandomInteger(locations.length)];

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href={randomLocation.route}>
          <span>{randomLocation.title}</span>
        </a>
      </div>
    </section>
  );
}

export default memo(ToLocation);
