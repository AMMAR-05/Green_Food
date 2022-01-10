import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";

function Header(props) {
  const [isclose, setIsClose] = useState(false);

  const burgerhandler = () => {
    setIsClose(!isclose);
    console.log(isclose);
  };

  const burgerStatus = isclose ? (
    <XIcon className="w-7 h-7 cursor-pointer bg-black text-white" />
  ) : (
    <MenuIcon className="w-7 h-7 cursor-pointer " />
  );

  return (
    <header className="pt-5">
      <div
        className={
          "h-14 w-10/12 m-auto flex justify-around items-center bg-[#34c56ce3] text-black rounded"
        }
      >
        <h2 className="text-sm sm:text-lg text-white">Vegetarian Food</h2>
        <Link to="/">
          <h1 className="text-sm sm:text-lg text-white">Resto</h1>
        </Link>

        <CartButton onOpenModal={props.onOpenModal} />
        <div className="bg-white text-black" onClick={burgerhandler}>
          {burgerStatus}
        </div>
      </div>
      <Navbar isclose={isclose} />
    </header>
  );
}

export default Header;
