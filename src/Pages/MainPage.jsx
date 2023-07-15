import images from "../constants/images";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div
        className="bg-BIT min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay bg-black opacity-75 absolute inset-0"></div>
        <div className="content bg-neutral-100 rounded-lg shadow-lg w-2/3 md:w-1/2 lg:w-1/3 mx-auto p-6 text-center relative z-10">
          <h1 className="lg:text-4xl text-2xl font-bold mb-4">
            VTU SGPA & CGPA Calculator
          </h1>
          <p className="lg:text-lg text-xl mb-4">
            Calculate your SGPA and CGPA here!
          </p>
          <Link to="/1stsem">
            <button
              className="button mb-4 text-base md:text-xl py-1 md:py-3 px-2 md:px-6 mx-3 bg-teal-500 rounded-md text-white hover:bg-teal-400"
              id="sgpaButton"
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <span>Calculate SGPA</span>
                <AiOutlineArrowRight style={{ marginLeft: "0.5rem" }} />
              </span>
            </button>
          </Link>
          <Link to="/cgpa">
            <button
              className="button text-base md:text-xl py-1 md:py-3 px-2 md:px-6 mx-3 bg-teal-500 rounded-md text-white hover:bg-teal-400"
              id="cgpaButton"
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <span>Calculate CGPA</span>
                <AiOutlineArrowRight style={{ marginLeft: "0.5rem" }} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
