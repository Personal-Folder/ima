"use client";

const CircleLogoHolder = ({ logo }: { logo: string }) => {
  return (
    <div className="relative text-white flex items-center justify-center">
      <div className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-[#ff1919]"></div>

      <div className="absolute sm:w-[100px] sm:h-[100px] size-20 rounded-full bg-[#FF0000] border-8 border-white flex items-center justify-center">
        <i className={`${logo} text-5xl object-center`} />
      </div>
    </div>
  );
};

export default CircleLogoHolder;
