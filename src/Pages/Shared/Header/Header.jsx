import React, { useContext } from "react";
import logo from "../../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully log out!",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <li className="font-semibold me-5">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold me-5">
        <Link to="/services">Services</Link>
      </li>
      <li className="font-semibold me-5">
        <Link to="/about">About</Link>
      </li>
      <div className="flex items-center">
        <li className="font-semibold me-5">
          <Link to="/orders">Orders</Link>
        </li>
        <li className="font-semibold me-5">
          <Link to="/signup">Sign up</Link>
        </li>
      </div>
      {user?.uid ? (
        <div>
          <Link to="/login" className="btn text-xl">
            <button onClick={handleLogout} className="">
              Log Out
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className="btn text-xl"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              color: "black",
            }}
          >
            <button className="">Login</button>
          </Link>

          <Link
            className="btn text-xl"
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              color: "black",
            }}
            to="/signup"
          >
            <button>Sign up</button>
          </Link>
        </div>
      )}
      <div className="flex items-center gap-2 ms-4">
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            style={{ height: "40px" }}
            title={user?.displayName}
          ></img>
        ) : (
          <FaUserAlt className="bg-black-600 text-xl rounded-full"></FaUserAlt>
        )}
        <span className="me-3 ">
          <b>{user?.email}</b>
        </span>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow mb-4 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className="w-34 h-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center font-bold text-xl">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;
