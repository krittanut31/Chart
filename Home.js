import { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "./component/LineChart";
import PieChart from "./component/PieChart";
import BarChart from "./component/BarChart";
import "chart.js/auto";

const Home = () => {
  const [allChart, setAllChart] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const detRawData = async () => {
    return await axios
      .post(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c979b3082a87787077842663a1d75916`
      )
      .then((response) => {
        return response.data;
      });
  };

  const addLineChart = async () => {
    const data = await detRawData();
    setAllChart([
      ...allChart,
      {
        chart: "Line",
        lat: lat,
        lon: lon,
        data: {
          labels: data.list
            .slice(0, 23)
            .map((data, indexData) => indexData + 1),
          datasets: [
            {
              label: "Temperature ",
              data: data.list.slice(0, 23).map((e) => e.main.temp - 273),
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
              yAxisID: "y",
            },
            {
              label: "Wind speed ",
              data: data.list.slice(0, 23).map((e) => e.wind.speed),
              backgroundColor: ["#ecf0f1"],
              borderColor: "green",
              borderWidth: 2,
              yAxisID: "y1",
            },
          ],
        },
      },
    ]);
    setLat(0);
    setLon(0);
  };
  const addBarChart = async () => {
    const data = await detRawData();
    setAllChart([
      ...allChart,
      {
        chart: "Bar",
        lat: lat,
        lon: lon,
        data: {
          labels: data.list
            .slice(0, 23)
            .map((data, indexData) => indexData + 1),
          datasets: [
            {
              label: "Temperature ",
              data: data.list.slice(0, 23).map((e) => e.main.temp - 273),
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
              yAxisID: "y",
            },
            {
              label: "Wind speed ",
              data: data.list.slice(0, 23).map((e) => e.wind.speed),
              backgroundColor: ["green"],
              borderColor: "green",
              borderWidth: 2,

              yAxisID: "y1",
            },
          ],
        },
      },
    ]);
    setLat(0);
    setLon(0);
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col bg-[#45694f] w-full h-auto p-4">
        <div className="flex space-x-6">
          <div className="border px-2 rounded-sm border-black bg-white cursor-pointer">
            Lat
            <input
              className="text-right"
              type="number"
              value={lat}
              onChange={(e) => setLat(Number(e.target.value))}
            />
          </div>
          <div className="border px-2 rounded-sm border-black bg-white cursor-pointer">
            Lon
            <input
              className="text-right"
              type="number"
              value={lon}
              onChange={(e) => setLon(Number(e.target.value))}
            />
          </div>
          <div
            className="border px-2 rounded-sm border-black bg-white cursor-pointer"
            onClick={() => addLineChart()}
          >
            LineChart
          </div>
          <div
            className="border px-2 rounded-sm border-black bg-white cursor-pointer"
            onClick={() => addBarChart()}
          >
            BarChart
          </div>
          <div
            className="border px-2 rounded-sm border-black bg-white cursor-pointer"
            onClick={() => allChart.pop()}
          >
            Delete
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 ">
          {allChart?.map((e, index) => (
            <div className="bg-[#f7f7f7] rounded-lg  p-2  ">
              {e.chart === "Line" ? (
                <LineChart chartData={e.data} lon={e.lon} lat={e.lat} />
              ) : e.chart === "Bar" ? (
                <BarChart chartData={e.data} lon={e.lon} lat={e.lat} />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
