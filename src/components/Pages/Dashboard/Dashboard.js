import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          {/* <!-- Page content here --> */}
          {/* <h1 className=" my-0 text-center font-semibold text-2xl">
            My Dashboard
          </h1> */}
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content font-semibold">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">MyOrder</Link>
            </li>
            <li className="my-2">
              <Link to="/dashboard/addReview">Add review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
