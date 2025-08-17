import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { LightColors } from "./global/GlobalStyle";
import Portfolio from "./Portfolio";

function App() {
  const { themeColors } = useTheme();

  // set the title of the Tab
  document.title = "Deepanshu's Portfolio";
  return (
    <div
      className="App"
      style={{
        backgroundColor:
          themeColors === LightColors
            ? themeColors.secondaryBackground
            : themeColors.primaryBackground,
      }}
    >
      <Portfolio />
    </div>
  );
}

export default App;
