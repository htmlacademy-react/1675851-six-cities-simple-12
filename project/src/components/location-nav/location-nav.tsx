import { NavLink } from 'react-router-dom';
import { LocationRoute } from '../../enums';
import { LocationRouteType } from './types';

const locationList = Object.keys(LocationRoute);

function LocationsNav(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        locationList.map((locationItem, index) => {
          const keyValue = `${index}-${locationItem}`;

          return (
            <li
              className="locations__item"
              key={keyValue}
            >
              <NavLink
                to={LocationRoute[locationItem as LocationRouteType]}
                className={({isActive}) => [
                  'locations__item-link',
                  isActive ?
                    'tabs__item tabs__item--active' :
                    'tabs__item'
                ].join(' ')}
              >
                <span>{locationItem}</span>
              </NavLink>
            </li>
          );
        })
      }
    </ul>
  );
}

export default LocationsNav;
