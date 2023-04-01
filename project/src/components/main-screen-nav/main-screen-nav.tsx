import { LocationRoute } from '../../enums';
import { LocationRouteType } from '../../types';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const locationList = Object.keys(LocationRoute);

function MainScreenNav(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        locationList.map((locationItem) => (
          <li
            className="locations__item"
            key={locationItem}
          >
            <NavLink
              className={({isActive}) => cn('locations__item-link tabs__item', {'tabs__item--active': isActive})}
              to={LocationRoute[locationItem as LocationRouteType]}
            >
              <span>{locationItem}</span>
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default MainScreenNav;
