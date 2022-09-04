import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import logo from "./../../../images/ADM-Logo.png";
import profile from "./../../../images/profileimg.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuOption1 = (
    <>
      <li>
        <Link to="/">ShopNow</Link>
      </li>

      {/* <li tabindex="0">
  <Link to='/'>Parent</Link>
  <ul class="p-2">
    <li>

    purchase;  Dashboard= My Orders, Add Review; Admin=Manage All Orders, Add A Product, Make Admin, Manage Products; login/SignUp MyProfile
      <Link to='/'>Submenu 1</Link>
    </li>
    <li>
      <Link to='/'>Submenu 2</Link>
    </li>
  </ul> 
</li>*/}

      <li>
        <Link to="/">Purchase</Link>
      </li>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/">Admin</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
      <li>
        <Link to="/">About-Us</Link>
      </li>
    </>
  );
  const menuOptionProfile = (
    <>
      <li>
        <Link to="/" href="/#">
          View profile
        </Link>
      </li>
      <li>
        <Link to="/" href="/#">
          Update profile
        </Link>
      </li>
      <li>
        <Link to="/" href="/#">
          My Orders
        </Link>
      </li>
      <li>
        <button onClick={logout} className="">
          LogOut
        </button>
      </li>
    </>
  );

  const menuOptionDropdown = (
    <>
      {menuOption1}

      <li class="dropdown dropdown-down dropdown-hover ">
        <label tabindex="0" class=" m-1">
          <img src={profile} className="rounded-full" alt="" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu mt-11 sm:-mt-2 shadow w-52 -left-[12px] sm:-left-[205px]  bg-slate-200"
        >
          {menuOptionProfile}
        </ul>
      </li>
    </>
  );

  // const menuOption4 = <></>;

  return (
    <div class="navbar font-semibold text-black bg-yellow-300 px-5 sm:px-10 lg:px-20">
      <div class="navbar-start">
        <Link to="/" href="/" class=" flex items-end normal-case text-xl">
          <img src={logo} alt="" className="w-16" />
          <span className=" hover:text-green-700 text-green-600 uppercase -ml-[7px] text-[14px] font-bold  -mb-[6px]">
            Industries Ltd.
          </span>
        </Link>
      </div>

      {/*  */}
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-1 p-0">{menuOption1}</ul>
      </div>

      {/*  */}
      <div class="navbar-end">
        {user ? (
          <>
            <div class=" hidden lg:flex dropdown dropdown-hover dropdown-end">
              <label
                tabindex="8"
                class=" btn btn-ghost hover:bg-slate-300 pl-14"
              >
                <img src={profile} className="rounded-full w-7" alt="" />
              </label>
              <ul
                tabindex="8"
                class="menu menu-compact dropdown-content mt-12 p-2 shadow bg-slate-200 rounded-box w-52 gap-2"
              >
                {menuOptionProfile}
              </ul>
            </div>
          </>
        ) : (
          <>
            <button className=" text-green-600 hover:text-green-700">
              <Link to="/login"> LogIn/Register</Link>
            </button>
          </>
        )}

        {/*  */}
        <div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              menu
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
            >
              {menuOptionDropdown}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
