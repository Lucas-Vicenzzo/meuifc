import { useEffect } from 'react';
import {
  MapContainer, TileLayer, Marker, useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const OSMLink = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const MBTilesLink = 'https://846xp1b9-5000.brs.devtunnels.ms/{z}/{x}/{y}.png';

L.Marker.prototype.options.icon = DefaultIcon;

function FlyToUserLocation({ userLocation }) {
  const map = useMap();
  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 18);
    }
  }, []);
  return null;
}

export default function Map({ userLocation }) {
  return (
    <MapContainer
      center={[-27.01604780999165, -48.659008496965015]}
      zoom={18}
      scrollWheelZoom
      zoomControl={false}
      minZoom={16}
    >
      <TileLayer
        key="tileLayer"
        url={OSMLink}
        maxZoom={22}
      />
      {userLocation && <Marker position={userLocation}/>}
      {userLocation && <FlyToUserLocation userLocation={userLocation}/>}
    </MapContainer>
  );
}
