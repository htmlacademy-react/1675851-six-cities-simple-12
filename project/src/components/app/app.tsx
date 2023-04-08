import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute, LocationRoute } from '../../enums';
import MainScreen from '../../pages/main-screen/main-screen';
import MainScreenContent from '../main-screen-content/main-screen-content';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../enums';
import { getData } from '../../store/selectors';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { Fragment } from 'react';
import Loader from '../loader/loader';

const locationRoutes = Object.values(LocationRoute);

function App(): JSX.Element {
  const {authorizationStatus, isLoading} = useAppSelector(getData);

  return (
    <Fragment>
      <ScrollToTop />

      <Routes>
        <Route
          path={AppRoute.Root}
          element={isLoading ? <Loader /> : <MainScreen />}
        >
          <Route
            index
            element={<Navigate replace to={LocationRoute.Paris} />}
          />
          {
            locationRoutes.map((locationRoute) => (
              <Route
                key={locationRoute}
                path={locationRoute}
                element={<MainScreenContent />}
              />
            ))
          }
        </Route>
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={
            authorizationStatus === AuthorizationStatus.Auth ?
              <Navigate replace to={LocationRoute.Paris} /> :
              <LoginScreen />
          }
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
