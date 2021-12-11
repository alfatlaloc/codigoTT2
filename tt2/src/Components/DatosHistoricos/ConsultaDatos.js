import Chart from "react-google-charts";
import { useState } from "react";

const ConsultaDatos = () => {
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

  return (
    <div className="text-align-center">
      <h3>Consulta de datos</h3>
      <Chart
        width={"100%"}
        height={"100vh"}
        chartEvents={DescargarGrafica}
        height={"300px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Year", "Sales", "Expenses"],
          ["2013", 1000, 400],
          ["2014", 1170, 460],
          ["2015", 660, 1120],
          ["2016", 1030, 540],
        ]}
        options={{
          title: "Company Performance",
          hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: "50%", height: "70%" },
          // lineWidth: 25
        }}
      />

      <a href={chartDownload} download="Chart">Descargar</a>
    </div>
  );
};

export default ConsultaDatos;
