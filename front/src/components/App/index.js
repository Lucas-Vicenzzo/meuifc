import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Feed from '../Feed';
import Header from '../Header';
import Map from '../Map';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Feed />
        <Map />
      </Container>
    </ThemeProvider>
  );
}

export default App;
