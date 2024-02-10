import React from "react";
import NavigationLinks from "./NavigationLinks";

const Header = () => {
  return (
    <div >
      <header className=" text-white p-4 pt-0 ">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-0">
          <a href="/">Diego Bahamondez</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Chilean developer making the internet magic happen.
        </p>
      </header>
      <NavigationLinks />
    </div>
  );
};

export default Header;
