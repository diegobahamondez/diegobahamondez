import React from "react";
import NavigationLinks from "./NavigationLinks";

const Header = () => {
  return (
    <div >
      <header className=" text-white p-4 pt-0 ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl mt-0">
          <a href="/">Diego Bahamondez</a>
        </h1>
        <h2 className="pt-10 lg:pt-20 text-lg font-medium tracking-tight text-gray-200 sm:text-xl">
          Software Developer
        </h2>
      </header>
      <NavigationLinks />
    </div>
  );
};

export default Header;
