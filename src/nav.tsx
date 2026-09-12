import logotext from "../../B14-A05-DevStack-main/assets/logo-text.png";
import "./index.css";
export function Nav() {
  return (
    <>
      <div className="border-[1px] border-gray-100 text-[16px] font-medium text-[#334155] sticky top-0 bg-white z-50">
        <div className="flex justify-between items-center gap-4 container mx-auto p-5">
          <img src={logotext} alt="" />
          <div className="flex justify-between items-center gap-6 list-none">
            <li className="text-[#DB2777]">
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Technology</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button>Sign In</button>
            <button className="bg-[#DB2777] w-[90px] h-[39px] rounded-2xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
