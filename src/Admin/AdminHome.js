import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <Link to="/userScore">
        <button>veiw scores</button>
      </Link>
      <Link to="/admin">
        <button>create Questions</button>
      </Link>
    </div>
  );
};

export default AdminHome;
