import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Task from "./components/Task";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
