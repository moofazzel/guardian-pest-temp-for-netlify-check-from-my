import { Noto_Serif } from "next/font/google";

import GoogleAnalytics from "@/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import dbConnect from "@/lib/mongodb";
import { SessionProvider } from "next-auth/react";
import "../globals.css";

const inter = Noto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Guardian",
  description: "Guardian Pest Control of Brevard County",
};

export default async function RootLayout({ children, session }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </SessionProvider>
        {/* google analytics */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
