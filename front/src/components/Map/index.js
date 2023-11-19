import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// const OSMLink = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MBTilesLink = 'https://846xp1b9-5000.brs.devtunnels.ms/{z}/{x}/{y}.png';

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
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
        url={MBTilesLink}
        maxZoom={22}
      />
      <Marker position={[-27.01604780999165, -48.659008496965015]}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
