import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer" class=" rounded-r-lg  px-2 pt-4 bg-slate-300 ">
            <i class="fa-solid fa-angle-right font-semibold text-3xl"></i>
          </label>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
