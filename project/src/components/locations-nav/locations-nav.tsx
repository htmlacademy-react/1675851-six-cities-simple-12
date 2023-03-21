import { Props } from './locations-nav-types';
import cn from 'classnames';

function LocationsNav({locations, currentLocation, onLocationClick}: Props): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        locations.map((location, index) => {
          const keyValue = `${index}-${location}`;

          return (
            <li
              className="locations__item"
              key={keyValue}
            >
              <a
                className={cn(
                  'locations__item-link tabs__item', {
                    'tabs__item--active': location === currentLocation
                  })}
                onClick={() => onLocationClick(location)}
                href="/#"
              >
                <span>{location}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default LocationsNav;
