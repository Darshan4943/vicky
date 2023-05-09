import React from "react";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Who are you?</h1>
      <Link to="/adminLogin">
        <button>Admin</button>
      </Link>
      <Link to="/studentLogin">
        <button>Student</button>
      </Link>
      {/* <button>Student</button> */}
    </div>
  );
};

export default App;
