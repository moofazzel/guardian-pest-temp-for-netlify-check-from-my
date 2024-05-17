import { auth } from "@/auth";
import Link from "next/link";
import Logout from "./logout";

const Footer = async () => {
  const session = await auth();

  return (
    <div>
      {session?.user ? (
        <Logout />
      ) : (
        <Link href="/login" className="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Footer;
