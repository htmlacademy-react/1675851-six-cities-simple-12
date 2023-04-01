import { Icon, Marker, LayerGroup } from 'leaflet';
import defaultMarker from './pin.svg';
import selectedMarker from './pin-active.svg';
import { Props } from './types';
import { useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import { getData } from '../../store/reducer';
import cn from 'classnames';

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

function OfferMap({locationCenter, offers, className}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationCenter);
  const {offerItem} = useAppSelector(getData);

  useEffect(() => {
    if (map) {
      const markerGroup = new LayerGroup();

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon((offer.id === offerItem?.id) ? selectedIcon : defaultIcon)
          .addTo(markerGroup);

        markerGroup.addTo(map);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, offerItem?.id]);

  return (
    <section
      className={cn('map', className)}
      ref={mapRef}
    >
    </section>
  );
}

export default OfferMap;
