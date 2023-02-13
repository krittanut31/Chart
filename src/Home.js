import { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "./component/LineChart";
import PieChart from "./component/PieChart";
import BarChart from "./component/BarChart";
import "chart.js/auto";

const Home = () => {
  const [latitudeLineCart, setLatitudeLineChart] = useState([]);
  const [longitudeLineCart, setLongitudeLineCart] = useState([]);

  const [latitudeBarChart, setLatitudeBarChart] = useState([]);
  const [longitudeBarChart, setLongitudeBarChart] = useState([]);

  const [allChart, setAllChart] = useState([]);
  const lineChart = {
    chart: "Line",
    latitude: latitudeLineCart,
    longitude: longitudeLineCart,
  };
  const barChart = {
    chart: "Bar",
    latitude: latitudeBarChart,
    longitude: longitudeBarChart,
  };
  let newArray = [];
  const addLineChart = () => {
    newArray = allChart;
    newArray.push(lineChart);
    setAllChart(newArray);
    console.log(allChart);
  };
  const addBarChart = () => {
    newArray = allChart;
    newArray.push(barChart);
    setAllChart(newArray);
    console.log(allChart);
  };

  const setLatLineChart = (e, index) => {
    let newArr = latitudeLineCart;
    newArr[index] = e;
    setLatitudeLineChart(newArr);
  };

  const setLonLineChart = (e, index) => {
    let newArr = latitudeLineCart;
    newArr[index] = e;
    setLongitudeLineCart(newArr);
  };

  const setLatBarChart = (e, index) => {
    let newArr = latitudeLineCart;
    newArr[index] = e;
    setLatitudeBarChart(newArr);
  };

  const setLonBarChart = (e, index) => {
    let newArr = latitudeLineCart;
    newArr[index] = e;
    setLongitudeBarChart(newArr);
  };

  const [dataLinChart, setDataLineChart] = useState({});
  const [dataBarChart, setDataBarChart] = useState([]);

  const changeLatLonLineChrat = (index) => {
    axios
      .post(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitudeLineCart[index]}&lon=${longitudeLineCart[index]}&appid=c979b3082a87787077842663a1d75916`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.list.slice(0, 23));
        setDataLineChart({
          labels: response.data.list
            .slice(0, 23)
            .map((data, indexData) => indexData + 1),
          datasets: [
            {
              label: "Temperature ",
              data: response.data.list
                .slice(0, 23)
                .map((e) => e.main.temp - 273),
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
              yAxisID: "y",
            },
            {
              label: "Wind speed ",
              data: response.data.list.slice(0, 23).map((e) => e.wind.speed),
              backgroundColor: ["#ecf0f1"],
              borderColor: "green",
              borderWidth: 2,
              yAxisID: "y1",
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeLatLonBarChrat = () => {
    axios
      .post(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitudeBarChart}&lon=${longitudeBarChart}&appid=c979b3082a87787077842663a1d75916`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.list.slice(0, 23));
        setDataBarChart({
          labels: response.data.list
            .slice(0, 23)
            .map((data, indexData) => indexData + 1),
          datasets: [
            {
              label: "Temperature ",
              data: response.data.list
                .slice(0, 23)
                .map((e) => e.main.temp - 273),
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
              yAxisID: "y",
            },
            {
              label: "Wind speed ",
              data: response.data.list.slice(0, 23).map((e) => e.wind.speed),
              backgroundColor: ["green"],
              borderColor: "green",
              borderWidth: 2,

              yAxisID: "y1",
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .post(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c979b3082a87787077842663a1d75916`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.list.slice(0, 23));
        setDataLineChart({
          labels: response.data.list
            .slice(0, 23)
            .map((data, indexData) => indexData + 1),
          datasets: [
            {
              label: "Temperature ",
              data: response.data.list
                .slice(0, 23)
                .map((e) => e.main.temp - 273),
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
              yAxisID: "y",
            },
            {
              label: "Wind speed ",
              data: response.data.list.slice(0, 23).map((e) => e.wind.speed),
              backgroundColor: ["#ecf0f1"],
              borderColor: "green",
              borderWidth: 2,
              yAxisID: "y1",
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c979b3082a87787077842663a1d75916`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.list.slice(0, 23));
        setDataBarChart({
          labels: response.data.list
            .slice(0, 23)
            .map((data, indexData) => indexData + 1),
          datasets: [
            {
              label: "Temperature ",
              data: response.data.list
                .slice(0, 23)
                .map((e) => e.main.temp - 273),
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
              yAxisID: "y",
            },
            {
              label: "Wind speed ",
              data: response.data.list.slice(0, 23).map((e) => e.wind.speed),
              backgroundColor: ["green"],
              borderColor: "green",
              borderWidth: 2,

              yAxisID: "y1",
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [(latitudeBarChart, longitudeBarChart)]);

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col bg-[#45694f] w-full h-auto p-4">
        <div className="flex space-x-6">
          <div
            className="border px-2 rounded-sm border-black bg-white cursor-pointer"
            onClick={() => addLineChart()}
          >
            <div>{console.log(allChart)}</div>
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
        <div className="grid grid-cols-4 gap-2 mt-4 ">
          {allChart?.map((e, index) => (
            <div className="bg-[#f7f7f7] rounded-lg  p-2 ">
              {e.chart === "Line" ? (
                <div>
                  <LineChart chartData={dataLinChart} />
                  <div className="flex justify-around">
                    <div
                      className="flex flex-col"
                      onKeyDown={() => {
                        changeLatLonLineChrat(index);
                      }}
                    >
                      <div className="flex">
                        <p>Latitude :</p>
                        <input
                          type="number"
                          value={latitudeLineCart[index]}
                          onChange={(e) =>
                            setLatLineChart(e.target.value, index)
                          }
                          className="focus:outline-none border-black px-1"
                        />
                      </div>
                      <div className="flex">
                        <p>Longitude :</p>
                        <input
                          type="number"
                          value={longitudeLineCart[index]}
                          onChange={(e) =>
                            setLonLineChart(e.target.value, index)
                          }
                          className="focus:outline-none border-black px-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : e.chart === "Bar" ? (
                <div>
                  <BarChart chartData={dataBarChart} />
                  <div className="flex justify-around">
                    <div className="flex flex-col">
                      <div className="flex">
                        <p>Latitude :</p>
                        <input
                          type="number"
                          value={latitudeBarChart[index]}
                          onChange={(e) =>
                            setLatBarChart(e.target.value, index)
                          }
                          className="focus:outline-none border-black px-1"
                        />
                      </div>
                      <div className="flex">
                        <p>Longitude :</p>
                        <input
                          type="number"
                          value={longitudeBarChart[index]}
                          onChange={(e) =>
                            setLonBarChart(e.target.value, index)
                          }
                          className="focus:outline-none border-black px-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          {/* <div className="bg-[#f7f7f7] rounded-lg  p-2 ">
            {longitudeLineCart && latitudeLineCart ? (
              <LineChart chartData={dataLinChart} />
            ) : (
              <></>
            )}
            <div className="flex justify-around">
              <div className="flex flex-col">
                <div className="flex">
                  <p>Latitude :</p>
                  <input
                    type="number"
                    value={latitudeLineCart}
                    onChange={(e) => setLatitudeLineChart(e.target.value)}
                    className="focus:outline-none border-black px-1"
                  />
                </div>
                <div className="flex">
                  <p>Longitude :</p>
                  <input
                    type="number"
                    value={longitudeLineCart}
                    onChange={(e) => setLongitudeLineCart(e.target.value)}
                    className="focus:outline-none border-black px-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f7f7f7] rounded-lg  p-2">
            {longitudeBarChart && latitudeBarChart ? (
              <BarChart chartData={dataBarChart} />
            ) : (
              <></>
            )}
            <div className="flex justify-around">
              <div className="flex flex-col">
                <div className="flex">
                  <p>Latitude :</p>
                  <input
                    type="number"
                    value={latitudeBarChart}
                    onChange={(e) => setLatitudeBarChart(e.target.value)}
                    className="focus:outline-none border-black px-1"
                  />
                </div>
                <div className="flex">
                  <p>Longitude :</p>
                  <input
                    type="number"
                    value={longitudeBarChart}
                    onChange={(e) => setLongitudeBarChart(e.target.value)}
                    className="focus:outline-none border-black px-1"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
