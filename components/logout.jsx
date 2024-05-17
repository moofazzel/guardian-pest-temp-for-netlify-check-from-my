"use client";
import { signOut } from "next-auth/react";
const Logout = ({ children }) => {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: "/" });
      }}
    >
      {children}
    </button>
  );
};

export default Logout;
