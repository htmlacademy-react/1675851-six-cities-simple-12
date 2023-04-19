// посмотреть

import { filterTitleMap } from '../../maps';
import { useMemo } from 'react';
import { getRandomInteger } from '../../utils';

const locations = Object.entries(filterTitleMap).map(([locationRoute, locationTitle]) => ({locationRoute, locationTitle}));

function LoginToLocation(): JSX.Element {
  const location = useMemo(() => locations[getRandomInteger(locations.length)], []);

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href={location.locationRoute}>
          <span>{location.locationTitle}</span>
        </a>
      </div>
    </section>
  );
}

export default LoginToLocation;
