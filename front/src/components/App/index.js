import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Feed from '../Feed';
import Header from '../Header';
import Map from '../Map';

export function App() {
  const [salas, setSalas] = useState([]);
  const [search, setSearch] = useState({});
  const [userLocation, setUserLocation] = useState(null);
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browsr');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(location);
      },
      error => console.log('Unable to retrieve your location', error.message),
    );
  };
  useEffect(() => getUserLocation(), []);

  useEffect(() => {
    fetch('http://localhost:4000/salas')
      .then(async (response) => {
        const data = await response.json();
        setSalas(data);
      });
  }, []);

  console.log(salas);
  console.log({ search });

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header getUserLocation={getUserLocation}/>
        <Feed salas={salas} setSearch={setSearch} />
        <Map userLocation={userLocation} currentSearch={search} />
      </Container>
    </ThemeProvider>
  );
}
