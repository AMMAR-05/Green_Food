import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-10/12 m-auto text-xs sm:text-lg bg-[#34c56ce3] text-white rounded">
      <div className="flex justify-around p-2">
        <div className="flex">
          <Link className="mr-5 " to="/about-us">
            About us
          </Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* <div className="flex">
          <Link to="/">Icon</Link>
          <Link className="mx-2 " to="/">
            Icon
          </Link>
          <Link to="/">Icon</Link>
        </div> */}
      </div>
      <p className="text-center">&copy; 2022 Resto Corporation</p>
    </footer>
  );
}

export default Footer;
