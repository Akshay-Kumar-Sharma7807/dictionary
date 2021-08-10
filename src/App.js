import "./App.css";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(
    localStorage.getItem("themeColor") || "#ff0000"
  );
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
        contrastText: "#fff",
      },
      secondary: {
        main: "#f44336",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header setColor={setColor} />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
