"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="flex flex-col items-center w-full bg-secondary border-t-2 border-secondary">
      {/* Footer Content */}
      <div className=" flex flex-col lg:flex-row w-2/3 justify-between items-center py-8 px-4 lg:px-8 space-y-6 lg:space-y-0 mx-auhref text-center">
        {/* Left Column - Navigation Links */}
        <div className="grid grid-cols-2 gap-1 lg:w-1/3 text-center lg:text-left">
          <Link
            href="/"
            className={
              pathname === "/" ? "text-primary font-bold" : "text-primary"
            }
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={
              pathname === "/" ? "text-primary font-bold" : "text-primary"
            }
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/" ? "text-primary font-bold" : "text-primary"
            }
          >
            Contact Us
          </Link>
          <Link
            href="/gallery"
            className={
              pathname === "/" ? "text-primary font-bold" : "text-primary"
            }
          >
            Gallery
          </Link>
          <Link
            href="/news"
            className={
              pathname === "/" ? "text-primary font-bold" : "text-primary"
            }
          >
            News
          </Link>
          <Link
            href="/donate"
            className={
              pathname === "/" ? "text-primary font-bold" : "text-primary"
            }
          >
            Donate
          </Link>
        </div>

        {/* Center Column - Logo */}
        <div className="flex justify-center w-full lg:w-1/3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="size-[100px] lg:size-[120px] object-contain"
          />
        </div>

        {/* Right Column - Arabic Text */}
        <div className="text-center lg:text-right text-[#E5C6C6] font-medium lg:w-1/3 text-sm lg:text-base">
          <p>
            الجمعية الطبية الإسلامية: منظمة خيرية تسعى لتقديم الخدمات الطبية
            والإنسانية بجودة عالية وفقاً للقيم الإسلامية، بهدف دعم المجتمعات
            المحتاجة وتعزيز الصحة والرفاه.
          </p>
        </div>
      </div>

      {/* Powered By Section */}
      <div className="w-full text-center mt-4 lg:mt-8 py-4 text-sm text-primary border-t-2 border-primary  font-bold">
        <p>
          Powered by AlMooradi © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
