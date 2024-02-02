"use client";
import {
  BagIcon,
  BarIcon,
  CrossIcon,
  SearchIcon,
  UserIcon,
} from "@/utils/reactIcons";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  let whilteBoatIcon =
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_small_71d998b6-159b-46d2-8b6f-a91055697fdc.png?v=1693460400";
  let BoatIcon =
    "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434";

  const [showNavbar, setShowNavbar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    console.log("this is cliked");
    setOpenSidebar(!openSidebar);
  };

  const handleCloseSidebar = () => {
    if (openSidebar) {
      setOpenSidebar(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 24) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="py-2 text-center" onClick={handleCloseSidebar}>
        Scrollable content
      </div>
      <ul></ul>
      <nav
        className={`${
          showNavbar ? "fixed top-0 left-0 border-b-2 py-1 border-gray-600 bg-white" : "absolute"
        } w-full z-10`}
      >
        <div
          className="flex items-center justify-between px-4 py-2 w-full"
          onClick={handleCloseSidebar}
        >
          <ul className="flex items-center gap-2">
            <li className="lg:hidden" onClick={(e) => e.stopPropagation()}>
              {openSidebar ? (
                <CrossIcon
                  onClick={handleSidebar}
                  className={`text-xl ${
                    showNavbar ? "text-red-700" : "text-red-700"
                  }`}
                />
              ) : (
                <BarIcon
                  onClick={handleSidebar}
                  className={`text-xl ${
                    showNavbar ? "text-black" : "text-white"
                  }`}
                />
              )}
            </li>
            <li>
              <img
                src={showNavbar ? BoatIcon : whilteBoatIcon}
                alt="whiteBoatIcon"
                className="w-full h-full max-h-6"
              />
            </li>
            <li className="hidden lg:block">
              <DesktopNav />
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <SearchIcon
                className={`text-2xl ${
                  showNavbar ? "text-black" : "text-white"
                }`}
              />
            </li>
            <li>
              <UserIcon
                className={`text-2xl ${
                  showNavbar ? "text-black" : "text-white"
                }`}
              />
            </li>
            <li>
              <BagIcon
                className={`text-2xl ${
                  showNavbar ? "text-black" : "text-white"
                }`}
              />
            </li>
          </ul>
        </div>
        <div
          className={` ${
            openSidebar
              ? "fixed w-full z-10"
              : "fixed w-0 -left-20 transition-all duration-500"
          }`}
        >
          <Sidebar
            handleCloseSideNav={handleSidebar}
            openSideNav={openSidebar}
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
