import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../enums';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  cardsCount: number;
}

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen cardsCount={cardsCount} />}
        />
        <Route path={AppRoute.Room} >
          <Route
            path=':id'
            element={<RoomScreen />}
          />
        </Route>
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
  );
}

export default App;
