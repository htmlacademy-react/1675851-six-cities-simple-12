import Icons from '../../components/icons/icons';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderUser from '../../components/header-user/header-user';
import OfferScreenContent from '../../components/offer-screen-content/offer-screen-content';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import { setLocationById, setOfferList, setOfferItem, setLocationCenter } from '../../store/action';
import './styles.css';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const [offerId] = useState(Number(id));
  const {offerList, offerItem, locationCenter} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLocationById({offerId}));
    dispatch(setLocationCenter());
    dispatch(setOfferList());
    dispatch(setOfferItem({offerId}));
  }, [offerId, dispatch]);

  return (
    <div className="page">
      <Icons />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <HeaderUser />
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        {offerList && offerItem && locationCenter ? <OfferScreenContent locationCenter={locationCenter} offer={offerItem} offers={offerList} /> : ''}
      </main>
    </div>
  );
}

export default OfferScreen;
