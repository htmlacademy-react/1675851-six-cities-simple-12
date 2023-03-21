import { Icon, Marker } from 'leaflet';
import MARKER_DEFAULT from './pin.svg';
import MARKER_SELECTED from './pin-active.svg';
import { Props } from './offer-map-types';
import { useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './offer-map-styles.css';

const tileLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const defaultIcon = new Icon({
  iconUrl: MARKER_DEFAULT,
  iconSize: [40.5, 58.5],
  iconAnchor: [20.25, 58.5],
});

const selectedIcon = new Icon({
  iconUrl: MARKER_SELECTED,
  iconSize: [40.5, 58.5],
  iconAnchor: [20.25, 58.5],
});

function OfferMap({locationSettings, offers, selectedOffer}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, tileLayer, locationSettings);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon((offer.id === selectedOffer) ? selectedIcon : defaultIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default OfferMap;
