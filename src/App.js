import { FullProfile, NavBar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff" element={<FullProfile />} />
      </Routes>
    </Router>
  );
};
export default App;
