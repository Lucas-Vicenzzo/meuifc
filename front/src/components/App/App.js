import { ThemeProvider } from 'styled-components';
import Map from '../Map';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <h1>Meu IFC</h1>
    <Map />
   </ThemeProvider>
  );
}

export default App;
