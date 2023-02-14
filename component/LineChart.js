import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = ({ chartData, lat, lon }) => {
  return (
    <div className="">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Temperature and Wind Speed  48 Hours ",
              position: "top",
            },
            subtitle: {
              display: true,
              text: `lat : ${lat} , lon : ${lon}`,
            },
            legend: {
              display: true,
            },
          },
          plugins2: {
            title: {
              display: true,
              text: "Wind Speed 48 Hours ",
              position: "left",
            },
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              title: {
                color: "red",
                display: true,
                text: "Time (hour)",
              },
            },
            y: {
              type: "linear",
              title: {
                color: "black",
                display: true,
                text: "Temperature °C",
              },

              display: true,
              position: "left",
            },
            y1: {
              type: "linear",
              title: {
                color: "green",
                display: true,
                text: "Wind Speed mph",
              },
              display: true,
              position: "right",

              // grid line settings
            },
          },
        }}
      />
    </div>
  );
};
export default LineChart;
