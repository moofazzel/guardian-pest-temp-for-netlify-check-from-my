import { Noto_Serif } from "next/font/google";

import { auth } from "@/auth";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Navigation from "@/components/Dashboard/Navigation";
import dbConnect from "@/lib/mongodb";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import "../globals.css";

const inter = Noto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Guardian",
  description: "Guardian Pest Control of Brevard County",
};

export default async function DashboardLayout({ children }) {
  await dbConnect();

  const session = await auth();

  if (!session?.user) redirect("/login");

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div class="bg-dark min-h-screen flex items-center justify-center">
            <div className="container sm:p-6 sm:my-2 sm:mx-4 rounded-2xl bg-dark2">
              {/* <!-- Navigation --> */}
              <DashboardNavbar />

              <div class="bg-dark2 flex-1 flex flex-col space-y-5 lg:space-y-4 lg:flex-row lg:space-x-6 ">
                <Navigation />

                <div className="rounded-xl pt-[150px]f md:pt-[220px]f bg-dark w-full px-5 text-white">
                  {children}
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </SessionProvider>

        {/* google analytics */}
        {/* <GoogleAnalytics /> */}
      </body>
    </html>
  );
}
