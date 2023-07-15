
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import images from "../constants/images";

const navItemsInfo = [
  { name: "1st Sem", type: "link", path: "/1stsem" },
  { name: "2nd Sem", type: "link", path: "/2ndsem" },
  { name: "3rd Sem", type: "link", path: "/3rdsem" },
  { name: "4th Sem", type: "link", path: "/4thsem" },
];

const NavItem = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <li>
      <Link
        to={item.path}
        className={`text-gray-900 transition-all duration-300 px-3 py-2 rounded-md text-xl lg:text-lg ${
          isActive
            ? "bg-teal-500 text-white"
            : "hover:bg-teal-500 hover:text-white"
        }`}
      >
        {item.name}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavIsVisible((prevState) => !prevState);
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-9 bg-white block  z-50">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center lg:shadow-none shadow-md">
        <div>
          <Link to="/">
            <img className="w-auto lg:h-16 h-12" src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className="z-50 lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose className="w-6 h-6" onClick={toggleNavVisibility} />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={toggleNavVisibility} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-500 mt-[82px]  lg:mt-0 bg-gray-200 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex gap-x-2  font-semibold items-center gap-y-5 flex-col lg:flex-row text-white lg:text-dark-hard">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>

          <Link
            to="/dashboard"
            className="transition-all lg:font-semibold duration-300 mt-5 lg:mt-0 border dashboard-link px-3 py-2 rounded-md text-base lg:text-xl  bg-teal-500 text-white hover:bg-gray-50 hover:text-teal-500 hover:border-teal-500"
          >
            Dashboard
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Header;
