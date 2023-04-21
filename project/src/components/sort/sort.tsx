import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getSort } from '../../store/offers-data/selectors';
import { setSort } from '../../store/offers-data/offers-data';
import { sortTitleMap, sortCallbackMap } from '../../maps';
import { SortType } from '../../enums';
import cn from 'classnames';
import './styles.css';

const options = Object.entries(sortTitleMap).map(([optionValue, optionTitle]) => ({optionValue, optionTitle}));
const keys = Object.keys(sortCallbackMap);

function Sort(): JSX.Element {
  const {pathname} = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [title, setTitle] = useState(sortTitleMap[SortType.Default]);

  const sort = useAppSelector(getSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSort(sortCallbackMap[SortType.Default]));
    setTitle(sortTitleMap[SortType.Default]);
    setDropdown(false);
  }, [pathname, dispatch]);

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setDropdown(!dropdown)}
      >
        {title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn(
          'places__options places__options--custom', {
            'places__options--opened': dropdown
          }
        )}
      >
        {
          options.map(({optionValue, optionTitle}) => (
            <li
              className={cn(
                'places__option', {
                  'places__option--active': optionValue === keys.find((key) => sortCallbackMap[key as SortType] === sort)
                }
              )}
              value={optionValue}
              tabIndex={0}
              key={optionTitle}
              onClick={() => {
                dispatch(setSort(sortCallbackMap[optionValue as SortType]));
                setTitle(optionTitle);
                setDropdown(false);
              }}
            >
              {optionTitle}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sort;
