import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import Footer from "../components/Footer";

const FourthSem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [percentage, setPercentage] = useState("");
  const [sgpa, setSGPA] = useState("");
  const [result, setResult] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setResponseMessage(""); // Clear response message
    setResult(""); // Clear result
    setPercentage(""); // Clear percentage
    setSGPA(""); // Clear sgpa
  };
  const [usn, setUsn] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [usnError, setUsnError] = useState("");
  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [subject1, setSubject1] = useState("");
  const [internal1, setInternal1] = useState("");
  const [external1, setExternal1] = useState("");
  const [total1, setTotal1] = useState("0");
  const [credit1, setCredit1] = useState("0");
  const [grade1, setGrade1] = useState("0");

  const [internal1Error, setInternal1Error] = useState("");
  const [external1Error, setExternal1Error] = useState("");

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;

    const credit = e.target.selectedOptions[0].getAttribute("data-credit");

    setSubject1(selectedSubject);
    setCredit1(parseInt(credit));
  };

  const handleInternalChange = (e) => {
    const internalMark = Number.parseInt(e.target.value, 10);
    setInternal1(internalMark);
  };

  const handleExternalChange = (e) => {
    const externalMark = Number.parseInt(e.target.value, 10);
    setExternal1(externalMark);
  };

  useEffect(() => {
    const updateTotalAndGrade = () => {
      const internalMarks = parseFloat(internal1) || 0;
      const externalMarks = parseFloat(external1) || 0;
      const totalMarks = internalMarks + externalMarks;

      setTotal1(totalMarks);

      let grade;
      if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
      } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
      } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
      } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
      } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
      } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 5;
      } else if (totalMarks >= 45 && totalMarks <= 49) {
        grade = 4;
      } else {
        grade = 0;
      }

      setGrade1(grade);
    };

    updateTotalAndGrade();
  }, [internal1, external1]);

  // --------------------------------------
  const [subject2, setSubject2] = useState("");
  const [internal2, setInternal2] = useState("");
  const [external2, setExternal2] = useState("");
  const [total2, setTotal2] = useState("0");
  const [credit2, setCredit2] = useState("0");
  const [grade2, setGrade2] = useState("0");

  const [internal2Error, setInternal2Error] = useState("");
  const [external2Error, setExternal2Error] = useState("");

  const handleSubjectChange2 = (e) => {
    const selectedSubject = e.target.value;

    const credit = e.target.selectedOptions[0].getAttribute("data-credit");

    setSubject2(selectedSubject);
    setCredit2(parseInt(credit));
  };

  const handleInternalChange2 = (e) => {
    const internalMark = Number.parseInt(e.target.value, 10);
    setInternal2(internalMark);
  };

  const handleExternalChange2 = (e) => {
    const externalMark = Number.parseInt(e.target.value, 10);
    setExternal2(externalMark);
  };

  useEffect(() => {
    const updateTotalAndGrade2 = () => {
      const internalMarks = parseFloat(internal2) || 0;
      const externalMarks = parseFloat(external2) || 0;
      const totalMarks = internalMarks + externalMarks;

      setTotal2(totalMarks);

      let grade;
      if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
      } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
      } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
      } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
      } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
      } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 5;
      } else if (totalMarks >= 45 && totalMarks <= 49) {
        grade = 4;
      } else {
        grade = 0;
      }

      setGrade2(grade);
    };

    updateTotalAndGrade2();
  }, [internal2, external2]);
  // -----------------------------------------------------------
  const [subject3, setSubject3] = useState("");
  const [internal3, setInternal3] = useState("");
  const [external3, setExternal3] = useState("");
  const [total3, setTotal3] = useState("0");
  const [credit3, setCredit3] = useState("0");
  const [grade3, setGrade3] = useState("0");

  const [internal3Error, setInternal3Error] = useState("");
  const [external3Error, setExternal3Error] = useState("");

  const handleSubjectChange3 = (e) => {
    const selectedSubject = e.target.value;

    const credit = e.target.selectedOptions[0].getAttribute("data-credit");

    setSubject3(selectedSubject);
    setCredit3(parseInt(credit));
  };

  const handleInternalChange3 = (e) => {
    const internalMark = Number.parseInt(e.target.value, 10);
    setInternal3(internalMark);
  };

  const handleExternalChange3 = (e) => {
    const externalMark = Number.parseInt(e.target.value, 10);
    setExternal3(externalMark);
  };

  useEffect(() => {
    const updateTotalAndgrade3 = () => {
      const internalMarks = parseFloat(internal3) || 0;
      const externalMarks = parseFloat(external3) || 0;
      const totalMarks = internalMarks + externalMarks;

      setTotal3(totalMarks);

      let grade;
      if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
      } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
      } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
      } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
      } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
      } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 5;
      } else if (totalMarks >= 45 && totalMarks <= 49) {
        grade = 4;
      } else {
        grade = 0;
      }

      setGrade3(grade);
    };

    updateTotalAndgrade3();
  }, [internal3, external3]);

  // ---------------------------------
  const [subject4, setSubject4] = useState("");
  const [internal4, setInternal4] = useState("");
  const [external4, setExternal4] = useState("");
  const [total4, setTotal4] = useState("0");
  const [credit4, setCredit4] = useState("0");
  const [grade4, setGrade4] = useState("0");

  const [internal4Error, setInternal4Error] = useState("");
  const [external4Error, setExternal4Error] = useState("");

  const handleSubjectChange4 = (e) => {
    const selectedSubject = e.target.value;

    const credit = e.target.selectedOptions[0].getAttribute("data-credit");

    setSubject4(selectedSubject);
    setCredit4(parseInt(credit));
  };

  const handleInternalChange4 = (e) => {
    const internalMark = Number.parseInt(e.target.value, 10);
    setInternal4(internalMark);
  };

  const handleExternalChange4 = (e) => {
    const externalMark = Number.parseInt(e.target.value, 10);
    setExternal4(externalMark);
  };

  useEffect(() => {
    const updateTotalAndgrade4 = () => {
      const internalMarks = parseFloat(internal4) || 0;
      const externalMarks = parseFloat(external4) || 0;
      const totalMarks = internalMarks + externalMarks;

      setTotal4(totalMarks);

      let grade;
      if (totalMarks >= 90 && totalMarks <= 100) {
        grade = 10;
      } else if (totalMarks >= 80 && totalMarks <= 89) {
        grade = 9;
      } else if (totalMarks >= 70 && totalMarks <= 79) {
        grade = 8;
      } else if (totalMarks >= 60 && totalMarks <= 69) {
        grade = 7;
      } else if (totalMarks >= 55 && totalMarks <= 59) {
        grade = 6;
      } else if (totalMarks >= 50 && totalMarks <= 54) {
        grade = 5;
      } else if (totalMarks >= 45 && totalMarks <= 49) {
        grade = 4;
      } else {
        grade = 0;
      }

      setGrade4(grade);
    };

    updateTotalAndgrade4();
  }, [internal4, external4]);
  // ----------------------------------------------------

  // const usnRegex = /^1BI21MC(0[0-9][1-9]|1[0-1][0-9]|120)$/;
  const usnRegex = /^1BI21MC(0[0-9][0-9]|1[0-1][0-9]|120)$/;
  const nameRegex = /^[a-zA-Z]{3,}( [a-zA-Z]+)*$/;

  const handleUsnChange = (event) => {
    const inputValue = event.target.value;
    const uppercaseValue = inputValue.toUpperCase();
    setUsn(uppercaseValue);
    setUsnError("");
  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    const uppercaseValue = inputValue.toUpperCase();
    setName(uppercaseValue);
    setNameError("");
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setGenderError("");
  };

  useEffect(() => {
    const inputIds = [
      "usn",
      "name",
      "gender",
      "internal1",
      "external1",
      "internal2",
      "external2",
      "internal3",
      "external3",
      "internal4",
      "external4",
    ];

    const handleInputChange = (errorStateSetter) => {
      errorStateSetter("");
    };

    const handleInputFocus = (e) => {
      e.target.classList.remove("border-red-500");
      const inputId = e.target.id;
      if (inputIds.includes(inputId)) {
        const errorStateSetter = getErrorStateSetter(inputId);
        errorStateSetter("");
      }
    };

    const getErrorStateSetter = (inputId) => {
      const errorStateSetterMap = {
        usn: setUsnError,
        name: setNameError,
        gender: setGenderError,
        internal1: setInternal1Error,
        external1: setExternal1Error,
        internal2: setInternal2Error,
        external2: setExternal2Error,
        internal3: setInternal3Error,
        external3: setExternal3Error,
        internal4: setInternal4Error,
        external4: setExternal4Error,
      };
      return errorStateSetterMap[inputId] || (() => {});
    };

    inputIds.forEach((inputId) => {
      const input = document.getElementById(inputId);
      if (input) {
        const errorStateSetter = getErrorStateSetter(inputId);
        input.addEventListener("change", () =>
          handleInputChange(errorStateSetter)
        );
        input.addEventListener("focus", handleInputFocus);
      }
    });

    return () => {
      inputIds.forEach((inputId) => {
        const input = document.getElementById(inputId);
        if (input) {
          const errorStateSetter = getErrorStateSetter(inputId);
          input.removeEventListener("change", () =>
            handleInputChange(errorStateSetter)
          );
          input.removeEventListener("focus", handleInputFocus);
        }
      });
    };
  }, []);

  // const calculate1 = () => {
  //   // alert("working fine");
  //   let total = 0;
  //   const totalmarks = 400;

  //   let failCount = 0;
  //   const numberOfSubjects = 4; // Update this with the actual number of subjects

  //   for (let i = 1; i <= numberOfSubjects; i++) {
  //     const external = parseFloat(
  //       document.getElementById(`external${i}`).value
  //     );
  //     const subjectTotal = parseFloat(
  //       document.getElementById(`total${i}`).value
  //     );

  //     if (external < 24) {
  //       failCount++;
  //     } else if (external >= 24 && external < 50 && subjectTotal < 50) {
  //       failCount++;
  //     } else if (external >= 24 && subjectTotal >= 50) {
  //       total += subjectTotal;
  //     }
  //   }

  //   const calculatedPercentage = Math.round((total / totalmarks) * 100);

  //   const pass =
  //     failCount === 0
  //       ? '<span style="color: green">Passed! Congrats 🎉🎊</span>'
  //       : `<span style="color: red">Failed in ${failCount} Subjects  \u{1F61E}\u{1F61E}</span>`;
  //   const calculatedResult = `You have scored ${total} out of ${totalmarks} <br> and you have ${pass}`;

  //   const credits = [];
  //   const grades = [];

  //   // loop over inputs and push values to corresponding arrays
  //   for (let i = 1; i <= numberOfSubjects; i++) {
  //     const credit = parseFloat(document.getElementById(`credit${i}`).value);
  //     const grade = parseFloat(document.getElementById(`grade${i}`).value);

  //     if (!isNaN(credit) && !isNaN(grade)) {
  //       credits.push(credit);
  //       grades.push(grade);
  //     }
  //   }

  //   const totalCredits = credits.reduce((total, credit) => total + credit, 0);
  //   const weightedGradesSum = grades.reduce(
  //     (total, grade, index) => total + grade * credits[index],
  //     0
  //   );

  //   const calculatedSGPA = weightedGradesSum / totalCredits;

  //   setPercentage(`${calculatedPercentage}%`);
  //   setSGPA(calculatedSGPA.toFixed(2));
  //   setResult(calculatedResult);

  //   showModal();
  // };

  // const sendCalculatedData = async (
  //   total,
  //   calculatedPercentage,
  //   calculatedSGPA,
  //   formData
  // ) => {
  //   const {
  //     usn,
  //     name,
  //     gender,
  //     subject1,
  //     internal1,
  //     external1,
  //     total1,
  //     credit1,
  //     grade1,
  //     subject2,
  //     internal2,
  //     external2,
  //     total2,
  //     credit2,
  //     grade2,
  //     subject4,
  //     internal4,
  //     external4,
  //     total4,
  //     credit4,
  //     grade4,
  //     subject3,
  //     internal3,
  //     total3,
  //     grade3,
  //     credit3,
  //   } = formData;

  //   const dataToSend = {
  //     total,
  //     calculatedPercentage,
  //     calculatedSGPA,
  //     usn,
  //     name,
  //     gender,
  //     subject1,
  //     internal1,
  //     external1,
  //     total1,
  //     credit1,
  //     grade1,
  //     subject2,
  //     internal2,
  //     external2,
  //     total2,
  //     credit2,
  //     grade2,
  //     subject4,
  //     internal4,
  //     external4,
  //     total4,
  //     credit4,
  //     grade4,
  //     subject3,
  //     internal3,
  //     total3,
  //     grade3,
  //     credit3,
  //   };

  //   try {
  //     const URL = "http://localhost:3000/api/1stsem"; // Replace with your actual backend URL
  //     const response = await axios.post(`${URL}/add`, dataToSend);
  //     console.log("Data successfully sent to the backend:", response.data);
  //   } catch (error) {
  //     console.error("Error occurred while sending data:", error);
  //   }
  //   try {
  //     const response = await axios.post(`${URL}/add`, formData);

  //     if (response.status === 200) {
  //       const { message } = response.data;
  //       console.log(message);
  //       setResponseMessage(message);
  //     } else {
  //       const { error } = response.data;
  //       console.error(error);
  //       setResponseMessage(error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setResponseMessage("Failed to save student");
  //   }
  // };
  const sendCalculatedData = async (
    total,
    calculatedPercentage,
    calculatedSGPA,
    formData,
    result
  ) => {
    const {
      usn,
      name,
      gender,
      subject1,
      internal1,
      external1,
      total1,
      credit1,
      grade1,
      subject2,
      internal2,
      external2,
      total2,
      credit2,
      grade2,
      subject4,
      internal4,
      external4,
      total4,
      credit4,
      grade4,
      subject3,
      internal3,
      total3,
      grade3,
      credit3,
    } = formData;

    const dataToSend = {
      total,
      calculatedPercentage,
      calculatedSGPA,
      result,
      usn,
      name,
      gender,
      subject1,
      internal1,
      external1,
      total1,
      credit1,
      grade1,
      subject2,
      internal2,
      external2,
      total2,
      credit2,
      grade2,
      subject4,
      internal4,
      external4,
      total4,
      credit4,
      grade4,
      subject3,
      internal3,
      total3,
      grade3,
      credit3,
    };

    try {
      const URL = "https://sgpacalculatorbackend.onrender.com/api/4thsem"; // Replace with your actual backend URL
      const response = await axios.post(`${URL}/add`, dataToSend);
      console.log("Data successfully sent to the backend:", response.data);
      const { message } = response.data;
      console.log(message);
      setResponseMessage(message);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error occurred while sending data:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setResponseMessage(error.response.data.error);
      } else {
        setResponseMessage("Failed to save student");
      }
      setIsModalOpen(true);
    }
  };
  const calculate1 = () => {
    // alert("working fine");
    let total = 0;
    const totalmarks = 400;

    let failCount = 0;
    const numberOfSubjects = 4; // Update this with the actual number of subjects

    let hasExternal3 = true; // Assume external3 is present by default

    // Check if external3 field is empty
    if (document.getElementById("external3").value === "") {
      hasExternal3 = false; // Set hasExternal3 to false if external3 is empty
    }

    for (let i = 1; i <= numberOfSubjects; i++) {
      const external = parseFloat(
        document.getElementById(`external${i}`).value
      );
      const subjectTotal = parseFloat(
        document.getElementById(`total${i}`).value
      );

      if (i === 3 && !hasExternal3) {
        // Skip subject 3 if it doesn't have external marks
        total += parseFloat(document.getElementById(`internal${i}`).value);
        continue;
      }

      if (external < 24) {
        failCount++;
      } else if (external >= 24 && external < 50 && subjectTotal < 50) {
        failCount++;
      } else if (external >= 24 && subjectTotal >= 50) {
        total += subjectTotal;
      }
    }

    const calculatedPercentage = Math.round((total / totalmarks) * 100);

    const pass =
      failCount === 0
        ? '<span style="color: green">Passed! Congrats 🎉🎊</span>'
        : `<span style="color: red">Failed in ${failCount} Subjects  \u{1F61E}\u{1F61E}</span>`;
    const calculatedResult = `You have scored ${total} out of ${totalmarks} <br> and you have ${pass}`;

    const credits = [];
    const grades = [];

    // loop over inputs and push values to corresponding arrays
    for (let i = 1; i <= numberOfSubjects; i++) {
      const credit = parseFloat(document.getElementById(`credit${i}`).value);
      const grade = parseFloat(document.getElementById(`grade${i}`).value);

      if (!isNaN(credit) && !isNaN(grade)) {
        credits.push(credit);
        grades.push(grade);
      }
    }

    const totalCredits = credits.reduce((total, credit) => total + credit, 0);
    const weightedGradesSum = grades.reduce(
      (total, grade, index) => total + grade * credits[index],
      0
    );

    const calculatedSGPA = weightedGradesSum / totalCredits;
    // const calculatedSGPA = (weightedGradesSum / totalCredits).toFixed(2);

    setPercentage(`${calculatedPercentage}%`);
    setSGPA(calculatedSGPA.toFixed(2));
    setResult(calculatedResult);

    const formData = {
      usn,
      name,
      gender,
      subject1,
      internal1,
      external1,
      total1,
      credit1,
      grade1,
      subject2,
      internal2,
      external2,
      total2,
      credit2,
      grade2,
      subject4,
      internal4,
      external4,
      total4,
      credit4,
      grade4,
      subject3,
      internal3,
      total3,
      grade3,
      credit3,
    };

    let result = "";

    if (failCount > 0) {
      result = "Fail";
    } else if (total >= 300) {
      result = "FCD";
    } else if (total >= 200) {
      result = "FC";
    } else {
      result = "Pass";
    }

    sendCalculatedData(
      total,
      calculatedPercentage,
      calculatedSGPA.toFixed(2),
      formData,
      result
    );

    showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasErrors = false;
    if (!usnRegex.test(usn)) {
      setUsnError("Enter a valid USN");
      hasErrors = true;
    }

    if (!nameRegex.test(name)) {
      setNameError("Enter a valid name");
      hasErrors = true;
    }

    if (gender === "") {
      setGenderError("Plz select a gender");
      hasErrors = true;
    }

    const internal1Value = parseInt(internal1);
    const external1Value = parseInt(external1);

    const isInternal1Valid =
      !isNaN(internal1Value) && internal1Value >= 0 && internal1Value <= 40;
    const isExternal1Valid =
      !isNaN(external1Value) && external1Value >= 0 && external1Value <= 60;

    if (!isInternal1Valid && !isExternal1Valid) {
      setInternal1Error("Please enter the marks.");
      setExternal1Error("Please enter the marks.");
      hasErrors = true;
    } else {
      setInternal1Error("");
      setExternal1Error("");

      if (!isInternal1Valid && isExternal1Valid) {
        setInternal1Error("Please enter the internal marks.");
        hasErrors = true;
      }

      if (isInternal1Valid && !isExternal1Valid) {
        setExternal1Error("Please enter the external marks.");
        hasErrors = true;
      }

      if (!isInternal1Valid) {
        setInternal1Error("Internal marks should be between 0 and 40.");
        hasErrors = true;
      }

      if (!isExternal1Valid) {
        setExternal1Error("External marks should be between 0 and 60.");
        hasErrors = true;
      }
    }

    const internal2Value = parseInt(internal2);
    const external2Value = parseInt(external2);

    const isinternal2Valid =
      !isNaN(internal2Value) && internal2Value >= 0 && internal2Value <= 40;
    const isexternal2Valid =
      !isNaN(external2Value) && external2Value >= 0 && external2Value <= 60;

    if (!isinternal2Valid && !isexternal2Valid) {
      setInternal2Error("Please enter the marks.");
      setExternal2Error("Please enter the marks.");
      hasErrors = true;
    } else {
      setInternal2Error("");
      setExternal2Error("");

      if (!isinternal2Valid && isexternal2Valid) {
        setInternal2Error("Please enter the internal marks.");
        hasErrors = true;
      }

      if (isinternal2Valid && !isexternal2Valid) {
        setExternal2Error("Please enter the external marks.");
        hasErrors = true;
      }

      if (!isinternal2Valid) {
        setInternal2Error("Internal marks should be between 0 and 40.");
        hasErrors = true;
      }

      if (!isexternal2Valid) {
        setExternal2Error("External marks should be between 0 and 60.");
        hasErrors = true;
      }
    }

    const internal3Value = parseInt(internal3);

    const isinternal3Valid =
      !isNaN(internal3Value) && internal3Value >= 0 && internal3Value <= 100;

    if (!isinternal3Valid) {
      setInternal3Error("Please enter valid internal marks between 0 and 100.");
      hasErrors = true;
    } else {
      setInternal3Error("");
    }

    const internal4Value = parseInt(internal4);
    const external4Value = parseInt(external4);

    const isinternal4Valid =
      !isNaN(internal4Value) && internal4Value >= 0 && internal4Value <= 40;
    const isexternal4Valid =
      !isNaN(external4Value) && external4Value >= 0 && external4Value <= 60;

    if (!isinternal4Valid && !isexternal4Valid) {
      setInternal4Error("Please enter the marks.");
      setExternal4Error("Please enter the marks.");
      hasErrors = true;
    } else {
      setInternal4Error("");
      setExternal4Error("");

      if (!isinternal4Valid && isexternal4Valid) {
        setInternal4Error("Please enter the internal marks.");
        hasErrors = true;
      }

      if (isinternal4Valid && !isexternal4Valid) {
        setExternal4Error("Please enter the external marks.");
        hasErrors = true;
      }

      if (!isinternal4Valid) {
        setInternal4Error("Internal marks should be between 0 and 40.");
        hasErrors = true;
      }

      if (!isexternal4Valid) {
        setExternal4Error("External marks should be between 0 and 60.");
        hasErrors = true;
      }
    }

    const selectedSubjects = [];
    const subjectDropdowns = document.querySelectorAll(
      'select[name^="subject"]'
    );
    subjectDropdowns.forEach((dropdown) => {
      const selectedSubject = dropdown.value;
      const errorDiv = dropdown.nextElementSibling;
      const showError = (message) => {
        errorDiv.textContent = message;
        errorDiv.classList.remove("hidden");
        errorDiv.classList.add("text-red-500");
        dropdown.addEventListener("focus", hideError);
        dropdown.addEventListener("change", hideError);
      };
      const hideError = () => {
        errorDiv.classList.add("hidden");
        errorDiv.classList.remove("text-red-500");
      };

      if (!selectedSubject) {
        showError("Please select a subject.");
        hasErrors = true;
      } else if (selectedSubjects.includes(selectedSubject)) {
        showError("This subject has already been selected.");
        hasErrors = true;
      } else {
        selectedSubjects.push(selectedSubject);
      }
    });

    if (!hasErrors) {
      calculate1();
      setUsn("");
      setName("");
      setGender("");
      setInternal1("");
      setExternal1("");
      setSubject1("");
      setCredit1("");
      setInternal2("");
      setExternal2("");
      setSubject2("");
      setCredit2("");
      setInternal3("");
      setExternal3("");
      setSubject3("");
      setCredit3("");
      setInternal4("");
      setExternal4("");
      setSubject4("");
      setCredit4("");
    }
  };

  function handleWheel(event) {
    event.currentTarget.blur(); // Remove focus from the input field
    event.currentTarget.value = event.currentTarget.defaultValue; // Reset the input value to its default value
  }
  return (
    <>
      <Header />
      <Hero name="4th Semester" />
      <div
        className="container mx-auto pt-6 my-4 bg-gray-100 rounded-t-lg shadow-lg px-8 py-4"
        id="section1"
      >
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold mb-4 bg-teal-500 py-4 text-white p-2 rounded-lg shadow-lg mt-6">
            Student Details
          </h1>
        </div>
        <form id="student-form" onSubmit={handleSubmit}>
          <div id="student-form1" className="flex flex-wrap justify-between">
            <div className="mb-4 w-full md:w-auto">
              <label
                htmlFor="usn"
                className="block text-gray-700 font-bold mb-2 text-2xl"
              >
                USN
              </label>
              <input
                type="text"
                id="usn"
                name="usn"
                autoComplete="usn"
                value={usn}
                onChange={handleUsnChange}
                className="w-full px-3 py-2 placeholder-gray-400 text-transform: uppercase border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                placeholder="1BI21MCXXX"
              />
              <div className={usnError ? "error-container h-10 w-35" : ""}>
                {usnError && (
                  <p className="text-red-500 my-2 text-md px-3">{usnError}</p>
                )}
              </div>
            </div>
            <div className="mb-4 w-full md:w-auto">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2 text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-3 py-2 text-transform: uppercase placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                placeholder="John Doe"
              />
              <div className="error-container h-10 w-35">
                {nameError && (
                  <p className="text-red-500 text-md my-2 px-3">{nameError}</p>
                )}
              </div>
            </div>

            <div className="mb-4 w-full md:w-auto h20">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2 text-2xl"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                autoComplete="gender"
                value={gender}
                onChange={handleGenderChange}
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="error-container h-10 w-32">
                {genderError && (
                  <p className="text-red-500 text-md my-2 px-3">
                    {genderError}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="student-form2 mt-6" id="subject-fields">
            <div className="text-center w-full">
              <h2 className="text-2xl font-medium mb-4 bg-teal-500 text-white rounded-md py-4 px-5">
                Enter Marks Here
              </h2>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4 second_field">
              <div className="mb-6">
                <p className="block font-bold text-gray-700 mb-2 text-xs lg:text-xl label-shadow">
                  Subject
                </p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-700 font-bold mb-2 text-xs lg:text-xl label-shadow">
                  Internal
                  <br /> Marks
                </p>
              </div>
              <div className="mb-6">
                <p className="block text-gray-700 font-bold mb-2 text-xs lg:text-xl label-shadow">
                  External
                  <br /> Marks
                </p>
              </div>
              <div className="mb-6">
                <p
                  className="block text-gray-700 font-bold mb-2 text-xs lg:text-xl label-shadow"
                  id="total"
                >
                  Total
                </p>
              </div>
              <div className="mb-6 hidden sm:block md:block lg:block">
                <p
                  className="block text-gray-700 font-bold mb-2 text-xs lg:text-xl label-shadow"
                  id="credit"
                >
                  Credit
                </p>
              </div>
              <div className="mb-6 hidden sm:block md:block lg:block">
                <p
                  className="block text-gray-700 font-bold mb-2 text-xs lg:text-xl label-shadow"
                  id="grade"
                >
                  Grade
                </p>
              </div>
            </div>
            <div id="subject-field-1">
              <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 gap-4 second_field">
                <div className="mb-6">
                  <select
                    name="subject1"
                    id="subject1"
                    value={subject1}
                    onChange={handleSubjectChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xs lg:text-xl focus:shadow-outline placeholder-gray-400"
                  >
                    <option value="">Select Subject</option>
                    <option value="20MCA41" data-credit="2">
                      20MCA41 (A WEB)
                    </option>
                    <option value="20MCA42" data-credit="2">
                      20MCA42 (c#)
                    </option>
                    <option value="20MCA43" data-credit="2">
                      20MCA43 (INTERNSHIP)
                    </option>
                    <option value="20MCA44" data-credit="20">
                      20MCA44 (PROJECT)
                    </option>
                  </select>
                  <div className="error-container h-10 w-35">
                    <p
                      id="subject-error1"
                      className="text-red-500 text-md my-2 px-3 hidden"
                    >
                      Please
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="internal1"
                    id="internal1"
                    autoComplete="internal1"
                    value={internal1}
                    onChange={handleInternalChange}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        internal1Error ? "" : "hidden"
                      }`}
                      id="internal1-error"
                    >
                      {internal1Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="external1"
                    id="external1"
                    autoComplete="external1"
                    value={external1}
                    onChange={handleExternalChange}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        external1Error ? "" : "hidden"
                      }`}
                      id="external1-error"
                    >
                      {external1Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="total1"
                    id="total1"
                    autoComplete="total1"
                    value={total1}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="credit1"
                    id="credit1"
                    autoComplete="credit1"
                    value={credit1}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="grade1"
                    id="grade1"
                    autoComplete="grade1"
                    value={grade1}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div id="subject-field-2">
              <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 gap-4 second_field">
                <div className="mb-6">
                  <select
                    name="subject2"
                    id="subject2"
                    value={subject2}
                    onChange={handleSubjectChange2}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xs lg:text-xl focus:shadow-outline placeholder-gray-400"
                  >
                    <option value="">Select Subject</option>
                    <option value="20MCA41" data-credit="2">
                      20MCA41 (A WEB)
                    </option>
                    <option value="20MCA42" data-credit="2">
                      20MCA42 (c#)
                    </option>
                    <option value="20MCA43" data-credit="2">
                      20MCA43 (INTERNSHIP)
                    </option>
                    <option value="20MCA44" data-credit="20">
                      20MCA44 (PROJECT)
                    </option>
                  </select>
                  <div className="error-container h-10 w-35">
                    <p
                      id="subject-error2"
                      className="text-red-500 text-md my-2 px-3 hidden"
                    >
                      Please
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="internal2"
                    id="internal2"
                    autoComplete="internal2"
                    value={internal2}
                    onChange={handleInternalChange2}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        internal2Error ? "" : "hidden"
                      }`}
                      id="internal2-error"
                    >
                      {internal2Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="external2"
                    id="external2"
                    autoComplete="external2"
                    value={external2}
                    onChange={handleExternalChange2}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        external2Error ? "" : "hidden"
                      }`}
                      id="external2-error"
                    >
                      {external2Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="total2"
                    id="total2"
                    autoComplete="total2"
                    value={total2}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="credit2"
                    id="credit2"
                    autoComplete="credit2"
                    value={credit2}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="grade2"
                    id="grade2"
                    autoComplete="grade2"
                    value={grade2}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div id="subject-field-4">
              <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 gap-4 second_field">
                <div className="mb-6">
                  <select
                    name="subject4"
                    id="subject4"
                    value={subject4}
                    onChange={handleSubjectChange4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xs lg:text-xl focus:shadow-outline placeholder-gray-400"
                  >
                    <option value="">Select Subject</option>
                    <option value="20MCA41" data-credit="2">
                      20MCA41 (A WEB)
                    </option>
                    <option value="20MCA42" data-credit="2">
                      20MCA42 (c#)
                    </option>
                    <option value="20MCA43" data-credit="2">
                      20MCA43 (INTERNSHIP)
                    </option>
                    <option value="20MCA44" data-credit="20">
                      20MCA44 (PROJECT)
                    </option>
                  </select>
                  <div className="error-container h-10 w-35">
                    <p
                      id="subject-error4"
                      className="text-red-500 text-md my-2 px-3 hidden"
                    >
                      Please
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="internal4"
                    id="internal4"
                    autoComplete="internal4"
                    value={internal4}
                    onChange={handleInternalChange4}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        internal4Error ? "" : "hidden"
                      }`}
                      id="internal4-error"
                    >
                      {internal4Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="external4"
                    id="external4"
                    autoComplete="external4"
                    value={external4}
                    onChange={handleExternalChange4}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        external4Error ? "" : "hidden"
                      }`}
                      id="external4-error"
                    >
                      {external4Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="total4"
                    id="total4"
                    autoComplete="total4"
                    value={total4}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="credit4"
                    id="credit4"
                    autoComplete="credit4"
                    value={credit4}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="grade4"
                    id="grade4"
                    autoComplete="grade4"
                    value={grade4}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div id="subject-field-3">
              <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 gap-4 second_field">
                <div className="mb-6">
                  <select
                    name="subject3"
                    id="subject3"
                    value={subject3}
                    onChange={handleSubjectChange3}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xs lg:text-xl focus:shadow-outline placeholder-gray-400"
                  >
                    <option value="">Select Subject</option>
                    <option value="20MCA41" data-credit="2">
                      20MCA41 (A WEB)
                    </option>
                    <option value="20MCA42" data-credit="2">
                      20MCA42 (c#)
                    </option>
                    <option value="20MCA43" data-credit="2">
                      20MCA43 (INTERNSHIP)
                    </option>
                    <option value="20MCA44" data-credit="20">
                      20MCA44 (PROJECT)
                    </option>
                  </select>
                  <p className="text-red-500 text-xs mt-4">
                    *This field is for internship
                  </p>
                  <div className="error-container h-10 w-35">
                    <p
                      id="subject-error3"
                      className="text-red-500 text-md my-2 px-3 hidden"
                    >
                      Please
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="internal3"
                    id="internal3"
                    autoComplete="internal3"
                    value={internal3}
                    onChange={handleInternalChange3}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                  />
                  <div className="error-container h-10 w-35">
                    <p
                      className={`text-red-500 text-sm my-1 ${
                        internal3Error ? "" : "hidden"
                      }`}
                      id="internal3-error"
                    >
                      {internal3Error}
                    </p>
                  </div>
                </div>
                <div className="mb-6 invisible">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="external3"
                    id="external3"
                    autoComplete="external3"
                    value={external3}
                    onChange={handleExternalChange3}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                  <div
                    className={`error-container h-10 w-35 ${
                      external3Error ? "" : "hidden"
                    }`}
                  >
                    <p
                      className="text-red-500 text-sm my-1"
                      id="external3-error"
                    >
                      {external3Error}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="total3"
                    id="total3"
                    autoComplete="total3"
                    value={total3}
                    className="w-full px-3 py-2 text-xs lg:text-xl placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="credit3"
                    id="credit3"
                    autoComplete="credit3"
                    value={credit3}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
                <div className="mb-6 hidden sm:block md:block lg:block">
                  <input
                    type="number"
                    onWheel={handleWheel}
                    name="grade3"
                    id="grade3"
                    autoComplete="grade3"
                    value={grade3}
                    className="w-full px-3 text-xs lg:text-xl py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    placeholder="0"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* <div>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="fixed inset-0 bg-black opacity-75"></div>
                  <div className="bg-white p-6 rounded-lg relative z-10">
                    <p className="text-center text-lg font-bold">
                      {responseMessage}
                    </p>
                    <p>--------------------------------------------------</p>
                    <h2
                      className="text-2xl font-bold mb-4"
                      dangerouslySetInnerHTML={{ __html: result }}
                    ></h2>
                    <div className="flex justify-between my-3">
                      <div>
                        <p className="font-bold">Percentage:</p>
                        <p
                          className="text-xl lg:text-xl font-bold"
                          dangerouslySetInnerHTML={{ __html: percentage }}
                        ></p>
                      </div>
                      <div>
                        <p className="font-bold">AND</p>
                      </div>
                      <div>
                        <p className="font-bold">SGPA:</p>
                        <p className="text-xl lg:text-xl font-bold">{sgpa}</p>
                      </div>
                    </div>
                    <div className="text-center my-3">
                      <button
                        onClick={hideModal}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-teal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-full flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base lg:text-2xl py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue"
                >
                  Calculate
                </button>
              </div>
            </div> */}
            <div>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="fixed inset-0 bg-black opacity-75"></div>
                  <div className="bg-white p-6 rounded-lg relative z-10 h-auto w-auto">
                    {responseMessage ? (
                      <>
                        <p className="text-center text-lg font-bold">
                          {responseMessage}
                        </p>
                        {responseMessage !==
                          "server Error (or) database error" &&
                          responseMessage !==
                            "This USN already exists. Your data is not saved in the database. Please check." && (
                            <>
                              <p className="text-center">
                                --------------------------------------------------
                              </p>
                              <h2
                                className="text-2xl font-bold mb-4"
                                dangerouslySetInnerHTML={{ __html: result }}
                              ></h2>
                              <div className="flex justify-between my-3">
                                <div>
                                  <p className="font-bold">Percentage:</p>
                                  <p
                                    className="text-xl lg:text-xl font-bold"
                                    dangerouslySetInnerHTML={{
                                      __html: percentage,
                                    }}
                                  ></p>
                                </div>
                                <div>
                                  <p className="font-bold">AND</p>
                                </div>
                                <div>
                                  <p className="font-bold">SGPA:</p>
                                  <p className="text-xl lg:text-xl font-bold">
                                    {sgpa}
                                  </p>
                                </div>
                              </div>
                            </>
                          )}
                      </>
                    ) : (
                      <p className="text-center text-lg font-bold">
                        Calculating...
                      </p>
                    )}
                    <div className="text-center my-3">
                      <button
                        onClick={hideModal}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-teal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-full flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base lg:text-2xl py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FourthSem;
