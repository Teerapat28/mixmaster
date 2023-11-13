import React from "react";
import { Link , Outlet} from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet/>
    </div>
  );
};

export default HomeLayout;
