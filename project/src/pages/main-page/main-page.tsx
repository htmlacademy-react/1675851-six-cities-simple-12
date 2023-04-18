import { useAppSelector } from '../../hooks';
import { getIsLoading } from '../../store/offers-data/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, LocationRoute } from '../../enums';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';

const TITLE = '6 Cities — Main page';

function MainPage(): JSX.Element {
  const isLoading = useAppSelector(getIsLoading);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === AppRoute.Root) {
      navigate(LocationRoute.Paris);
    }
  }, [pathname, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
      <Header title={TITLE} profile />
      <MainContent />
    </div>
  );
}

export default MainPage;
