import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { loadOffer } from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import OfferContent from '../../components/offer-content/offer-content';
import { resetOffer } from '../../store/offer-data/offer-data';
import { getOffer, getLocationPoint, getNearbyOffers } from '../../store/offer-data/selectors';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const locationPoint = useAppSelector(getLocationPoint);
  const nearbyOffers = useAppSelector(getNearbyOffers);

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
        <OfferContent offer={offer} locationPoint={locationPoint} nearbyOffers={nearbyOffers} />
      </div>
    );
  }

  return <Loader />;
}

export default OfferPage;
