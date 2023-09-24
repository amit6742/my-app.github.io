import { Outlet } from "react-router-dom";
import { Header } from "../heaader";
const Home = () => {
  return (
    <div>
    <Header></Header>
    <Outlet></Outlet>

    </div>
  );
};

export default Home
