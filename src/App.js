import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Signup from "./components/pages/Signup";
import NavbarLayout from "./components/navbar/NavbarLayout";
import Home from "./components/pages/Home";
import VenuesOverview from "./components/pages/VenuesOverview";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route index element={<Home />} />
            <Route path="/venues" element={<VenuesOverview />} />
            <Route path="/artists" element={<VenuesOverview />} />
          </Route>
          <Route path="/venues/login" element={<Login type={"venues"} />} />
          <Route path="/venues/signup" element={<Signup type={"venues"} />} />
          <Route path="/artists/login" element={<Login type={"artists"} />} />
          <Route path="/artists/signup" element={<Signup type={"artists"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
