import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getData } from '../../store/selectors';
import { setSort, setLocationOffers } from '../../store/action';
import { SortType } from '../../enums';
import { sortTitleMap, sortCallbackMap } from '../../maps';
import cn from 'classnames';

const options = Object.entries(sortTitleMap).map(([optionValue, optionTitle]) => ({optionValue, optionTitle}));
const keys = Object.keys(sortCallbackMap);

function Sort(): JSX.Element {
  const [title, setTitle] = useState(sortTitleMap[SortType.Default]);
  const [dropdown, setDropdown] = useState(false);

  const {sort} = useAppSelector(getData);
  const dispatch = useAppDispatch();

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
                  'places__option--active': optionValue === keys.find((key) => sortCallbackMap[key] === sort)}
              )}
              value={optionValue}
              tabIndex={0}
              key={optionValue}
              onClick={
                () => {
                  dispatch(setSort(sortCallbackMap[optionValue]));
                  dispatch(setLocationOffers());
                  setTitle(optionTitle);
                  setDropdown(false);
                }
              }
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
