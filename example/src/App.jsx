import React from "react";
import { Routes, Route } from "react-router-dom";
import CourseIndex from "./component/CourseIndex";
import Cour02 from "./component/Cour02";
import Teaching from "./component/Teaching";
import Show from "./component/Showsss";

import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/cour" element={<CourseIndex />} />
        <Route path="/" element={<Cour02 />} />
        <Route path="/teaching/:id" element={<Teaching />} />
        <Route path="/show" element={<Show />} />

        {/* <Route path="/" element={<Teaching />} /> */}
      </Routes>
    </>
  );
};

export default App;
