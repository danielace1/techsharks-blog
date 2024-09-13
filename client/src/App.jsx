import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
