import "./App.css";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const [color, setColor] = useState(
    localStorage.getItem("themeColor") || "#ff0000"
  );

  const [dark, setDark] = useState(localStorage.getItem("dark") === 'true' ? true : false);

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
      type: dark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header setColor={setColor} />
        <Routes setDark={setDark} dark={dark} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
