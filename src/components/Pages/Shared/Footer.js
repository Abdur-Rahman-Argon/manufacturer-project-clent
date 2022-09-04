import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../images/ADM-Logo.png";
import google from "./../../../images/google.png";
import facebook from "./../../../images/facebook.png";
import github from "./../../../images/github.png";
import twitter from "./../../../images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#222525]  mt-20 ">
      <footer class="footer p-10 text-white">
        <div>
          <div className="">
            <Link to="/#" class="flex items-end normal-case  text-xl">
              <img src={logo} alt="" className="w-20" />

              <span className=" hover:text-green-700 text-green-600  -ml-2 text-[20px] font-bold -mb-[2px]">
                Industries Ltd.
              </span>
            </Link>
          </div>
          <p>
            <br />
            Providing reliable tech since 1992
          </p>
        </div>

        <div className=" font-semibold text-white">
          <span class="footer-title">Services</span>
          <a class="link link-hover">Shop Now</a>
          <a class="link link-hover">All Product</a>
          <a class="link link-hover">Your Order</a>
          <a class="link link-hover">History</a>
        </div>

        <div className=" font-semibold">
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Blogs</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <div>
            <span class="footer-title ">Newsletter</span>
            <div class="form-control w-80 mt-3">
              <div class="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  class="input input-bordered w-full pr-16 focus:outline-none"
                />
                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <span class="footer-title mt-5">Follow Us</span>

          <div className=" text-center flex items-center  gap-8 my-1">
            <a href="/">
              <img src={google} alt="" className=" w-8" />
            </a>

            <a href="/" className=" ">
              <img src={facebook} alt="" className=" w-8" />
            </a>

            <a href="/" className=" ">
              <img src={twitter} alt="" className=" w-8" />
            </a>

            <a href="/" className=" bg-white w-8 rounded-full overflow-hidden ">
              <img src={github} alt="" className=" w-full scale-110  " />
            </a>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
