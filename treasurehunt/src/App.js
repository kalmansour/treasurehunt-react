import { observer } from "mobx-react";
// import SignUpDetail from "./components/SignUpDetail";
// import SignInDetail from "./components/SignInDetail";
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
      {/* <h1>yooooo whatsup</h1> */}
      {/* <SignUpDetail />
      <SignInDetail /> */}
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
