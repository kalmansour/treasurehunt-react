import Navbar from "./components/NavBar";
// Styles
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
