import {Outlet} from "react-router-dom";
import Menu from "../Menu";
import Navbar from "../Navbar";

const DashboardLayout = () => {

  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Menu/>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout;