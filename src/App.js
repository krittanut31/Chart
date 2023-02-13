import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
