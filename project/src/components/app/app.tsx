import { Routes, Route } from 'react-router-dom';
import { AppRoute, LocationRoute } from '../../enums';
import MainPage from '../../pages/main-page/main-page';
import MainContent from '../main-content/main-content';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ScrollUp from '../scroll-up/scroll-up';
import { Fragment } from 'react';

const routes = Object.values(LocationRoute);

function App(): JSX.Element {
  return (
    <Fragment>
      <ScrollUp />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        >
          {
            routes.map((route) => (
              <Route
                key={route}
                path={route}
                element={<MainContent />}
              />
            ))
          }
        </Route>
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
