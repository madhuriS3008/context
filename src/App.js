import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      <Header />
      <Page />
    </div>
  );
}

export default App;
