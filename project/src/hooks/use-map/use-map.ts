import { MutableRefObject, useState, useRef, useEffect } from 'react';
import { CityLocation } from '../../mocks/offers-types';
import { Map, TileLayer } from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  tileLayer: string,
  locationSettings: CityLocation,
) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current);
      const layer = new TileLayer(tileLayer);

      instance.addLayer(layer);
      setMap(instance);

      isRenderedRef.current = true;
    }

    map?.setView([locationSettings.latitude, locationSettings.longitude], locationSettings.zoom);
  }, [mapRef, tileLayer, map, locationSettings]);

  return map;
}

export default useMap;
