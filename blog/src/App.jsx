import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-out" element={<Signout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
