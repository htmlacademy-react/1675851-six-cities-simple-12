import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { locationTitleMap } from '../../maps';

const locationList = Object.entries(locationTitleMap).map(([route, title]) => ({route, title}));

function MainScreenNav(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        locationList.map(({route, title}) => (
          <li
            className="locations__item"
            key={title}
          >
            <NavLink
              className={({isActive}) => cn('locations__item-link tabs__item', {'tabs__item--active': isActive})}
              to={route}
            >
              <span>{title}</span>
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default MainScreenNav;
