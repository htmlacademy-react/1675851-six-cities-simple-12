import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute, LocationRoute } from '../../enums';
import MainScreen from '../../pages/main-screen/main-screen';
import MainScreenContent from '../main-screen-content/main-screen-content';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

const locationRoutes = Object.values(LocationRoute);

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
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
            element={<LoginScreen />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
