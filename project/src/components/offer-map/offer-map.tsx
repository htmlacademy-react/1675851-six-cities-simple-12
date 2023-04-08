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
import cn from 'classnames';
import { getData } from '../../store/selectors';
import { ICON_SIZE, ICON_ANCHOR } from '../../consts';

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

function OfferMap({className, locationPoint, offer, nearbyOffers, locationOffers}: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationPoint);
  const {selectedOffer} = useAppSelector(getData);

  useEffect(() => {
    if (map) {
      const markerGroup = new LayerGroup();

      if (offer) {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(selectedIcon)
          .addTo(markerGroup);
      }

      if (nearbyOffers) {
        nearbyOffers.forEach((nearbyOffer) => {
          const marker = new Marker({
            lat: nearbyOffer.location.latitude,
            lng: nearbyOffer.location.longitude
          });

          marker
            .setIcon(defaultIcon)
            .addTo(markerGroup);
        });
      }

      if (locationOffers) {
        locationOffers.forEach((locationOffer) => {
          const marker = new Marker({
            lat: locationOffer.location.latitude,
            lng: locationOffer.location.longitude
          });

          marker
            .setIcon((selectedOffer?.id === locationOffer.id) ? selectedIcon : defaultIcon)
            .addTo(markerGroup);
        });
      }

      markerGroup.addTo(map);

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [locationOffers, map, nearbyOffers, offer, selectedOffer]);

  return (
    <section
      className={cn('map', className)}
      ref={mapRef}
    >
    </section>
  );
}

export default OfferMap;
