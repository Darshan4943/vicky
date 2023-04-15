import React from "react";
import { Link } from "react-router-dom";
import "./ass8.css";
const Navbar = () => {
  return (
    <>
      <nav>
       
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/create">Create Note</Link>
        </button>
      </nav>
      
    </>
  );
};

export default Navbar;