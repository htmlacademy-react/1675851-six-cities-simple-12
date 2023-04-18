import { store } from './store';
import { checkAuth, loadOffers } from './store/api-actions';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import {ToastContainer} from 'react-toastify';
import Icons from './components/icons/icons';
import App from './components/app/app';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuth());
store.dispatch(loadOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <Icons />
        <App />
      </HistoryRouter>
    </HelmetProvider>
  </Provider>
);
