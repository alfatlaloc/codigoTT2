import React from "react";
import Chart from "react-google-charts";
import * as EURUSDApi from "./API/EURUSD";
import { useEffect, useState } from "react";

function MultipleCharts() {
  const [Graphs, setGraphs] = useState([]);

  useEffect(() => {
    if (Graphs.length === 0) {
      EURUSDApi.getMonthsPerYear().then((Info) => {
        setGraphs(Info);
      });
    }
  });


  function yearComp(RowNames, element) {
    let auxArr = [];
    auxArr[0] = RowNames;
    var i = 1;
    element.forEach((item) => {
      auxArr[i++] = [item.keyName, item.High, item.Close, item.Open, item.Low];
    });
    return auxArr;
  }

  return (
    <React.Fragment>
      {Graphs.map((element) => {
        return (
          <Chart
            className="GGG"
            width="100%"
            chartType="LineChart"
            chtt={new Date(element[0].getDate).getFullYear()}
            loader={<div> Loading Chart </div>}
            data={yearComp(["Date", "HIGH", "CLOSE", "OPEN", "LOW"], element)}
            options={{
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Price",
              },
              series: {},
              title: new Date(element[0].Date).getFullYear(),
            }}
            rootProps={{ "data-testid": "2" }}
          />
        );
      })}
      ;
    </React.Fragment>
  );
}

function DrawChart() {
  const [Data, setData] = useState([]);
  const [MData, setMData] = useState([]);

  const [chartDownload, setChartDownload] = useState("");

  const DescargarGrafica = [
    {
      eventName: "ready",
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        console.log(chart);
        console.log(chart.getImageURI());
        setChartDownload(chart.getImageURI());
      },
    },
  ];

  useEffect(() => {
    if (Data.length === 0) {
      EURUSDApi.getPerYear().then((Info) => {
        setData(Info);
      });

      EURUSDApi.getPerMonth().then((Info) => {
        setMData(Info);
      });
    }
  });

  function toCandlestick(RowNames) {
    let auxArr = [];
    auxArr[0] = RowNames;
    var i = 1;
    Data.forEach((item) => {
      auxArr[i++] = [item.keyName, item.High, item.Close, item.Open, item.Low];
    });
    return auxArr;
  };

  function toCandlestickMonth(RowNames) {
    let auxArr = [];
    auxArr[0] = RowNames;
    var i = 1;
    MData.forEach((item) => {
      let dateAux = new Date(item.Date);

      auxArr[i++] = [
        dateAux.getFullYear().toString(),
        item.High,
        item.Close,
        item.Open,
        item.Low,
      ];
    });
    return auxArr;
  };

  return (
    <div id="area">
      <Chart
        width="100%"
        className="GGG"
        chartEvents
        chartEvents={DescargarGrafica}
        chartType="CandlestickChart"
        loader={<div> Loading Chart </div>}
        data={toCandlestick(["day", "HIGH", "CLOSE", "OPEN", "LOW"])}
        options={{
          legend: "none",
          colors: ["black"]
        }}
        rootProps={{ "data-testid": "1" }}
      />
      <a href={chartDownload} download="Chart">Descargar</a>
      <Chart
        className="GGG"
        width="100%"
        chartType="LineChart"
        loader={<div> Loading Chart </div>}
        data={toCandlestick(["day", "HIGH", "CLOSE", "OPEN", "LOW"])}
        options={{
          hAxis: {
            title: "Year",
          },
          vAxis: {
            title: "Price",
          },
          series: {},
          title: "EURUSD Yearly Data",
          colors: ["black","red","blue","green"]
        }}
        rootProps={{ "data-testid": "2" }}
      />
      <Chart
        className="GGG"
        width="100%"
        chartType="LineChart"
        loader={<div> Loading Chart </div>}
        data={toCandlestickMonth(["Date", "HIGH", "CLOSE", "OPEN", "LOW"])}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Price",
          },
          series: {},
          title:"Datos Mensuales 2000-2021"
        }}
        rootProps={{ "data-testid": "2" }}
      />
      
    </div>
  );
}

export default DrawChart;
