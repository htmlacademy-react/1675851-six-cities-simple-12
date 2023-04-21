import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffer } from '../../store/offer-data/selectors';
import { useEffect } from 'react';
import { loadOffer } from '../../store/api-actions';
import { resetOffer } from '../../store/offer-data/offer-data';
import Header from '../../components/header/header';
import OfferContent from '../../components/offer-content/offer-content';
import Loader from '../../components/loader/loader';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);

  useEffect(() => {
    if (id) {
      dispatch(loadOffer(id));
    }

    return () => {
      dispatch(resetOffer());
    };
  }, [id, dispatch]);

  if (offer) {
    const title = `Offer — ${offer.title}`;

    return (
      <div className="page">
        <Header title={title} profile />
        {
          offer ? <OfferContent offer={offer} /> : null
        }
      </div>
    );
  }

  return <Loader />;
}

export default OfferPage;
