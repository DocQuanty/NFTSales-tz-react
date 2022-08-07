import "./styles/variableColors.scss";
import "./styles/App.scss";
import Header from "./component/header/header.jsx";
import Description from "./component/description/description";
import TomorrowSales from "./component/main-content/tomorrow-sales";

import { useTheme } from "./component/hook/hook-theme";

function App(props) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="App">
      <div className="main-container">
        <Header theme={theme} setTheme={setTheme} />
        <Description />
        <TomorrowSales theme={theme} server={props.server} />
      </div>
    </div>
  );
}

export default App;
