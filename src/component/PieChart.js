import React from "react";
import { Pie } from "react-chartjs-2";
const PieChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Temperature Chart</h2>
      <Pie
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
              display: true,
            },
          },
          scales: {
            y: {
              title: {
                color: "black",
                type: "linear",
                display: true,
              },
              position: "left",
              text: "Temperature °C",
            },
            y1: {
              title: {
                color: "green",
                type: "linear",
                display: true,
                position: "right",
                text: "Wind Speed miles/hour",
              },
              position: "left",
              text: "Temperature °C",
            },
            x: {
              title: {
                color: "red",
                type: "linear",
                display: true,
                position: "right",
                text: "Time (hour)",
              },
            },
          },
        }}
      />
    </div>
  );
};
export default PieChart;
