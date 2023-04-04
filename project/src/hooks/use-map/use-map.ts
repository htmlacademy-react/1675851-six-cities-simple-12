import { MutableRefObject, useState, useEffect } from 'react';
import { CityLocation } from '../../types/data';
import { Map, TileLayer } from 'leaflet';

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  locationCenter: CityLocation | undefined) {

  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const instance = new Map(mapRef.current, {scrollWheelZoom: false});
      const layer = new TileLayer(TILE_LAYER);

      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef]);

  useEffect(() => {
    if (map && locationCenter) {
      map.setView(
        [locationCenter.latitude, locationCenter.longitude],
        locationCenter.zoom
      );
    }
  }, [map, locationCenter]);

  return map;
}

export default useMap;
