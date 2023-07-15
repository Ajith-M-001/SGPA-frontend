import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex flex-col items-center   py-5">
        <h1 className="text-xl font-bold">Now you are in DashBoard</h1>
        <div className="flex justify-center font-semibold text-2xl my-5 text-center">
          Click on the semester for which you want to see the marks and results.
        </div>
        <nav className="flex flex-wrap justify-center mb-4 font-semibold">
          <Link
            to="/dashboard/1stsem"
            className={`hover:text-blue-700 hover:bg-teal-500 ${
              location.pathname.includes("/dashboard/1stsem")
                ? "bg-teal-500 text-white"
                : "text-blue-500"
            } px-4 py-2 rounded`}
          >
            1stsem
          </Link>

          <Link
            to="/dashboard/2ndsem"
            className={`hover:text-blue-700 hover:bg-teal-500 ${
              location.pathname.includes("/dashboard/2ndsem")
                ? "bg-teal-500 text-white"
                : "text-blue-500"
            } px-4 py-2 rounded`}
          >
            2ndsem
          </Link>
          <Link
            to="/dashboard/3rdsem"
            className={`hover:text-blue-700 hover:bg-teal-500 ${
              location.pathname.includes("/dashboard/3rdsem")
                ? "bg-teal-500 text-white"
                : "text-blue-500"
            } px-4 py-2 rounded`}
          >
            3rdsem
          </Link>
          <Link
            to="/dashboard/4thsem"
            className={`hover:text-blue-700 hover:bg-teal-500 ${
              location.pathname.includes("/dashboard/4thsem")
                ? "bg-teal-500 text-white"
                : "text-blue-500"
            } px-4 py-2 rounded`}
          >
            4thsem
          </Link>
        </nav>

        <div className="flex justify-center font-bold text-xl">
          <span className="font-bold">Currently opened result:</span>
          <span className="font-bold text-teal-500 text-xl ml-1">
            {location.pathname.replace("/dashboard/", "")}
          </span>
        </div>
        <div className="flex justify-center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
