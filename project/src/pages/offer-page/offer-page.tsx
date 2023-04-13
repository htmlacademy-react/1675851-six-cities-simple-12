import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getOffer } from '../../store/api-actions';
import { resetOffer } from '../../store/action';
import { getData } from '../../store/selectors';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import OfferContent from '../../components/offer-content/offer-content';
import './styles.css';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const {offer, locationPoint, nearbyOffers} = useAppSelector(getData);

  useEffect(() => {
    if (id) {
      dispatch(getOffer(id));
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

        <OfferContent
          offer={offer}
          locationPoint={locationPoint}
          nearbyOffers={nearbyOffers}
        />
      </div>
    );
  }

  return <Loader />;
}

export default OfferPage;
