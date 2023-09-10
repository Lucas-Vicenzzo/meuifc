import { ThemeProvider } from 'styled-components';
import Map from '../Map';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Feed from '../Feed';
import Header from '../Header';

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
