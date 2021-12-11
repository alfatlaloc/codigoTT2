import "./graphs.css";
import DrawChart from "./Charts";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar"
import Footer from "./Components/Common/Footer";
import ConsultaDatos from "./Components/DatosHistoricos/ConsultaDatos";
import Backtesting from "./Components/Backtesting/Backtesting";
import Sugerencia from "./Components/Sugerencia/Sugerencia";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/ConsultaDatos" component={ConsultaDatos} />
        <Route path="/Backtesting" component={Backtesting} />
        <Route path="/GoogleCharts" component={DrawChart} />
        <Route path="/Sugerencia" component={Sugerencia} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
