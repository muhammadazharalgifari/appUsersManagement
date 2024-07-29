import React from "react";
import { NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";

const HomeScreen = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-400 text-white">
      <h1 className="text-4xl font-thin mb-8 text-center select-none">
        Welcome to Users Management.
      </h1>
      <div className="flex gap-5">
        <NavLink to="/listusers">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 flex items-center gap-3">
            <FaListUl className="text-xl" />
            View Users List
          </button>
        </NavLink>
        <NavLink to="/addusers">
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-300 flex items-center gap-3">
            <FaRegAddressBook className="text-2xl" />
            Add New User
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeScreen;
