import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

import homeImage from '../img/Home.png';
import '../css/home.css';

function Home() {
  const history = useHistory();
  return (
    <div className="justify-content-center text-center">
      <h2 className="m-3">Trabajo Terminal 2 2020-B030</h2>
      <br/>
      <img className="homeImg mx-auto" src={homeImage} alt="home"/>
      <br/>
      <Button variant="dark" className="m-2 btnHome"
      onClick={ () => {history.push("/GoogleCharts")}}>Graficas</Button>
      <br/>
      <Button variant="dark" className="m-2 btnHome"
      onClick={ () => {history.push("/ConsultaDatos")}}>Datos historicos</Button>
      <br/>
      <Button variant="dark" className="m-2 btnHome"
      onClick={ () => {history.push("/Backtesting")}}>Backtesting</Button>
      <br/>
      <Button variant="dark" className="m-2 btnHome"
      onClick={ () => {history.push("/Sugerencia")}}>Sugerencia</Button>
    </div>
  );
}

export default Home;
