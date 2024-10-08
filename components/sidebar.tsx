'use client';
import Image from "@/node_modules/next/image";
import { SIDENAV_ITEMS } from "@/SIDEBAR_CONSTANTS";
import React from "react";
import SideBarMenuItem from "./sidebar-menu-item";
import classNames from "classnames";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import SideBarMenuGroup from "./sidebar-menu-group";

const SideBar = () => {
  const { toggleCollapse } = useSideBarToggle();
  const asideStyle = classNames(
    "sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem] z-[99999]",
    {
      ["sm:w-[5.4rem] sm:left-0 left-[100%]"]: toggleCollapse,
      ["w-[20rem]"]: !toggleCollapse,
    }
  );
  return (
    <aside className={asideStyle}>
      <div className="sidebar-top flex relative items-center py-5 px-3.5">
        <Image
          alt=""
          src="/DZ_logos_white.png"
          className="w-12 mx-3.5 min-h-fit"
          width={35}
          height={35}
        ></Image>
        {!toggleCollapse && (
          <h3 className="pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max light:text-[#">
            DZ Dahsboard
          </h3>
        )}
      </div>
      <nav className="flex flex-col gap-2 transition duration-30 ease-in-out">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item, index) => {
            return (
              <SideBarMenuGroup key={index} menuGroup={item} />
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
