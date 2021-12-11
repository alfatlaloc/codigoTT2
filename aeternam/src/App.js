import "./App.css";
import "./graphs.css";
import DrawChart from "./Charts";
import Home from "./Components/Home";
import SingleChart from "./Components/SingleChart";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SingleChart" component={SingleChart} />
        <Route path="/GoogleCharts" component={DrawChart} />
      </Switch>
    </div>
  );
}

export default App;
