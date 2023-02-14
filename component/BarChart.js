import React from "react";
import { Bar } from "react-chartjs-2";
const BarChart = ({ chartData, lat, lon }) => {
  return (
    <div className="">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Temperature and Wind Speed  48 Hours  ",
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
              text: "Temperature 48 Hours ",
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
              title: {
                color: "green",
                display: true,
                text: "Wind Speed miles/hour",
              },
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
};
export default BarChart;
