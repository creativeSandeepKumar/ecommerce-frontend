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
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Cartside from "./Cart/Cartside";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { opencart } = useSelector((state) => state.others)
  let whilteBoatIcon =
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_small_71d998b6-159b-46d2-8b6f-a91055697fdc.png?v=1693460400";
  let BoatIcon =
    "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434";

  // const [openSidebar, setOpenSidebar] = useState(false);
  const [currenturl, setCurrenturl] = useState();
  const [showNavbar, setShowNavbar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState({
    isopensidebar: false,
    isopencart: false,
  });

  const handleSidebar = () => {
   setOpenSidebar({
    isopensidebar: !openSidebar.isopensidebar
   })
  };

  const handleCart = () => {
   setOpenSidebar({
    isopencart: !openSidebar.isopencart
   })

   if(opencart) {
    dispatch({
      type: "otherreducers/OPENCART",
      payload: false,
    })
   }

  };

  const handleCloseSidebar = () => {
    if (openSidebar.isopensidebar || openSidebar.isopencart) {
      setOpenSidebar({
        isopencart: false
      });
    }
  };

  useEffect(() => {
    if(opencart) {
      handleCart();
    }

    if(accessToken) {
      setHasAccessToken(true);
    }

    if (pathname !== "/") {
      setCurrenturl(true);
    } else {
      setCurrenturl(false);
    }
  }, [pathname, opencart, accessToken]);

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

  useEffect(() => {
    if(hasAccessToken) {
      handleCart();
    }
   
  }, [hasAccessToken])
  

  return (
    <section>
      <div className="py-2 text-center" onClick={handleCloseSidebar}>
        Scrollable content
      </div>
      <nav
        className={`${
          showNavbar || currenturl
            ? "fixed top-0 left-0 border-b-2 py-1 border-gray-600 bg-white"
            : "absolute"
        } w-full z-10`}
      >
        <div
          className="flex items-center justify-between px-4 py-2 w-full"
          onClick={handleCloseSidebar}
        >
          <ul className="flex items-center gap-2">
            <li className="lg:hidden" onClick={(e) => e.stopPropagation()}>
              {openSidebar.isopensidebar ? (
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
                    showNavbar || currenturl ? "text-black" : "text-white"
                  }`}
                />
              )}
            </li>
            <li>
              <img
                onClick={() => router.push("/")}
                src={showNavbar || currenturl ? BoatIcon : whilteBoatIcon}
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
                  showNavbar || currenturl ? "text-black" : "text-white"
                }`}
              />
            </li>
            <li>
              <UserIcon
                className={`text-2xl ${
                  showNavbar || currenturl ? "text-black" : "text-white"
                }`}
              />
            </li>
            <li onClick={(e) => e.stopPropagation()}>
              <BagIcon  onClick={handleCart}
                className={`text-2xl ${
                  showNavbar || currenturl ? "text-black" : "text-white"
                }`}
              />
            </li>
          </ul>
        </div>
        <div
          className={` ${
            openSidebar.isopensidebar
              ? "fixed  w-full z-10"
              : "fixed w-0 -left-20 transition-all duration-500"
          }`}
        >
          <Sidebar
            handleCloseSideNav={handleSidebar}
            openSideNav={openSidebar.isopensidebar}
          />
        </div>
        <div
          className={` ${
            openSidebar.isopencart
              ? "fixed right-0 top-0 w-full z-10"
              : "fixed  top-0 w-0 -right-20 transition-all duration-500"
          }`}
        >
          <Cartside
            handleCloseSideNav={handleCart}
            openSideNav={openSidebar.isopencart}
            accessToken={accessToken}
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
