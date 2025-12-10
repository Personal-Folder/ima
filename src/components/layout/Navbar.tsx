"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js Link
import { useRouter, usePathname } from "next/navigation"; // Use Next.js Router and Pathname
import SecondaryButton from "../common/SecondaryButton";
import Button from "../common/Button";
import { isActive } from "../../../utils/is-route-active";

const NavBar = ({ red }: { red?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Next.js Hooks
  const router = useRouter(); // For programmatic navigation (like useNavigate)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textClass = red ? "text-red-500" : "text-primary";

  // Helper function to determine if a link is active
  const getNavLinkClass = (href: string) =>
    isActive(href) ? `${textClass} font-bold` : `${textClass}`;

  // Helper function for navigation
  const handleNavigation = (route: string) => {
    window.scrollTo(0, 0);
    router.push(route);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className="hidden lg:flex items-center z-30 top-0 left-0 right-0 mt-5 h-[90px] rounded-[30px]"
        style={{
          background: "#FFFFFF4D",
          backdropFilter: "blur(20px)",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <div className="flex px-4 items-center justify-between w-full">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-[70px] h-[70px] object-contain"
            />
          </Link>

          {/* NavLinks, Buttons, and Selector */}
          <div className="flex items-center px-1 justify-end w-full gap-x-3 md:gap-x-7 lg:gap-x-10 text-md xl:text-lg">
            {/* Nav Links using Next.js Link and usePathname */}
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            <Link href="/aboutUs" className={getNavLinkClass("/aboutUs")}>
              About Us
            </Link>
            <Link href="/gallery" className={getNavLinkClass("/gallery")}>
              Gallery
            </Link>
            <Link href="/news" className={getNavLinkClass("/news")}>
              News
            </Link>
            <Link href="/insights" className={getNavLinkClass("/insights")}>
              Insights
            </Link>
            <div className="flex items-center gap-2">
              <SecondaryButton
                onClick={() => {
                  handleNavigation("/contact"); // Use Next.js router.push
                }}
                text="Contact Us"
                red={red}
              />
              <Button
                onClick={() => {
                  handleNavigation("/donate"); // Use Next.js router.push
                }}
                text="Donate"
                logo="/heart.svg"
              />
            </div>
            {/* <select
              className="border-none bg-transparent text-primary cursor-pointer opacity-75 ml-4"
              defaultValue="EN"
            >
              <option value="EN" className="text-black">
                EN
              </option>
              <option value="AR" className="text-black">
                AR
              </option>
            </select> */}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className="lg:hidden flex items-center justify-between w-full px-5 fixed top-0 z-50 overflow-hidden"
        style={{
          background: "#FFFFFF4D",
          backdropFilter: "blur(20px)",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-[70px] h-[60px] py-1 object-contain"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="text-3xl text-primary focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center text-center gap-y-4"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Mobile Links using Next.js Link and usePathname */}
          <Link
            href="/"
            onClick={toggleMenu}
            className={`${getNavLinkClass("/")} text-xl`}
          >
            Home
          </Link>
          <Link
            href="/aboutUs"
            onClick={toggleMenu}
            className={`${getNavLinkClass("/aboutUs")} text-xl`}
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            onClick={toggleMenu}
            className={`${getNavLinkClass("/gallery")} text-xl`}
          >
            Gallery
          </Link>
          <Link
            href="/news"
            onClick={toggleMenu}
            className={`${getNavLinkClass("/news")} text-xl`}
          >
            News
          </Link>
          <Link
            href="/insights"
            onClick={toggleMenu}
            className={`${getNavLinkClass("/insights")} text-xl`}
          >
            Insights
          </Link>

          <SecondaryButton
            onClick={() => {
              toggleMenu();
              handleNavigation("/contact");
            }}
            text="Contact Us"
            red={false}
          />
          <Button
            onClick={() => {
              toggleMenu();
              handleNavigation("/donate");
            }}
            text="Donate"
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
