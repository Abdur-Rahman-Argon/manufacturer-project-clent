import React from "react";

const Navbar = () => {
  const manuOption1 = (
    <>
      <li>
        <a>ShopNow</a>
      </li>
      {/* <li tabindex="0">
  <a>Parent</a>
  <ul class="p-2">
    <li>

    purchase;  Dashboard= My Orders, Add Review; Admin=Manage All Orders, Add A Product, Make Admin, Manage Products; login/SignUp MyProfile
      <a>Submenu 1</a>
    </li>
    <li>
      <a>Submenu 2</a>
    </li>
  </ul> 
</li>*/}
      <li>
        <a>purchase</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Admin</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>About-Us</a>
      </li>
    </>
  );
  const manuOptionProfile = (
    <>
      <li>
        <a href="/#">View profile</a>
      </li>
      <li>
        <a href="/#">Update profile </a>
      </li>
      <li>
        <a href="/#">View profile </a>
      </li>
      <li>
        <a href="/#"> LogOut</a>
      </li>
    </>
  );

  const manuOptionDropdown = (
    <>
      {manuOption1}

      <li class="dropdown dropdown-down dropdown-hover ">
        <label tabindex="0" class=" m-1">
          Profile
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu mt-11 sm:-mt-2 shadow w-52 -left-[12px] sm:-left-[205px]  bg-slate-200"
        >
          {manuOptionProfile}
        </ul>
      </li>
    </>
  );

  // const manuOption4 = <></>;

  return (
    <div class="navbar font-semibold bg-gray-100 px-5 sm:px-10 lg:px-20">
      {/*  */}
      <div class="navbar-start">
        <a href="/" class=" normal-case text-xl">
          Manufacturer Project
        </a>
      </div>

      {/*  */}
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-1 p-0">{manuOption1}</ul>
      </div>

      {/*  */}
      <div class="navbar-end">
        {/*  */}
        <div class=" hidden lg:flex dropdown dropdown-hover dropdown-end">
          <label tabindex="8" class="btn btn-ghost">
            Profile
          </label>
          <ul
            tabindex="8"
            class="menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {manuOptionProfile}
          </ul>
        </div>

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
              {manuOptionDropdown}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
