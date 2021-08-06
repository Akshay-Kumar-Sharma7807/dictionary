import "./App.css";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3333",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f44336",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
