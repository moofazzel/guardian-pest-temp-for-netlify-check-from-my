import Link from "next/link";
import { FaBookOpen, FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { RiArrowGoBackFill, RiCustomerService2Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import Logout from "../logout";
import DashNavLink from "./DashNavLink";
import LoginLogout from "./LoginLogout";

const Navigation = () => {
  return (
    <div class="bg-dark px-2 lg:px-4 py-2 lg:py-10 rounded-xl flex lg:flex-col justify-between lg:h-screen mt-4">
      <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 ">
        <DashNavLink link="/" title="Go back">
          <RiArrowGoBackFill />
        </DashNavLink>

        <DashNavLink link="/dashboard" title="Home">
          <TiHome />
        </DashNavLink>

        <DashNavLink link="/services" title="Services">
          <RiCustomerService2Fill />
        </DashNavLink>

        <DashNavLink link="/blogs" title="Blogs">
          <FaBookOpen />
        </DashNavLink>
      </nav>
      <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <Link
          class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
          href="#"
          title="setting"
        >
          <FaGear />
        </Link>

        <LoginLogout />
      </div>
    </div>
  );
};

export default Navigation;
