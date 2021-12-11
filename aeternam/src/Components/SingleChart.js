import React from "react";

import { useEffect, useState } from "react";
import * as VictoryC from "victory";

function SingleChart() {
  useEffect(() => {});
  return (
    <div className="single">
      <VictoryC.VictoryChart theme={VictoryC.VictoryTheme.material}>
        <VictoryC.VictoryArea
          style={{
            data: { fill: " #3498db " },
            labels: {
              fontSize: 15,
              fill: "#000000",
            },
          }}
          labels={({ datum }) => datum.y}
          data={[
            { x: 2001, y: 1.24 },
            { x: 2004, y: 1.93 },
            { x: 2007, y: 3.33 },
            { x: 2010, y: 3.97 },
            { x: 2013, y: 5.36 },
            { x: 2016, y: 5.07 },
            { x: 2019, y: 6.6 },
          ]}
        />
      </VictoryC.VictoryChart>
    </div>
  );
}

export default SingleChart;
