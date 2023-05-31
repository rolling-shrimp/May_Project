import { Routes, Route, useRef } from "react-router-dom";
import Index from "./component/homepage";
import Index2 from "./component/test";
import CourseIndex from "./component/CourseIndex";
import Cour02 from "./component/Cour02";
import Teaching from "./component/Teaching";
import UserA from "./component/userA";
import UserB from "./component/userB";
import UserC from "./component/userC";
import UserD from "./component/userD";
import ShoppingCart from "./component/shoppingCart";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./component/userPage.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/number2" element={<Index2 />} />
        <Route path="/cour" element={<CourseIndex />} />
        <Route path="/cour02" element={<Cour02 />} />
        <Route path="/teaching/:id" element={<Teaching />} />

        <Route path="/userA" element={<UserA />} exact />
        <Route path="/userB" element={<UserB />} exact />
        <Route path="/userC" element={<UserC />} exact />
        <Route path="/userD" element={<UserD />} exact />
        <Route path="/shopping" element={<ShoppingCart />} exact />
      </Routes>
    </div>
  );
}

export default App;
