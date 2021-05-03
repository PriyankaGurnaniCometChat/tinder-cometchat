import React from "react";

export default function Footer() {
  return <></>;
  return (
    <footer className="w-full flex flex-col relative">
      <div className="bg-gray-700 w-full flex justify-center items-center mx-auto px-2 py-1 md:py-2">
        <a href="#" className="text-white text-base leading-4 text-center">
          Back to top
        </a>
      </div>
      <div className="bg-gray-800 w-full flex flex-col text-center md:text-left md:flex-row justify-center md:justify-between items-center md:items-start mx-auto px-2 md:px-48 lg:px-96 py-4 md:py-10">
        <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">Get to Know Us</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Careers</a>
            </li>
            <li className="leading-5">
              <a href="#">Blog</a>
            </li>
            <li className="leading-5">
              <a href="#">About Amazon</a>
            </li>
            <li className="leading-5">
              <a href="#">Sustainability</a>
            </li>
            <li className="leading-5">
              <a href="#">Investor Relations</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Devices</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Tours</a>
            </li>
          </ul>
        </section>
        <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">Make Money with Us</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Sell products on Amazon</a>
            </li>
            <li className="leading-5">
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li className="leading-5">
              <a href="#">Become an Affiliate</a>
            </li>
            <li className="leading-5">
              <a href="#">Advertise Your Products</a>
            </li>
            <li className="leading-5">
              <a href="#">Self-publish with Us</a>
            </li>
            <li className="leading-5">
              <a href="#">Host an Amazon Hub</a>
            </li>
          </ul>
        </section>
        <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">
            Amazon Payment Products
          </h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Amazon Business Card</a>
            </li>
            <li className="leading-5">
              <a href="#">Shop With Points</a>
            </li>
            <li className="leading-5">
              <a href="#">Reload Your Balance</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </section>
        <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">Let Us Help You</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li className="leading-5">
              <a href="#">Your Account</a>
            </li>
            <li className="leading-5">
              <a href="#">Your Orders</a>
            </li>
            <li className="leading-5">
              <a href="#">Shipping Rates and Policies</a>
            </li>
            <li className="leading-5">
              <a href="#">Returns and Replacements</a>
            </li>
            <li className="leading-5">
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li className="leading-5">
              <a href="#">Amazon Assistant</a>
            </li>
            <li className="leading-5">
              <a href="#">Help</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="bg-gray-800 w-full flex justify-center items-center mx-auto py-4 lg:py-6 border-t border-gray-700">
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <img src="/logo-white.png" className="w-24" alt="Logo"></img>
          </a>
        </div>
      </div>
      <div className="bg-black w-full flex justify-center items-center mx-auto py-2 border-t border-gray-700">
        <ul className="text-white flex text-base">
          <li>
            <a href="#" className="font-bold mr-2">
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="#" className="font-bold mr-2">
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="#" className="font-bold mr-2">
              Interest-Based Ads
            </a>
          </li>
          <li>
            <span className="text-gray-400">
              &copy; 1996-2021, Amazon.com, Inc. or its affiliates
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
