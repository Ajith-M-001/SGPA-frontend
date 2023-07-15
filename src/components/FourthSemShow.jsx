import { useEffect, useState } from "react";
import axios from "axios";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";

const FourthSemShow = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const apiUrl = "https://sgpacalculatorbackend.onrender.com/api/fourthsem";

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
        console.log("Error:", error);
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
      "20MCA41 - (A WEB)",
      "",
      "",
      "20MCA42 - (C#)",
      "",
      "",
      "20MCA33 - (INTERNSHIP)",
      "",
      "",
      "20MCA34 - (PROJECT)",
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
        <div className="overflow-x-auto">
          <table
            className="w-full sm:table-auto"
            id="datatable-search"
            style={{ paddingTop: "20px", paddingBottom: "40px" }}
          >
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-xs text-gray-900" rowSpan="2">
                  <div className="w-32 text-right">USN</div>
                </th>
                <th className="p-4 text-xs text-gray-900" rowSpan="2">
                  <div className="w-32 text-left">Name</div>
                </th>
                <th className="p-4 text-xs text-gray-900" rowSpan="2">
                  Gender
                </th>
                <th className="p-4 text-xs text-gray-900" colSpan="3">
                  20MCA41 - (A WEB)
                </th>
                <th className="p-4 text-xs text-gray-900" colSpan="3">
                  20MCA42 - (C#)
                </th>
                <th className="p-4 text-xs text-gray-900" colSpan="3">
                  20MCA33 - (INTERNSHIP)
                </th>
                <th className="p-4 text-xs text-gray-900" colSpan="3">
                  20MCA34 - (PROJECT)
                </th>
                <th className="p-4 text-xs text-gray-900" rowSpan="2">
                  Total Marks
                </th>
                <th className="p-4 text-xs text-gray-900" rowSpan="2">
                  Percentage
                </th>
                <th className="p-4 text-xs text-gray-900" rowSpan="2">
                  Result
                </th>
              </tr>
              <tr>
                <th className="p-4 text-xs text-gray-900">IA</th>
                <th className="p-4 text-xs text-gray-900">EX</th>
                <th className="p-4 text-xs text-gray-900">Total</th>
                <th className="p-4 text-xs text-gray-900">IA</th>
                <th className="p-4 text-xs text-gray-900">EX</th>
                <th className="p-4 text-xs text-gray-900">Total</th>
                <th className="p-4 text-xs text-gray-900">IA</th>
                <th className="p-4 text-xs text-gray-900">EX</th>
                <th className="p-4 text-xs text-gray-900">Total</th>
                <th className="p-4 text-xs text-gray-900">IA</th>
                <th className="p-4 text-xs text-gray-900">EX</th>
                <th className="p-4 text-xs text-gray-900">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item) => (
                <tr
                  key={item.usn}
                  className={item.__v % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="p-4 text-xs text-right">{item.usn}</td>
                  <td className="p-4 text-xs">{item.name}</td>
                  <td className="p-4 text-xs">{item.gender}</td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA41"
                      ? item.internal1
                      : item.subject2 === "20MCA41"
                      ? item.internal2
                      : item.subject3 === "20MCA41"
                      ? item.internal3
                      : item.subject4 === "20MCA41"
                      ? item.internal4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA41"
                      ? item.external1
                      : item.subject2 === "20MCA41"
                      ? item.external2
                      : item.subject3 === "20MCA41"
                      ? item.external3
                      : item.subject4 === "20MCA41"
                      ? item.external4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA41"
                      ? item.total1
                      : item.subject2 === "20MCA41"
                      ? item.total2
                      : item.subject3 === "20MCA41"
                      ? item.total3
                      : item.subject4 === "20MCA41"
                      ? item.total4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA42"
                      ? item.internal1
                      : item.subject2 === "20MCA42"
                      ? item.internal2
                      : item.subject3 === "20MCA42"
                      ? item.internal3
                      : item.subject4 === "20MCA42"
                      ? item.internal4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {/* {item.subject2 === "20MCA41" ? item.external2 : ""} */}
                    {item.subject1 === "20MCA42"
                      ? item.external1
                      : item.subject2 === "20MCA42"
                      ? item.external2
                      : item.subject3 === "20MCA42"
                      ? item.external3
                      : item.subject4 === "20MCA42"
                      ? item.external4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {/* {item.subject2 === "20MCA41" ? item.total2 : ""} */}

                    {item.subject1 === "20MCA42"
                      ? item.total1
                      : item.subject2 === "20MCA42"
                      ? item.total2
                      : item.subject3 === "20MCA42"
                      ? item.total3
                      : item.subject4 === "20MCA42"
                      ? item.total4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA43"
                      ? item.internal1
                      : item.subject2 === "20MCA43"
                      ? item.internal2
                      : item.subject3 === "20MCA43"
                      ? item.internal3
                      : item.subject4 === "20MCA43"
                      ? item.internal4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA43"
                      ? item.external1
                      : item.subject2 === "20MCA43"
                      ? item.external2
                      : item.subject3 === "20MCA43"
                      ? item.external3
                      : item.subject4 === "20MCA43"
                      ? item.external4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA43"
                      ? item.total1
                      : item.subject2 === "20MCA43"
                      ? item.total2
                      : item.subject3 === "20MCA43"
                      ? item.total3
                      : item.subject4 === "20MCA43"
                      ? item.total4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA44"
                      ? item.internal1
                      : item.subject2 === "20MCA44"
                      ? item.internal2
                      : item.subject3 === "20MCA44"
                      ? item.internal3
                      : item.subject4 === "20MCA44"
                      ? item.internal4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA44"
                      ? item.external1
                      : item.subject2 === "20MCA44"
                      ? item.external2
                      : item.subject3 === "20MCA44"
                      ? item.external3
                      : item.subject4 === "20MCA44"
                      ? item.external4
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA44"
                      ? item.total1
                      : item.subject2 === "20MCA44"
                      ? item.total2
                      : item.subject3 === "20MCA44"
                      ? item.total3
                      : item.subject4 === "20MCA44"
                      ? item.total4
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

export default FourthSemShow;
