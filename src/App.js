import { FullProfile, NavBar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home, Login, Staff } from "./pages";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/profile" element={<FullProfile />} />
      </Routes>
    </Router>
  );
};
export default App;
