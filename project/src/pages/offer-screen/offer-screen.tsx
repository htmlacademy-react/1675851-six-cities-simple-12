import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getData } from '../../store/reducer';
import { useEffect } from 'react';
import { setLocationById } from '../../store/action';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderUser from '../../components/header-user/header-user';
import OfferScreenContent from '../../components/offer-screen-content/offer-screen-content';
import './styles.css';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const {offerItem} = useAppSelector(getData);

  useEffect(() => {
    dispatch(setLocationById({offerId: Number(id)}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <HeaderUser />
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        {offerItem && <OfferScreenContent offer={offerItem} />}
      </main>
    </div>
  );
}

export default OfferScreen;
