import React, { useState } from "react";
import { links } from "./Links";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-yellow text-charcole px-5 flex items-center justify-around gap-3">
      {/* --------------logo------------------- */}
      <div className="">
        <span className="font-logo text-5xl">Fashion</span>
      </div>
      {/* ----------------Links--------------------- */}
      {/* <div className="  px-10">
        <ul className="flex gap-8 ">
          {" "}
          {links.map((menu, i) => {
            return (
              <li
                key={i}
                className={`font-paragraph text-2xl flex gap-2 items-center`}
              >
                {menu.name}
                <RiArrowDropDownLine
                  className={`cursor-pointer ${!open && "rotate-180"}`}
                  onMouseEnter={() => setOpen(!open)}
                />
              </li>
            );
          })}
        </ul>
      </div> */}
      <NavLinks />
      <div className="flex items-center gap-2 ">
        {/* ---------------------searchbar---------- */}
        <div className="relative flex items-center">
          <input
            placeholder="search by product "
            className="font-thin py-1 pl-8 rounded-md bg-gray-100 text-base border border-charcole"
          />
          <CiSearch className="absolute left-2" />
        </div>
        <span className="border-l h-6 border-charcole"></span>
        <span className=" font-paragraph cursor-pointer mr-2">Login</span>
        <div className=" cursor-pointer mr-2">
          <BsBag />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
