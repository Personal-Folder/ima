"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SecondaryButton from "../common/SecondaryButton";
import Button from "../common/Button";
import { isActive } from "../../../utils/is-route-active";

const NavBar = ({ red }: { red?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect scroll and background color
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past header
      const isScrolled = window.scrollY > 400;
      setScrolled(isScrolled);

      // Determine if we're on a white/light background
      const element = document.elementFromPoint(window.innerWidth / 2, 120);
      const bgColorStyle = window.getComputedStyle(
        element || document.body
      ).backgroundColor;

      // Simple check: if background is white or light, use dark text
      const isLightBg =
        bgColorStyle &&
        (bgColorStyle.includes("rgb(255") ||
          bgColorStyle.includes("white") ||
          bgColorStyle.includes("rgb(250") ||
          bgColorStyle.includes("rgb(245"));

      setBgColor(isLightBg ? "light" : "dark");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textClass = red
    ? "text-red-500"
    : scrolled && bgColor === "light"
    ? "text-slate-800"
    : "text-white";

  const getNavLinkClass = (href: string) =>
    isActive(href)
      ? `${textClass} font-bold transition-colors duration-200`
      : `${textClass} transition-colors duration-200 hover:opacity-80`;

  const handleNavigation = (route: string) => {
    window.scrollTo(0, 0);
    router.push(route);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News" },
    { href: "/statistics", label: "Insights" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden lg:flex items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-5 h-[90px] rounded-[30px] transition-all duration-300"
        style={{
          background: scrolled
            ? bgColor === "light"
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(20, 20, 30, 0.8)"
            : "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0px 8px 20px rgba(0, 0, 0, 0.12)"
            : "0px 4px 8px rgba(0, 0, 0, 0.08)",
          width: "calc(100% - 40px)",
          maxWidth: "none",
        }}
      >
        <div className="flex px-4 items-center justify-between w-full h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:scale-105 transition-transform"
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-[70px] h-[70px] object-contain"
            />
          </Link>

          {/* NavLinks, Buttons */}
          <div className="flex items-center px-1 justify-end w-full gap-x-3 md:gap-x-7 lg:gap-x-10 text-md xl:text-lg">
            {/* Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getNavLinkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-2">
              <SecondaryButton
                onClick={() => {
                  handleNavigation("/contact-us");
                }}
                text="Contact Us"
                red={red}
              />
              <Button
                onClick={() => {
                  handleNavigation("/donate");
                }}
                text="Donate"
                logo="/heart.svg"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="lg:hidden flex items-center justify-between w-full px-5 fixed top-0 z-50 h-16 transition-all duration-300"
        style={{
          background: scrolled
            ? bgColor === "light"
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(20, 20, 30, 0.9)"
            : "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
            : "0px 2px 4px rgba(0, 0, 0, 0.05)",
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
          className={`text-3xl focus:outline-none transition-colors duration-200 ${
            red
              ? "text-red-500"
              : scrolled && bgColor === "light"
              ? "text-slate-800"
              : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center text-center gap-y-4 top-16"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${getNavLinkClass(link.href)} text-xl`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4 gap-y-2">
            <SecondaryButton
              onClick={() => {
                toggleMenu();
                handleNavigation("/contact-us");
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
              logo="/heart.svg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
