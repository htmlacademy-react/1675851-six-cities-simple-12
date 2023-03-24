import { Props } from './types';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, LocationRoute } from '../../enums';
import MainScreen from '../../pages/main-screen/main-screen';
import LocationOffers from '../location-offers/location-offers';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App({offers}: Props): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
          >
            {
              Object.entries(LocationRoute).map(([location, path], index) => {
                const keyValue = `${index}-${location}`;
                const locationOffers = offers.filter((offer) => offer.city.name === location);

                return (
                  <Route
                    key={keyValue}
                    path={path}
                    element={<LocationOffers offers={locationOffers} />}
                  />
                );
              })
            }
          </Route>
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferScreen offer={offers[6]} />}
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
