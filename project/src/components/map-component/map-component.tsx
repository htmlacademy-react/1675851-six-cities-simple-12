import { PointTuple, Icon, Marker, LayerGroup } from 'leaflet';
import defaultMarker from './pin.svg';
import selectedMarker from './pin-active.svg';
import { Props } from './types';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map/use-map';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';
import './styles.css';

export const ICON_SIZE: PointTuple = [35.1, 50.7];
export const ICON_ANCHOR: PointTuple = [17.55, 50.7];

const defaultIcon = new Icon({
  iconUrl: defaultMarker,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

const selectedIcon = new Icon({
  iconUrl: selectedMarker,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

function MapComponent({locationPoint, offers, selectedOffer, className}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationPoint);

  useEffect(() => {
    if (map) {
      const markerGroup = new LayerGroup();

      offers.forEach((item) => {
        const marker = new Marker({
          lat: item.location.latitude,
          lng: item.location.longitude
        });

        marker
          .setIcon((item.id === selectedOffer?.id) ? selectedIcon : defaultIcon)
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

export default MapComponent;
