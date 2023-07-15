import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import FirstSem from "./Pages/FirstSem";
import SecondSem from "./Pages/SecondSem";
import ThirdSem from "./Pages/ThirdSem";
import FourthSem from "./Pages/FourthSem";
import Cgpa from "./Pages/Cgpa";
// import Dashboard from "./Pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import FirstSemShow from "./components/FirstSemShow";
import SecondSemShow from "./components/SecondSemShow";
import ThirdSemShow from "./components/ThirdSemShow";
import FourthSemShow from "./components/FourthSemShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/1stsem" element={<FirstSem />}></Route>
        <Route path="/2ndsem" element={<SecondSem />}></Route>
        <Route path="/3rdsem" element={<ThirdSem />}></Route>
        <Route path="/4thsem" element={<FourthSem />}></Route>
        <Route path="/cgpa" element={<Cgpa />}></Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/1stsem" element={<FirstSemShow />}></Route>
          <Route path="/dashboard/2ndsem" element={<SecondSemShow />}></Route>
          <Route path="/dashboard/3rdsem" element={<ThirdSemShow />}></Route>
          <Route path="/dashboard/4thsem" element={<FourthSemShow />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
