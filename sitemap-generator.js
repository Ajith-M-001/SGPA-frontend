import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

import MainPage from "./Pages/MainPage";
import FirstSem from "./Pages/FirstSem";
import SecondSem from "./Pages/SecondSem";
import ThirdSem from "./Pages/ThirdSem";
import FourthSem from "./Pages/FourthSem";
import Cgpa from "./Pages/Cgpa";
import DashboardLayout from "./components/DashboardLayout";
import FirstSemShow from "./components/FirstSemShow";
import SecondSemShow from "./components/SecondSemShow";
import ThirdSemShow from "./components/ThirdSemShow";
import FourthSemShow from "./components/FourthSemShow";

function App() {
  useEffect(() => {
    const generateSitemap = async () => {
      try {
        const hostname = "https://sgpa-calculator-by-ajith.netlify.app/"; // Replace with your website's URL
        const sitemap = new SitemapStream({ hostname });
        const pipeline = sitemap.pipe(
          createWriteStream("./public/sitemap.xml")
        ); // Output path for the sitemap file

        const routes = [
          { path: "/", name: "Home" },
          { path: "/1stsem", name: "First Semester" },
          { path: "/2ndsem", name: "Second Semester" },
          { path: "/3rdsem", name: "Third Semester" },
          { path: "/4thsem", name: "Fourth Semester" },
          { path: "/cgpa", name: "CGPA" },
          { path: "/dashboard", name: "Dashboard" },
          { path: "/dashboard/1stsem", name: "First Semester Dashboard" },
          { path: "/dashboard/2ndsem", name: "Second Semester Dashboard" },
          { path: "/dashboard/3rdsem", name: "Third Semester Dashboard" },
          { path: "/dashboard/4thsem", name: "Fourth Semester Dashboard" },
        ];

        for (const route of routes) {
          const routeConfig = {
            url: route.path,
            changefreq: "never", // Adjust as needed
            priority: 0, // Adjust as needed
          };

          sitemap.write(routeConfig);
        }

        sitemap.end();
        await streamToPromise(pipeline);
        console.log("Sitemap generated successfully!");
      } catch (error) {
        console.error("Error generating sitemap:", error);
      }
    };

    generateSitemap();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/1stsem" element={<FirstSem />} />
        <Route path="/2ndsem" element={<SecondSem />} />
        <Route path="/3rdsem" element={<ThirdSem />} />
        <Route path="/4thsem" element={<FourthSem />} />
        <Route path="/cgpa" element={<Cgpa />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/1stsem" element={<FirstSemShow />} />
          <Route path="/dashboard/2ndsem" element={<SecondSemShow />} />
          <Route path="/dashboard/3rdsem" element={<ThirdSemShow />} />
          <Route path="/dashboard/4thsem" element={<FourthSemShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
