import { useEffect, useState } from "react";
import axios from "axios";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";

const ThirdSemShow = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const apiUrl = "https://sgpacalculatorbackend.onrender.com/api/thirdsem";

    try {
      const response = await axios.get(`${apiUrl}/all`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        $(document).ready(function () {
          $("#datatable-search").DataTable();
        });
      } catch (error) {
        console.log("error :", error);
      }
    };

    getData();
  }, []);

  const handleDownload = () => {
    const table = $("#datatable-search").DataTable();
    const tableData = table.data().toArray();

    // Extract subject codes from column headers
    const subjectCodes = table
      .columns()
      .header()
      .toArray()
      .slice(3)
      .map((column) => {
        const headerText = $(column).text();
        const subjectCode = headerText.split(" - ")[0];
        return subjectCode;
      });

    // Create the header row with subject codes
    const headerRow1 = [
      "USN",
      "Name",
      "Gender",
      "",
      "20MCA31 - (DAP)",
      "",
      "",
      "20MCA32 - (IOT)",
      "",
      "",
      "20MCA33 - (A JAVA)",
      "",
      "",
      "20MCA342 - (CC)",
      "",
      "",
      "20MCA352 - (BDA)",
      "",
      "20MCA36 - (DAP LAB)",
      "",
      "",
      "20MCA37 - (IOT LAB)",
      "",
      "",
      "20MCA38 - (A JAVA LAB)",
      "",
    ];
    const headerRow2 = ["", "", "", ...subjectCodes];
    const header = [headerRow1, headerRow2];

    const workbook = XLSXUtils.book_new();
    const worksheet = XLSXUtils.aoa_to_sheet([...header, ...tableData]);
    XLSXUtils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSXWrite(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const filename = "data.xlsx";

    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.msSaveOrOpenBlob
    ) {
      // For IE browser
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // For modern browsers
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="container mx-auto my-5">
      <div className="p-4 border-b border-gray-200 shadow">
        <div
          className="overflow-x-auto"
          style={{ maxWidth: "100%", overflowX: "scroll" }}
        >
          <table
            className="w-full sm:table-auto"
            id="datatable-search"
            style={{ paddingTop: "20px", paddingBottom: "40px" }}
          >
            {/* Table content */}
            <thead className="bg-gray-100">
              <tr>
                <th
                  className="p-4 text-xs text-gray-950"
                  rowSpan="2"
                  data-subject-code="USN"
                >
                  <div className=" text-right">USN</div>
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  rowSpan="2"
                  data-subject-code="Name"
                >
                  <div className="w-40 text-left">Name</div>
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  rowSpan="2"
                  data-subject-code="Gender"
                >
                  Gender
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA31"
                >
                  20MCA31 - (DAP)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA32"
                >
                  20MCA32 - (IOT)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA33"
                >
                  20MCA33 - (A JAVA)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA342"
                >
                  20MCA342 - (CC)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA352"
                >
                  20MCA352 - (BDA)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA36"
                >
                  20MCA36 - (DAP LAB)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA37"
                >
                  20MCA37 - (IOT LAB)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  colSpan="3"
                  data-subject-code="20MCA38"
                >
                  20MCA38 - (A JAVA LAB)
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  rowSpan="2"
                  data-subject-code="total"
                >
                  Total Marks
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  rowSpan="2"
                  data-subject-code="percentage"
                >
                  Percentage
                </th>
                <th
                  className="p-4 text-xs text-gray-950"
                  rowSpan="2"
                  data-subject-code="result"
                >
                  Result
                </th>
              </tr>
              <tr>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
                <th className="p-4 text-xs text-gray-950">IA</th>
                <th className="p-4 text-xs text-gray-950">EX</th>
                <th className="p-4 text-xs text-gray-950">Total</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  {/* Render the data in each table cell */}

                  <td className="p-4 text-xs text-right">{item.usn}</td>
                  <td className="p-4 text-xs">{item.name}</td>
                  <td className="p-4 text-xs">{item.gender}</td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA31"
                      ? item.internal1
                      : item.subject2 === "20MCA31"
                      ? item.internal2
                      : item.subject3 === "20MCA31"
                      ? item.internal3
                      : item.subject4 === "20MCA31"
                      ? item.internal4
                      : item.subject5 === "20MCA31"
                      ? item.internal5
                      : item.subject6 === "20MCA31"
                      ? item.internal6
                      : item.subject7 === "20MCA31"
                      ? item.internal7
                      : item.subject8 === "20MCA31"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA31"
                      ? item.external1
                      : item.subject2 === "20MCA31"
                      ? item.external2
                      : item.subject3 === "20MCA31"
                      ? item.external3
                      : item.subject4 === "20MCA31"
                      ? item.external4
                      : item.subject5 === "20MCA31"
                      ? item.external5
                      : item.subject6 === "20MCA31"
                      ? item.external6
                      : item.subject7 === "20MCA31"
                      ? item.external7
                      : item.subject8 === "20MCA31"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA31"
                      ? item.total1
                      : item.subject2 === "20MCA31"
                      ? item.total2
                      : item.subject3 === "20MCA31"
                      ? item.total3
                      : item.subject4 === "20MCA31"
                      ? item.total4
                      : item.subject5 === "20MCA31"
                      ? item.total5
                      : item.subject6 === "20MCA31"
                      ? item.total6
                      : item.subject7 === "20MCA31"
                      ? item.total7
                      : item.subject8 === "20MCA31"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA32"
                      ? item.internal1
                      : item.subject2 === "20MCA32"
                      ? item.internal2
                      : item.subject3 === "20MCA32"
                      ? item.internal3
                      : item.subject4 === "20MCA32"
                      ? item.internal4
                      : item.subject5 === "20MCA32"
                      ? item.internal5
                      : item.subject6 === "20MCA32"
                      ? item.internal6
                      : item.subject7 === "20MCA32"
                      ? item.internal7
                      : item.subject8 === "20MCA32"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA32"
                      ? item.external1
                      : item.subject2 === "20MCA32"
                      ? item.external2
                      : item.subject3 === "20MCA32"
                      ? item.external3
                      : item.subject4 === "20MCA32"
                      ? item.external4
                      : item.subject5 === "20MCA32"
                      ? item.external5
                      : item.subject6 === "20MCA32"
                      ? item.external6
                      : item.subject7 === "20MCA32"
                      ? item.external7
                      : item.subject8 === "20MCA32"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA32"
                      ? item.total1
                      : item.subject2 === "20MCA32"
                      ? item.total2
                      : item.subject3 === "20MCA32"
                      ? item.total3
                      : item.subject4 === "20MCA32"
                      ? item.total4
                      : item.subject5 === "20MCA32"
                      ? item.total5
                      : item.subject6 === "20MCA32"
                      ? item.total6
                      : item.subject7 === "20MCA32"
                      ? item.total7
                      : item.subject8 === "20MCA32"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA33"
                      ? item.internal1
                      : item.subject2 === "20MCA33"
                      ? item.internal2
                      : item.subject3 === "20MCA33"
                      ? item.internal3
                      : item.subject4 === "20MCA33"
                      ? item.internal4
                      : item.subject5 === "20MCA33"
                      ? item.internal5
                      : item.subject6 === "20MCA33"
                      ? item.internal6
                      : item.subject7 === "20MCA33"
                      ? item.internal7
                      : item.subject8 === "20MCA33"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA33"
                      ? item.external1
                      : item.subject2 === "20MCA33"
                      ? item.external2
                      : item.subject3 === "20MCA33"
                      ? item.external3
                      : item.subject4 === "20MCA33"
                      ? item.external4
                      : item.subject5 === "20MCA33"
                      ? item.external5
                      : item.subject6 === "20MCA33"
                      ? item.external6
                      : item.subject7 === "20MCA33"
                      ? item.external7
                      : item.subject8 === "20MCA33"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA33"
                      ? item.total1
                      : item.subject2 === "20MCA33"
                      ? item.total2
                      : item.subject3 === "20MCA33"
                      ? item.total3
                      : item.subject4 === "20MCA33"
                      ? item.total4
                      : item.subject5 === "20MCA33"
                      ? item.total5
                      : item.subject6 === "20MCA33"
                      ? item.total6
                      : item.subject7 === "20MCA33"
                      ? item.total7
                      : item.subject8 === "20MCA33"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA342"
                      ? item.internal1
                      : item.subject2 === "20MCA342"
                      ? item.internal2
                      : item.subject3 === "20MCA342"
                      ? item.internal3
                      : item.subject4 === "20MCA342"
                      ? item.internal4
                      : item.subject5 === "20MCA342"
                      ? item.internal5
                      : item.subject6 === "20MCA342"
                      ? item.internal6
                      : item.subject7 === "20MCA342"
                      ? item.internal7
                      : item.subject8 === "20MCA342"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA342"
                      ? item.external1
                      : item.subject2 === "20MCA342"
                      ? item.external2
                      : item.subject3 === "20MCA342"
                      ? item.external3
                      : item.subject4 === "20MCA342"
                      ? item.external4
                      : item.subject5 === "20MCA342"
                      ? item.external5
                      : item.subject6 === "20MCA342"
                      ? item.external6
                      : item.subject7 === "20MCA342"
                      ? item.external7
                      : item.subject8 === "20MCA342"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA342"
                      ? item.total1
                      : item.subject2 === "20MCA342"
                      ? item.total2
                      : item.subject3 === "20MCA342"
                      ? item.total3
                      : item.subject4 === "20MCA342"
                      ? item.total4
                      : item.subject5 === "20MCA342"
                      ? item.total5
                      : item.subject6 === "20MCA342"
                      ? item.total6
                      : item.subject7 === "20MCA342"
                      ? item.total7
                      : item.subject8 === "20MCA342"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA352"
                      ? item.internal1
                      : item.subject2 === "20MCA352"
                      ? item.internal2
                      : item.subject3 === "20MCA352"
                      ? item.internal3
                      : item.subject4 === "20MCA352"
                      ? item.internal4
                      : item.subject5 === "20MCA352"
                      ? item.internal5
                      : item.subject6 === "20MCA352"
                      ? item.internal6
                      : item.subject7 === "20MCA352"
                      ? item.internal7
                      : item.subject8 === "20MCA352"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA352"
                      ? item.external1
                      : item.subject2 === "20MCA352"
                      ? item.external2
                      : item.subject3 === "20MCA352"
                      ? item.external3
                      : item.subject4 === "20MCA352"
                      ? item.external4
                      : item.subject5 === "20MCA352"
                      ? item.external5
                      : item.subject6 === "20MCA352"
                      ? item.external6
                      : item.subject7 === "20MCA352"
                      ? item.external7
                      : item.subject8 === "20MCA352"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA352"
                      ? item.total1
                      : item.subject2 === "20MCA352"
                      ? item.total2
                      : item.subject3 === "20MCA352"
                      ? item.total3
                      : item.subject4 === "20MCA352"
                      ? item.total4
                      : item.subject5 === "20MCA352"
                      ? item.total5
                      : item.subject6 === "20MCA352"
                      ? item.total6
                      : item.subject7 === "20MCA352"
                      ? item.total7
                      : item.subject8 === "20MCA352"
                      ? item.total8
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA36"
                      ? item.internal1
                      : item.subject2 === "20MCA36"
                      ? item.internal2
                      : item.subject3 === "20MCA36"
                      ? item.internal3
                      : item.subject4 === "20MCA36"
                      ? item.internal4
                      : item.subject5 === "20MCA36"
                      ? item.internal5
                      : item.subject6 === "20MCA36"
                      ? item.internal6
                      : item.subject7 === "20MCA36"
                      ? item.internal7
                      : item.subject8 === "20MCA36"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA36"
                      ? item.external1
                      : item.subject2 === "20MCA36"
                      ? item.external2
                      : item.subject3 === "20MCA36"
                      ? item.external3
                      : item.subject4 === "20MCA36"
                      ? item.external4
                      : item.subject5 === "20MCA36"
                      ? item.external5
                      : item.subject6 === "20MCA36"
                      ? item.external6
                      : item.subject7 === "20MCA36"
                      ? item.external7
                      : item.subject8 === "20MCA36"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA36"
                      ? item.total1
                      : item.subject2 === "20MCA36"
                      ? item.total2
                      : item.subject3 === "20MCA36"
                      ? item.total3
                      : item.subject4 === "20MCA36"
                      ? item.total4
                      : item.subject5 === "20MCA36"
                      ? item.total5
                      : item.subject6 === "20MCA36"
                      ? item.total6
                      : item.subject7 === "20MCA36"
                      ? item.total7
                      : item.subject8 === "20MCA36"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA37"
                      ? item.internal1
                      : item.subject2 === "20MCA37"
                      ? item.internal2
                      : item.subject3 === "20MCA37"
                      ? item.internal3
                      : item.subject4 === "20MCA37"
                      ? item.internal4
                      : item.subject5 === "20MCA37"
                      ? item.internal5
                      : item.subject6 === "20MCA37"
                      ? item.internal6
                      : item.subject7 === "20MCA37"
                      ? item.internal7
                      : item.subject8 === "20MCA37"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA37"
                      ? item.external1
                      : item.subject2 === "20MCA37"
                      ? item.external2
                      : item.subject3 === "20MCA37"
                      ? item.external3
                      : item.subject4 === "20MCA37"
                      ? item.external4
                      : item.subject5 === "20MCA37"
                      ? item.external5
                      : item.subject6 === "20MCA37"
                      ? item.external6
                      : item.subject7 === "20MCA37"
                      ? item.external7
                      : item.subject8 === "20MCA37"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA37"
                      ? item.total1
                      : item.subject2 === "20MCA37"
                      ? item.total2
                      : item.subject3 === "20MCA37"
                      ? item.total3
                      : item.subject4 === "20MCA37"
                      ? item.total4
                      : item.subject5 === "20MCA37"
                      ? item.total5
                      : item.subject6 === "20MCA37"
                      ? item.total6
                      : item.subject7 === "20MCA37"
                      ? item.total7
                      : item.subject8 === "20MCA37"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA38"
                      ? item.internal1
                      : item.subject2 === "20MCA38"
                      ? item.internal2
                      : item.subject3 === "20MCA38"
                      ? item.internal3
                      : item.subject4 === "20MCA38"
                      ? item.internal4
                      : item.subject5 === "20MCA38"
                      ? item.internal5
                      : item.subject6 === "20MCA38"
                      ? item.internal6
                      : item.subject7 === "20MCA38"
                      ? item.internal7
                      : item.subject8 === "20MCA38"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA38"
                      ? item.external1
                      : item.subject2 === "20MCA38"
                      ? item.external2
                      : item.subject3 === "20MCA38"
                      ? item.external3
                      : item.subject4 === "20MCA38"
                      ? item.external4
                      : item.subject5 === "20MCA38"
                      ? item.external5
                      : item.subject6 === "20MCA38"
                      ? item.external6
                      : item.subject7 === "20MCA38"
                      ? item.external7
                      : item.subject8 === "20MCA38"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA38"
                      ? item.total1
                      : item.subject2 === "20MCA38"
                      ? item.total2
                      : item.subject3 === "20MCA38"
                      ? item.total3
                      : item.subject4 === "20MCA38"
                      ? item.total4
                      : item.subject5 === "20MCA38"
                      ? item.total5
                      : item.subject6 === "20MCA38"
                      ? item.total6
                      : item.subject7 === "20MCA38"
                      ? item.total7
                      : item.subject8 === "20MCA38"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">{item.total}</td>
                  <td className="p-4 text-xs">{item.calculatedPercentage}%</td>
                  <td className="p-4 text-xs">{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 text-center">
          <button
            className="border px-6 py-2 bg-teal-500 rounded text-white font-bold hover:bg-teal600"
            onClick={handleDownload}
          >
            Download as Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSemShow;
