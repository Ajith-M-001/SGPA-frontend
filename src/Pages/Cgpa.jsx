import { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import Header from "../components/Header";

const Cgpa = () => {
  const [usn, setUsn] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [canChangeUSN, setCanChangeUSN] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading status

  const handleSearch = async () => {
    try {
      const URL = "https://sgpacalculatorbackend.onrender.com/api/cgpa"; // Replace with your actual backend URL
      setIsLoading(true); // Set loading status to true

      const response = await axios.get(`${URL}/${usn}`);

      if (response.data.error) {
        setError(response.data.error);
        setResponse(null);
        setCanChangeUSN(true); // Allow changing USN again if an error occurs
      } else {
        setResponse(response.data);
        setError(null);
        setCanChangeUSN(false); // Prevent changing USN after successful retrieval
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Error occurred while fetching data.");
      }
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading status to false after API request completion
    }
  };

  const handleChange = (event) => {
    if (!canChangeUSN) {
      return; // Prevent changing USN if canChangeUSN is false
    }

    const inputUSN = event.target.value.toUpperCase();
    setUsn(inputUSN);
    if (error) {
      setError(null); // Clear the error message if it is currently displayed
    }

    const usnRegex = /^1BI21MC(0[0-9][0-9]|1[0-1][0-9]|120)$/;

    if (!usnRegex.test(inputUSN)) {
      setError("Please enter a valid USN.");
    }
  };

  const handleFocus = () => {
    if (error) {
      setError(null); // Clear the error message if the input field is focused
    }
  };

  const handleClose = () => {
    setCanChangeUSN(true); // Allow changing USN again
    setUsn(""); // Clear the input field
    setError(null);
    setResponse(null);
  };

  return (
    <>
      <Header />
      <div className="bg-teal-200 ">
        <div className="flex flex-col  items-center h-screen">
          <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col items-center mt-10">
            <div className="flex flex-col md:flex-row items-start mb-3">
              <label
                htmlFor="usn"
                className="mr-2 text-gray-800 text-center md:text-left mb-3 font-semibold"
              >
                Enter USN:
              </label>
              <input
                type="text"
                id="usn"
                value={usn}
                onChange={handleChange}
                onFocus={handleFocus}
                className="border border-gray-400 px-2 py-1 mb-3 md:mb-0 md:mr-2 text-base md:text-sm"
                disabled={!canChangeUSN}
              />
              {canChangeUSN ? (
                <button
                  className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors w-full md:w-auto text-base md:text-sm"
                  onClick={handleSearch}
                >
                  SEARCH
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors w-full md:w-auto text-base md:text-sm"
                  onClick={handleClose}
                >
                  CLOSE
                </button>
              )}
            </div>

            {error && (
              <div className="text-red-500 mb-2">
                <p>{error}</p>
                {!canChangeUSN && (
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors w-full md:w-auto text-base md:text-sm"
                    onClick={handleClose}
                  >
                    CLOSE
                  </button>
                )}
              </div>
            )}

            {/* Display "Loading..." message when isLoading is true */}
            {isLoading && <p>Loading...</p>}

            {/* Display response data when available */}
            {response && !response.error && !isLoading && (
              <>
                <p className="text-gray-800">Name: {response.name}</p>
                <p className="text-gray-800">Gender: {response.gender}</p>
                <p className="text-gray-800">
                  Total Marks:<b> {response.totalMarks}/2900</b>
                </p>
                <p className="text-gray-800">
                  Percentage: <b> {response.percentage}% </b>
                </p>
                <p className="text-gray-800">
                  CGPA: <b>{response.averageSGPA}/10 </b>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cgpa;
