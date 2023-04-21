import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';
import { useEffect } from 'react';
import { AppRoute, LocationRoute } from '../../enums';
import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';
import Loader from '../../components/loader/loader';

const TITLE = '6 Cities — Main page';

function MainPage(): JSX.Element {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const offers = useAppSelector(getOffers);

  useEffect(() => {
    if (pathname === AppRoute.Root) {
      navigate(LocationRoute.Paris);
    }
  }, [pathname, navigate]);

  if (offers.length) {
    return (
      <div className="page page--gray page--main">
        <Header title={TITLE} profile />
        <MainContent />
      </div>
    );
  }

  return <Loader />;
}

export default MainPage;
