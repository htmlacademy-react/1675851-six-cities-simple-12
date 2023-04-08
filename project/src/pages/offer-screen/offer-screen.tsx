import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderUser from '../../components/header-user/header-user';
import OfferScreenContent from '../../components/offer-screen-content/offer-screen-content';
import { getData } from '../../store/selectors';
import { fetchOfferAction } from '../../store/api-actions';
import './styles.css';
import Loader from '../../components/loader/loader';
import { useEffect } from 'react';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const {offer, isLoading} = useAppSelector(getData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction({id}));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

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
        {
          offer && <OfferScreenContent offer={offer} />
        }
      </main>
    </div>
  );
}

export default OfferScreen;
