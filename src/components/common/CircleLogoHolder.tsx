"use client";

const CircleLogoHolder = ({ logo }: { logo: string }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Circle */}
      <div className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-[#ff1919]"></div>

      {/* Inner Circle */}
      <div className="absolute sm:w-[100px] sm:h-[100px] size-20 rounded-full bg-[#FF0000] border-8 border-white flex items-center justify-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="size-20 object-center object-scale-down"
        />
      </div>
    </div>
  );
};

export default CircleLogoHolder;
