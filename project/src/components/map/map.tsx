import { IconProperties } from './types';
import { Icon, LayerGroup, Marker } from 'leaflet';
import defaultMarker from './pin.svg';
import selectedMarker from './pin-active.svg';
import { Props } from './types';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map/use-map';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const icon: IconProperties = {
  sizes: [35.1, 50.7],
  anchors: [17.55, 50.7]
};

const defaultIcon = new Icon({
  iconUrl: defaultMarker,
  iconSize: icon.sizes,
  iconAnchor: icon.anchors
});

const selectedIcon = new Icon({
  iconUrl: selectedMarker,
  iconSize: icon.sizes,
  iconAnchor: icon.anchors
});

function Map({locationPoint, offers, selectedOffer, className}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationPoint);

  useEffect(() => {
    if (map) {
      const markerGroup = new LayerGroup();

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon((offer.id === selectedOffer?.id) ? selectedIcon : defaultIcon)
          .addTo(markerGroup);
      });

      markerGroup.addTo(map);

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={cn('map', className)}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
