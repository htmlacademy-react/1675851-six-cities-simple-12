import { filterTitleMap } from '../../maps';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const options = Object.entries(filterTitleMap).map(([optionRoute, optionTitle]) => ({optionRoute, optionTitle}));

function Filter(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        options.map(({optionRoute, optionTitle}) => (
          <li
            className="locations__item"
            key={optionTitle}
          >
            <NavLink
              className={({isActive}) => cn(
                'locations__item-link tabs__item', {
                  'tabs__item--active': isActive
                }
              )}
              to={optionRoute}
            >
              <span>{optionTitle}</span>
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default Filter;
