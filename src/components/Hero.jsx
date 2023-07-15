import PropTypes from "prop-types";
import images from "../constants/images";

const Hero = ({ name }) => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-3 lg:w-1/2 lg:pr-16">
        <h1 className="text-4xl font-bold mb-4">
          Calculate Your <span className="text-orange-600">{name} </span>
          Result
        </h1>
        <p className="text-xs lg:text-xl mb-8">
          In this page, you can calculate your <span>{name}</span> result, CGPA,
          and percentage. We wish all the best to everyone who is waiting for
          their results!
        </p>
        <a
          href="#section1"
          className="bg-teal-500 text-2xl font-bold text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
        >
          Calculate Now
        </a>
      </div>
      <div className="hidden lg:block lg:w-1/2 mt-1">
        <img className="w-full" src={images.HeroImage} alt="Hero image" />
      </div>
    </section>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hero;
