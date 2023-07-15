import { useEffect, useState } from "react";
import axios from "axios";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";

const SecondSemShow = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const apiUrl = "https://sgpacalculatorbackend.onrender.com/api/secondsem";

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
      "20MCA21 - (DBMS)",
      "",
      "",
      "20MCA22 - (JAVA)",
      "",
      "",
      "20MCA23 - (WEB)",
      "",
      "",
      "20MCA24 - (SE)",
      "",
      "",
      "20MCA251 - (CS)",
      "",
      "20MCA255 - (OT)",
      "",
      "",
      "20MCA262 - (AI)",
      "",
      "",
      "20MCA263 - (MAD)",
      "",
      "",
      "20MCA27 - (DBMS LAB)",
      "",
      "",
      "20MCA28 - (JAVA LAB)",
      "",
      "",
      "20MCA28 - (WEB LAB)",
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
                  20MCA21 - (DBMS)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA22 - (JAVA)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA23 - (WEB)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA24 - (SE)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA251 - (CS)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA255 - (OT)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA262 - (AI)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA263 - (MAD)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA27 - (DBMS LAB)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA28 - (JAVA LAB)
                </th>
                <th className="p-4 text-xs text-gray-950" colSpan="3">
                  20MCA29 - (WEB LAB)
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
                    {item.subject1 === "20MCA21"
                      ? item.internal1
                      : item.subject2 === "20MCA21"
                      ? item.internal2
                      : item.subject3 === "20MCA21"
                      ? item.internal3
                      : item.subject4 === "20MCA21"
                      ? item.internal4
                      : item.subject5 === "20MCA21"
                      ? item.internal5
                      : item.subject6 === "20MCA21"
                      ? item.internal6
                      : item.subject7 === "20MCA21"
                      ? item.internal7
                      : item.subject8 === "20MCA21"
                      ? item.internal8
                      : item.subject9 === "20MCA21"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA21"
                      ? item.external1
                      : item.subject2 === "20MCA21"
                      ? item.external2
                      : item.subject3 === "20MCA21"
                      ? item.external3
                      : item.subject4 === "20MCA21"
                      ? item.external4
                      : item.subject5 === "20MCA21"
                      ? item.external5
                      : item.subject6 === "20MCA21"
                      ? item.external6
                      : item.subject7 === "20MCA21"
                      ? item.external7
                      : item.subject8 === "20MCA21"
                      ? item.external8
                      : item.subject9 === "20MCA21"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA21"
                      ? item.total1
                      : item.subject2 === "20MCA21"
                      ? item.total2
                      : item.subject3 === "20MCA21"
                      ? item.total3
                      : item.subject4 === "20MCA21"
                      ? item.total4
                      : item.subject5 === "20MCA21"
                      ? item.total5
                      : item.subject6 === "20MCA21"
                      ? item.total6
                      : item.subject7 === "20MCA21"
                      ? item.total7
                      : item.subject8 === "20MCA21"
                      ? item.total8
                      : item.subject9 === "20MCA21"
                      ? item.total9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA22"
                      ? item.internal1
                      : item.subject2 === "20MCA22"
                      ? item.internal2
                      : item.subject3 === "20MCA22"
                      ? item.internal3
                      : item.subject4 === "20MCA22"
                      ? item.internal4
                      : item.subject5 === "20MCA22"
                      ? item.internal5
                      : item.subject6 === "20MCA22"
                      ? item.internal6
                      : item.subject7 === "20MCA22"
                      ? item.internal7
                      : item.subject8 === "20MCA22"
                      ? item.internal8
                      : item.subject9 === "20MCA22"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA22"
                      ? item.external1
                      : item.subject2 === "20MCA22"
                      ? item.external2
                      : item.subject3 === "20MCA22"
                      ? item.external3
                      : item.subject4 === "20MCA22"
                      ? item.external4
                      : item.subject5 === "20MCA22"
                      ? item.external5
                      : item.subject6 === "20MCA22"
                      ? item.external6
                      : item.subject7 === "20MCA22"
                      ? item.external7
                      : item.subject8 === "20MCA22"
                      ? item.external8
                      : item.subject9 === "20MCA22"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA22"
                      ? item.total1
                      : item.subject2 === "20MCA22"
                      ? item.total2
                      : item.subject3 === "20MCA22"
                      ? item.total3
                      : item.subject4 === "20MCA22"
                      ? item.total4
                      : item.subject5 === "20MCA22"
                      ? item.total5
                      : item.subject6 === "20MCA22"
                      ? item.total6
                      : item.subject7 === "20MCA22"
                      ? item.total7
                      : item.subject8 === "20MCA22"
                      ? item.total8
                      : item.subject9 === "20MCA22"
                      ? item.total9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA23"
                      ? item.internal1
                      : item.subject2 === "20MCA23"
                      ? item.internal2
                      : item.subject3 === "20MCA23"
                      ? item.internal3
                      : item.subject4 === "20MCA23"
                      ? item.internal4
                      : item.subject5 === "20MCA23"
                      ? item.internal5
                      : item.subject6 === "20MCA23"
                      ? item.internal6
                      : item.subject7 === "20MCA23"
                      ? item.internal7
                      : item.subject8 === "20MCA23"
                      ? item.internal8
                      : item.subject9 === "20MCA23"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA23"
                      ? item.external1
                      : item.subject2 === "20MCA23"
                      ? item.external2
                      : item.subject3 === "20MCA23"
                      ? item.external3
                      : item.subject4 === "20MCA23"
                      ? item.external4
                      : item.subject5 === "20MCA23"
                      ? item.external5
                      : item.subject6 === "20MCA23"
                      ? item.external6
                      : item.subject7 === "20MCA23"
                      ? item.external7
                      : item.subject8 === "20MCA23"
                      ? item.external8
                      : item.subject9 === "20MCA23"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA23"
                      ? item.total1
                      : item.subject2 === "20MCA23"
                      ? item.total2
                      : item.subject3 === "20MCA23"
                      ? item.total3
                      : item.subject4 === "20MCA23"
                      ? item.total4
                      : item.subject5 === "20MCA23"
                      ? item.total5
                      : item.subject6 === "20MCA23"
                      ? item.total6
                      : item.subject7 === "20MCA23"
                      ? item.total7
                      : item.subject8 === "20MCA23"
                      ? item.total8
                      : item.subject9 === "20MCA23"
                      ? item.total9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA24"
                      ? item.internal1
                      : item.subject2 === "20MCA24"
                      ? item.internal2
                      : item.subject3 === "20MCA24"
                      ? item.internal3
                      : item.subject4 === "20MCA24"
                      ? item.internal4
                      : item.subject5 === "20MCA24"
                      ? item.internal5
                      : item.subject6 === "20MCA24"
                      ? item.internal6
                      : item.subject7 === "20MCA24"
                      ? item.internal7
                      : item.subject8 === "20MCA24"
                      ? item.internal8
                      : item.subject9 === "20MCA24"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA24"
                      ? item.external1
                      : item.subject2 === "20MCA24"
                      ? item.external2
                      : item.subject3 === "20MCA24"
                      ? item.external3
                      : item.subject4 === "20MCA24"
                      ? item.external4
                      : item.subject5 === "20MCA24"
                      ? item.external5
                      : item.subject6 === "20MCA24"
                      ? item.external6
                      : item.subject7 === "20MCA24"
                      ? item.external7
                      : item.subject8 === "20MCA24"
                      ? item.external8
                      : item.subject9 === "20MCA24"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA24"
                      ? item.total1
                      : item.subject2 === "20MCA24"
                      ? item.total2
                      : item.subject3 === "20MCA24"
                      ? item.total3
                      : item.subject4 === "20MCA24"
                      ? item.total4
                      : item.subject5 === "20MCA24"
                      ? item.total5
                      : item.subject6 === "20MCA24"
                      ? item.total6
                      : item.subject7 === "20MCA24"
                      ? item.total7
                      : item.subject8 === "20MCA24"
                      ? item.total8
                      : item.subject9 === "20MCA24"
                      ? item.total9
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA251"
                      ? item.internal1
                      : item.subject2 === "20MCA251"
                      ? item.internal2
                      : item.subject3 === "20MCA251"
                      ? item.internal3
                      : item.subject4 === "20MCA251"
                      ? item.internal4
                      : item.subject5 === "20MCA251"
                      ? item.internal5
                      : item.subject6 === "20MCA251"
                      ? item.internal6
                      : item.subject7 === "20MCA251"
                      ? item.internal7
                      : item.subject8 === "20MCA251"
                      ? item.internal8
                      : item.subject9 === "20MCA251"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA251"
                      ? item.external1
                      : item.subject2 === "20MCA251"
                      ? item.external2
                      : item.subject3 === "20MCA251"
                      ? item.external3
                      : item.subject4 === "20MCA251"
                      ? item.external4
                      : item.subject5 === "20MCA251"
                      ? item.external5
                      : item.subject6 === "20MCA251"
                      ? item.external6
                      : item.subject7 === "20MCA251"
                      ? item.external7
                      : item.subject8 === "20MCA251"
                      ? item.external8
                      : item.subject9 === "20MCA251"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA251"
                      ? item.total1
                      : item.subject2 === "20MCA251"
                      ? item.total2
                      : item.subject3 === "20MCA251"
                      ? item.total3
                      : item.subject4 === "20MCA251"
                      ? item.total4
                      : item.subject5 === "20MCA251"
                      ? item.total5
                      : item.subject6 === "20MCA251"
                      ? item.total6
                      : item.subject7 === "20MCA251"
                      ? item.total7
                      : item.subject8 === "20MCA251"
                      ? item.total8
                      : item.subject9 === "20MCA251"
                      ? item.total9
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA255"
                      ? item.internal1
                      : item.subject2 === "20MCA255"
                      ? item.internal2
                      : item.subject3 === "20MCA255"
                      ? item.internal3
                      : item.subject4 === "20MCA255"
                      ? item.internal4
                      : item.subject5 === "20MCA255"
                      ? item.internal5
                      : item.subject6 === "20MCA255"
                      ? item.internal6
                      : item.subject7 === "20MCA255"
                      ? item.internal7
                      : item.subject8 === "20MCA255"
                      ? item.internal8
                      : item.subject9 === "20MCA255"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA255"
                      ? item.external1
                      : item.subject2 === "20MCA255"
                      ? item.external2
                      : item.subject3 === "20MCA255"
                      ? item.external3
                      : item.subject4 === "20MCA255"
                      ? item.external4
                      : item.subject5 === "20MCA255"
                      ? item.external5
                      : item.subject6 === "20MCA255"
                      ? item.external6
                      : item.subject7 === "20MCA255"
                      ? item.external7
                      : item.subject8 === "20MCA255"
                      ? item.external8
                      : item.subject9 === "20MCA255"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA255"
                      ? item.total1
                      : item.subject2 === "20MCA255"
                      ? item.total2
                      : item.subject3 === "20MCA255"
                      ? item.total3
                      : item.subject4 === "20MCA255"
                      ? item.total4
                      : item.subject5 === "20MCA255"
                      ? item.total5
                      : item.subject6 === "20MCA255"
                      ? item.total6
                      : item.subject7 === "20MCA255"
                      ? item.total7
                      : item.subject8 === "20MCA255"
                      ? item.total8
                      : item.subject9 === "20MCA255"
                      ? item.total9
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA262"
                      ? item.internal1
                      : item.subject2 === "20MCA262"
                      ? item.internal2
                      : item.subject3 === "20MCA262"
                      ? item.internal3
                      : item.subject4 === "20MCA262"
                      ? item.internal4
                      : item.subject5 === "20MCA262"
                      ? item.internal5
                      : item.subject6 === "20MCA262"
                      ? item.internal6
                      : item.subject7 === "20MCA262"
                      ? item.internal7
                      : item.subject8 === "20MCA262"
                      ? item.internal8
                      : item.subject9 === "20MCA262"
                      ? item.internal9
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA262"
                      ? item.external1
                      : item.subject2 === "20MCA262"
                      ? item.external2
                      : item.subject3 === "20MCA262"
                      ? item.external3
                      : item.subject4 === "20MCA262"
                      ? item.external4
                      : item.subject5 === "20MCA262"
                      ? item.external5
                      : item.subject6 === "20MCA262"
                      ? item.external6
                      : item.subject7 === "20MCA262"
                      ? item.external7
                      : item.subject8 === "20MCA262"
                      ? item.external8
                      : item.subject9 === "20MCA262"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA262"
                      ? item.total1
                      : item.subject2 === "20MCA262"
                      ? item.total2
                      : item.subject3 === "20MCA262"
                      ? item.total3
                      : item.subject4 === "20MCA262"
                      ? item.total4
                      : item.subject5 === "20MCA262"
                      ? item.total5
                      : item.subject6 === "20MCA262"
                      ? item.total6
                      : item.subject7 === "20MCA262"
                      ? item.total7
                      : item.subject8 === "20MCA262"
                      ? item.total8
                      : item.subject9 === "20MCA262"
                      ? item.total9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA263"
                      ? item.internal1
                      : item.subject2 === "20MCA263"
                      ? item.internal2
                      : item.subject3 === "20MCA263"
                      ? item.internal3
                      : item.subject4 === "20MCA263"
                      ? item.internal4
                      : item.subject5 === "20MCA263"
                      ? item.internal5
                      : item.subject6 === "20MCA263"
                      ? item.internal6
                      : item.subject7 === "20MCA263"
                      ? item.internal7
                      : item.subject8 === "20MCA263"
                      ? item.internal8
                      : item.subject9 === "20MCA263"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA263"
                      ? item.external1
                      : item.subject2 === "20MCA263"
                      ? item.external2
                      : item.subject3 === "20MCA263"
                      ? item.external3
                      : item.subject4 === "20MCA263"
                      ? item.external4
                      : item.subject5 === "20MCA263"
                      ? item.external5
                      : item.subject6 === "20MCA263"
                      ? item.external6
                      : item.subject7 === "20MCA263"
                      ? item.external7
                      : item.subject8 === "20MCA263"
                      ? item.external8
                      : item.subject9 === "20MCA263"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA263"
                      ? item.total1
                      : item.subject2 === "20MCA263"
                      ? item.total2
                      : item.subject3 === "20MCA263"
                      ? item.total3
                      : item.subject4 === "20MCA263"
                      ? item.total4
                      : item.subject5 === "20MCA263"
                      ? item.total5
                      : item.subject6 === "20MCA263"
                      ? item.total6
                      : item.subject7 === "20MCA263"
                      ? item.total7
                      : item.subject8 === "20MCA263"
                      ? item.total8
                      : item.subject9 === "20MCA263"
                      ? item.total9
                      : "-"}
                  </td>

                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA27"
                      ? item.internal1
                      : item.subject2 === "20MCA27"
                      ? item.internal2
                      : item.subject3 === "20MCA27"
                      ? item.internal3
                      : item.subject4 === "20MCA27"
                      ? item.internal4
                      : item.subject5 === "20MCA27"
                      ? item.internal5
                      : item.subject6 === "20MCA27"
                      ? item.internal6
                      : item.subject7 === "20MCA27"
                      ? item.internal7
                      : item.subject8 === "20MCA27"
                      ? item.internal8
                      : item.subject9 === "20MCA27"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA27"
                      ? item.external1
                      : item.subject2 === "20MCA27"
                      ? item.external2
                      : item.subject3 === "20MCA27"
                      ? item.external3
                      : item.subject4 === "20MCA27"
                      ? item.external4
                      : item.subject5 === "20MCA27"
                      ? item.external5
                      : item.subject6 === "20MCA27"
                      ? item.external6
                      : item.subject7 === "20MCA27"
                      ? item.external7
                      : item.subject8 === "20MCA27"
                      ? item.external8
                      : item.subject9 === "20MCA27"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA27"
                      ? item.total1
                      : item.subject2 === "20MCA27"
                      ? item.total2
                      : item.subject3 === "20MCA27"
                      ? item.total3
                      : item.subject4 === "20MCA27"
                      ? item.total4
                      : item.subject5 === "20MCA27"
                      ? item.total5
                      : item.subject6 === "20MCA27"
                      ? item.total6
                      : item.subject7 === "20MCA27"
                      ? item.total7
                      : item.subject8 === "20MCA27"
                      ? item.total8
                      : item.subject9 === "20MCA27"
                      ? item.total9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA28"
                      ? item.internal1
                      : item.subject2 === "20MCA28"
                      ? item.internal2
                      : item.subject3 === "20MCA28"
                      ? item.internal3
                      : item.subject4 === "20MCA28"
                      ? item.internal4
                      : item.subject5 === "20MCA28"
                      ? item.internal5
                      : item.subject6 === "20MCA28"
                      ? item.internal6
                      : item.subject7 === "20MCA28"
                      ? item.internal7
                      : item.subject8 === "20MCA28"
                      ? item.internal8
                      : item.subject9 === "20MCA28"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA28"
                      ? item.external1
                      : item.subject2 === "20MCA28"
                      ? item.external2
                      : item.subject3 === "20MCA28"
                      ? item.external3
                      : item.subject4 === "20MCA28"
                      ? item.external4
                      : item.subject5 === "20MCA28"
                      ? item.external5
                      : item.subject6 === "20MCA28"
                      ? item.external6
                      : item.subject7 === "20MCA28"
                      ? item.external7
                      : item.subject8 === "20MCA28"
                      ? item.external8
                      : item.subject9 === "20MCA28"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA28"
                      ? item.total1
                      : item.subject2 === "20MCA28"
                      ? item.total2
                      : item.subject3 === "20MCA28"
                      ? item.total3
                      : item.subject4 === "20MCA28"
                      ? item.total4
                      : item.subject5 === "20MCA28"
                      ? item.total5
                      : item.subject6 === "20MCA28"
                      ? item.total6
                      : item.subject7 === "20MCA28"
                      ? item.total7
                      : item.subject8 === "20MCA28"
                      ? item.total8
                      : item.subject9 === "20MCA28"
                      ? item.total9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA29"
                      ? item.internal1
                      : item.subject2 === "20MCA29"
                      ? item.internal2
                      : item.subject3 === "20MCA29"
                      ? item.internal3
                      : item.subject4 === "20MCA29"
                      ? item.internal4
                      : item.subject5 === "20MCA29"
                      ? item.internal5
                      : item.subject6 === "20MCA29"
                      ? item.internal6
                      : item.subject7 === "20MCA29"
                      ? item.internal7
                      : item.subject8 === "20MCA29"
                      ? item.internal8
                      : item.subject9 === "20MCA29"
                      ? item.internal9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA29"
                      ? item.external1
                      : item.subject2 === "20MCA29"
                      ? item.external2
                      : item.subject3 === "20MCA29"
                      ? item.external3
                      : item.subject4 === "20MCA29"
                      ? item.external4
                      : item.subject5 === "20MCA29"
                      ? item.external5
                      : item.subject6 === "20MCA29"
                      ? item.external6
                      : item.subject7 === "20MCA29"
                      ? item.external7
                      : item.subject8 === "20MCA29"
                      ? item.external8
                      : item.subject9 === "20MCA29"
                      ? item.external9
                      : "-"}
                  </td>
                  <td className="p-4 text-xs">
                    {item.subject1 === "20MCA29"
                      ? item.total1
                      : item.subject2 === "20MCA29"
                      ? item.total2
                      : item.subject3 === "20MCA29"
                      ? item.total3
                      : item.subject4 === "20MCA29"
                      ? item.total4
                      : item.subject5 === "20MCA29"
                      ? item.total5
                      : item.subject6 === "20MCA29"
                      ? item.total6
                      : item.subject7 === "20MCA29"
                      ? item.total7
                      : item.subject8 === "20MCA29"
                      ? item.total8
                      : item.subject9 === "20MCA29"
                      ? item.total9
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

export default SecondSemShow;
