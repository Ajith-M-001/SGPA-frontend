import { useEffect, useState } from "react";
import axios from "axios";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";

const FirstSemShow = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const apiUrl = "https://sgpacalculatorbackend.onrender.com/api/firstsem";

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
      "20MCA11 - (DSA)",
      "",
      "",
      "20MCA12 - (OS/UNIX)",
      "",
      "",
      "20MCA13 - (CN)",
      "",
      "",
      "20MCA14 - (MFCA)",
      "",
      "",
      "20MCA15 - (RM)",
      "",
      "20MCA16 - (DSA LAB)",
      "",
      "",
      "20MCA17 - (UNIX LAB)",
      "",
      "",
      "20MCA18 - (CN LAB)",
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
    <div className="container mx-auto my-5 ">
      <div className="p-4 border-b border-gray-200 shadow">
        <div className="overflow-x-auto">
          <table
            className="w-full sm:table-auto"
            id="datatable-search"
            style={{ paddingTop: "20px", paddingBottom: "40px" }}
          >
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-xs text-gray-950" rowSpan="2">
                  <div className="w-32 text-right">USN</div>
                </th>
                <th className="p-4 text-xs text-gray-950" rowSpan="2">
                  <div className="w-32 text-left">Name</div>
                </th>
                <th className="p-4 text-xs text-gray-950" rowSpan="2">
                  Gender
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA11 - (DSA)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA12 - (OS/UNIX)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA13 - (CN)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA14 - (MFCA)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA15 - (RM)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA16 - (DSA LAB)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA17 - (UNIX LAB)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  S20MCA18 - (CN LAB)
                </th>
                <th className="p-4 text-xs text-gray-950" rowSpan="2">
                  Total Marks
                </th>
                <th className="p-4 text-xs text-gray-950" rowSpan="2">
                  Percentage
                </th>
                <th className="p-4 text-xs text-gray-950" rowSpan="2">
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
                    {item.subject1 === "20MCA11"
                      ? item.internal1
                      : item.subject2 === "20MCA11"
                      ? item.internal2
                      : item.subject3 === "20MCA11"
                      ? item.internal3
                      : item.subject4 === "20MCA11"
                      ? item.internal4
                      : item.subject5 === "20MCA11"
                      ? item.internal5
                      : item.subject6 === "20MCA11"
                      ? item.internal6
                      : item.subject7 === "20MCA11"
                      ? item.internal7
                      : item.subject8 === "20MCA11"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA11"
                      ? item.external1
                      : item.subject2 === "20MCA11"
                      ? item.external2
                      : item.subject3 === "20MCA11"
                      ? item.external3
                      : item.subject4 === "20MCA11"
                      ? item.external4
                      : item.subject5 === "20MCA11"
                      ? item.external5
                      : item.subject6 === "20MCA11"
                      ? item.external6
                      : item.subject7 === "20MCA11"
                      ? item.external7
                      : item.subject8 === "20MCA11"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA11"
                      ? item.total1
                      : item.subject2 === "20MCA11"
                      ? item.total2
                      : item.subject3 === "20MCA11"
                      ? item.total3
                      : item.subject4 === "20MCA11"
                      ? item.total4
                      : item.subject5 === "20MCA11"
                      ? item.total5
                      : item.subject6 === "20MCA11"
                      ? item.total6
                      : item.subject7 === "20MCA11"
                      ? item.total7
                      : item.subject8 === "20MCA11"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA12"
                      ? item.internal1
                      : item.subject2 === "20MCA12"
                      ? item.internal2
                      : item.subject3 === "20MCA12"
                      ? item.internal3
                      : item.subject4 === "20MCA12"
                      ? item.internal4
                      : item.subject5 === "20MCA12"
                      ? item.internal5
                      : item.subject6 === "20MCA12"
                      ? item.internal6
                      : item.subject7 === "20MCA12"
                      ? item.internal7
                      : item.subject8 === "20MCA12"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA12"
                      ? item.external1
                      : item.subject2 === "20MCA12"
                      ? item.external2
                      : item.subject3 === "20MCA12"
                      ? item.external3
                      : item.subject4 === "20MCA12"
                      ? item.external4
                      : item.subject5 === "20MCA12"
                      ? item.external5
                      : item.subject6 === "20MCA12"
                      ? item.external6
                      : item.subject7 === "20MCA12"
                      ? item.external7
                      : item.subject8 === "20MCA12"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA12"
                      ? item.total1
                      : item.subject2 === "20MCA12"
                      ? item.total2
                      : item.subject3 === "20MCA12"
                      ? item.total3
                      : item.subject4 === "20MCA12"
                      ? item.total4
                      : item.subject5 === "20MCA12"
                      ? item.total5
                      : item.subject6 === "20MCA12"
                      ? item.total6
                      : item.subject7 === "20MCA12"
                      ? item.total7
                      : item.subject8 === "20MCA12"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA13"
                      ? item.internal1
                      : item.subject2 === "20MCA13"
                      ? item.internal2
                      : item.subject3 === "20MCA13"
                      ? item.internal3
                      : item.subject4 === "20MCA13"
                      ? item.internal4
                      : item.subject5 === "20MCA13"
                      ? item.internal5
                      : item.subject6 === "20MCA13"
                      ? item.internal6
                      : item.subject7 === "20MCA13"
                      ? item.internal7
                      : item.subject8 === "20MCA13"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA13"
                      ? item.external1
                      : item.subject2 === "20MCA13"
                      ? item.external2
                      : item.subject3 === "20MCA13"
                      ? item.external3
                      : item.subject4 === "20MCA13"
                      ? item.external4
                      : item.subject5 === "20MCA13"
                      ? item.external5
                      : item.subject6 === "20MCA13"
                      ? item.external6
                      : item.subject7 === "20MCA13"
                      ? item.external7
                      : item.subject8 === "20MCA13"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA13"
                      ? item.total1
                      : item.subject2 === "20MCA13"
                      ? item.total2
                      : item.subject3 === "20MCA13"
                      ? item.total3
                      : item.subject4 === "20MCA13"
                      ? item.total4
                      : item.subject5 === "20MCA13"
                      ? item.total5
                      : item.subject6 === "20MCA13"
                      ? item.total6
                      : item.subject7 === "20MCA13"
                      ? item.total7
                      : item.subject8 === "20MCA13"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA14"
                      ? item.internal1
                      : item.subject2 === "20MCA14"
                      ? item.internal2
                      : item.subject3 === "20MCA14"
                      ? item.internal3
                      : item.subject4 === "20MCA14"
                      ? item.internal4
                      : item.subject5 === "20MCA14"
                      ? item.internal5
                      : item.subject6 === "20MCA14"
                      ? item.internal6
                      : item.subject7 === "20MCA14"
                      ? item.internal7
                      : item.subject8 === "20MCA14"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA14"
                      ? item.external1
                      : item.subject2 === "20MCA14"
                      ? item.external2
                      : item.subject3 === "20MCA14"
                      ? item.external3
                      : item.subject4 === "20MCA14"
                      ? item.external4
                      : item.subject5 === "20MCA14"
                      ? item.external5
                      : item.subject6 === "20MCA14"
                      ? item.external6
                      : item.subject7 === "20MCA14"
                      ? item.external7
                      : item.subject8 === "20MCA14"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA14"
                      ? item.total1
                      : item.subject2 === "20MCA14"
                      ? item.total2
                      : item.subject3 === "20MCA14"
                      ? item.total3
                      : item.subject4 === "20MCA14"
                      ? item.total4
                      : item.subject5 === "20MCA14"
                      ? item.total5
                      : item.subject6 === "20MCA14"
                      ? item.total6
                      : item.subject7 === "20MCA14"
                      ? item.total7
                      : item.subject8 === "20MCA14"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA15"
                      ? item.internal1
                      : item.subject2 === "20MCA15"
                      ? item.internal2
                      : item.subject3 === "20MCA15"
                      ? item.internal3
                      : item.subject4 === "20MCA15"
                      ? item.internal4
                      : item.subject5 === "20MCA15"
                      ? item.internal5
                      : item.subject6 === "20MCA15"
                      ? item.internal6
                      : item.subject7 === "20MCA15"
                      ? item.internal7
                      : item.subject8 === "20MCA15"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA15"
                      ? item.external1
                      : item.subject2 === "20MCA15"
                      ? item.external2
                      : item.subject3 === "20MCA15"
                      ? item.external3
                      : item.subject4 === "20MCA15"
                      ? item.external4
                      : item.subject5 === "20MCA15"
                      ? item.external5
                      : item.subject6 === "20MCA15"
                      ? item.external6
                      : item.subject7 === "20MCA15"
                      ? item.external7
                      : item.subject8 === "20MCA15"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA15"
                      ? item.total1
                      : item.subject2 === "20MCA15"
                      ? item.total2
                      : item.subject3 === "20MCA15"
                      ? item.total3
                      : item.subject4 === "20MCA15"
                      ? item.total4
                      : item.subject5 === "20MCA15"
                      ? item.total5
                      : item.subject6 === "20MCA15"
                      ? item.total6
                      : item.subject7 === "20MCA15"
                      ? item.total7
                      : item.subject8 === "20MCA15"
                      ? item.total8
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA16"
                      ? item.internal1
                      : item.subject2 === "20MCA16"
                      ? item.internal2
                      : item.subject3 === "20MCA16"
                      ? item.internal3
                      : item.subject4 === "20MCA16"
                      ? item.internal4
                      : item.subject5 === "20MCA16"
                      ? item.internal5
                      : item.subject6 === "20MCA16"
                      ? item.internal6
                      : item.subject7 === "20MCA16"
                      ? item.internal7
                      : item.subject8 === "20MCA16"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA16"
                      ? item.external1
                      : item.subject2 === "20MCA16"
                      ? item.external2
                      : item.subject3 === "20MCA16"
                      ? item.external3
                      : item.subject4 === "20MCA16"
                      ? item.external4
                      : item.subject5 === "20MCA16"
                      ? item.external5
                      : item.subject6 === "20MCA16"
                      ? item.external6
                      : item.subject7 === "20MCA16"
                      ? item.external7
                      : item.subject8 === "20MCA16"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA16"
                      ? item.total1
                      : item.subject2 === "20MCA16"
                      ? item.total2
                      : item.subject3 === "20MCA16"
                      ? item.total3
                      : item.subject4 === "20MCA16"
                      ? item.total4
                      : item.subject5 === "20MCA16"
                      ? item.total5
                      : item.subject6 === "20MCA16"
                      ? item.total6
                      : item.subject7 === "20MCA16"
                      ? item.total7
                      : item.subject8 === "20MCA16"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA17"
                      ? item.internal1
                      : item.subject2 === "20MCA17"
                      ? item.internal2
                      : item.subject3 === "20MCA17"
                      ? item.internal3
                      : item.subject4 === "20MCA17"
                      ? item.internal4
                      : item.subject5 === "20MCA17"
                      ? item.internal5
                      : item.subject6 === "20MCA17"
                      ? item.internal6
                      : item.subject7 === "20MCA17"
                      ? item.internal7
                      : item.subject8 === "20MCA17"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA17"
                      ? item.external1
                      : item.subject2 === "20MCA17"
                      ? item.external2
                      : item.subject3 === "20MCA17"
                      ? item.external3
                      : item.subject4 === "20MCA17"
                      ? item.external4
                      : item.subject5 === "20MCA17"
                      ? item.external5
                      : item.subject6 === "20MCA17"
                      ? item.external6
                      : item.subject7 === "20MCA17"
                      ? item.external7
                      : item.subject8 === "20MCA17"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA17"
                      ? item.total1
                      : item.subject2 === "20MCA17"
                      ? item.total2
                      : item.subject3 === "20MCA17"
                      ? item.total3
                      : item.subject4 === "20MCA17"
                      ? item.total4
                      : item.subject5 === "20MCA17"
                      ? item.total5
                      : item.subject6 === "20MCA17"
                      ? item.total6
                      : item.subject7 === "20MCA17"
                      ? item.total7
                      : item.subject8 === "20MCA17"
                      ? item.total8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA18"
                      ? item.internal1
                      : item.subject2 === "20MCA18"
                      ? item.internal2
                      : item.subject3 === "20MCA18"
                      ? item.internal3
                      : item.subject4 === "20MCA18"
                      ? item.internal4
                      : item.subject5 === "20MCA18"
                      ? item.internal5
                      : item.subject6 === "20MCA18"
                      ? item.internal6
                      : item.subject7 === "20MCA18"
                      ? item.internal7
                      : item.subject8 === "20MCA18"
                      ? item.internal8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA18"
                      ? item.external1
                      : item.subject2 === "20MCA18"
                      ? item.external2
                      : item.subject3 === "20MCA18"
                      ? item.external3
                      : item.subject4 === "20MCA18"
                      ? item.external4
                      : item.subject5 === "20MCA18"
                      ? item.external5
                      : item.subject6 === "20MCA18"
                      ? item.external6
                      : item.subject7 === "20MCA18"
                      ? item.external7
                      : item.subject8 === "20MCA18"
                      ? item.external8
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA18"
                      ? item.total1
                      : item.subject2 === "20MCA18"
                      ? item.total2
                      : item.subject3 === "20MCA18"
                      ? item.total3
                      : item.subject4 === "20MCA18"
                      ? item.total4
                      : item.subject5 === "20MCA18"
                      ? item.total5
                      : item.subject6 === "20MCA18"
                      ? item.total6
                      : item.subject7 === "20MCA18"
                      ? item.total7
                      : item.subject8 === "20MCA18"
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

export default FirstSemShow;
