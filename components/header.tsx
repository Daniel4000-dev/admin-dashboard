import React from "react";
import { BsList } from "react-icons/bs";
import classNames from "classnames";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import UserNav from "./userNav";

const Header = () => {
  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();

  const sideBarToggle = () => {
    invokeToggleCollapse();
  };

  const headerStyle = classNames(
    "fixed bg-[#31353d] w-full z-[99999] px-4 shadow-sm shadow-slate-500/40 pl-[20rem]",
    {
      ["sm:pl-[20rem]"]: !toggleCollapse,
      ["sm:pl-[5.6rem]"]: toggleCollapse,
    }
  );

  return (
    <header className={headerStyle}>
      <div className="flex items-center justify-between h-16">
        <button
          onClick={sideBarToggle}
          className="order-2 sm:order-1 bg-[#3a3f48] text-[#6e768e] hover:bg-white ml-3 rounded-md h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center"
        >
          <BsList></BsList>
        </button>
        <div className="order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center">
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
