import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = ({ chartData }) => {
  return (
    <div className=" ">
      <h2 style={{ textAlign: "center" }}>Temperature Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Temperature 48 Hours ",
            },
            legend: {
              display: true,
            },
          },
          plugins2: {
            title: {
              display: true,
              text: "Temperature 48 Hours ",
            },
            legend: {
              display: false,
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
                text: "Wind Speed miles/hour",
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
