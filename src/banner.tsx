import banner from "../../B14-A05-DevStack-main/assets/banner-stack.png";
export function Banner() {
  return (
    <>
      <div className="flex justify-between items-center gap-2 container mx-auto p-3">
        <div>
          <h1 className="text-[60px] font-extrabold leading-none">
            Build Your Ideal<br /><span className="bg-gradient-to-r from-orange-400 via-pink-500 to-pink-800 bg-clip-text text-transparent">Development Stack</span>
                  </h1>
          <p className="text-[20px] text-[#475569] mt-6">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your
            <br />
            next project.
          </p>
          <div className="flex gap-3 mt-6">
            <button className="border-2 w-[170px] h-[40px] rounded-[7px] border-none text-white bg-gradient-to-r from-orange-400 via-pink-500 to-pink-800">
              Explore Technologies
            </button>
            <button className="border-1 border-gray-200 w-[170px] h-[40px] rounded-[7px] text-[#475569]">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
}
