import { observer } from "mobx-react";
import Navbar from "./components/NavBar";
import Routes from "./components/Routes";

// Styles
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
