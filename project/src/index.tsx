import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import App from './components/app/app';
import Icons from './components/icons/icons';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
        <Icons />
      </HistoryRouter>
    </HelmetProvider>
  </Provider>
);
