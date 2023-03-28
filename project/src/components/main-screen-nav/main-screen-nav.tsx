import { LocationRoute } from '../../enums';
import { LocationRouteType } from '../../types';
import { NavLink } from 'react-router-dom';

function MainScreenNav(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        Object.keys(LocationRoute).map((locationItem, index) => {
          const keyValue = `${index}-${locationItem}`;

          return (
            <li
              className="locations__item"
              key={keyValue}
            >
              <NavLink
                className={({isActive}) => [
                  'locations__item-link',
                  isActive ?
                    'tabs__item tabs__item--active' :
                    'tabs__item'
                ].join(' ')}
                to={LocationRoute[locationItem as LocationRouteType]}
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

export default MainScreenNav;
