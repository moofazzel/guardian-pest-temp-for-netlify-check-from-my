import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <span className="sr-only">Learn More about Sea of green</span>
      <Image className="" src={logo} alt="sea of green logo" />
    </Link>
  );
};

export default Logo;
