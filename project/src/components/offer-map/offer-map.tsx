import { Icon, Marker } from 'leaflet';
import defaultMarker from './pin.svg';
import selectedMarker from './pin-active.svg';
import { Props } from './types';
import { useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const tileLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const defaultIcon = new Icon({
  iconUrl: defaultMarker,
  iconSize: [40.5, 58.5],
  iconAnchor: [20.25, 58.5],
});

const selectedIcon = new Icon({
  iconUrl: selectedMarker,
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
