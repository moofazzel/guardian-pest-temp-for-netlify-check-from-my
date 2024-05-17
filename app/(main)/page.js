import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

import fullsavvysoftware from "@/public/savvylogo.png";
import savvysoftware from "@/public/savvysoftware.svg";
import truth from "@/public/truth.png";

export default function Home() {
  return (
    <div className="bg-[#e5e6e3d3] min-h-screen pt-12 md:pt-32 pb-12 md:pb-20 px-6 sm:px-8 md:px-10">
      <div className="flex flex-col items-center  pt-24 md:pt-28 justify-between mx-auto max-w-6xl max- h-[700px] bg-gradient-to-b from-[#fcfcf5] to-[#d7d8d6] rounded-2xl border-2 border-[#dde0e2] box-shadow">
        <div className="w-full max-w-xl px-4">
          <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl">
            Website <br /> Under <br /> Construction
          </h1>

          <div className="flex items-center justify-center mb-3 w-[150px] md:w-[200px] mx-auto">
            <Image className="w-full ml-1" src={fullsavvysoftware} alt="" />
          </div>
          <p className="max-w-lg mx-auto text-base text-center text-gray-600 sm:text-lg">
            Our website is under construction. We&apos;ll be back soon! While we
            fix this feel free to contact <strong>Guardian </strong> at <br />{" "}
            <span className="inline-block py-1">
              Email:{" "}
              <a
                className="font-semibold underline "
                href="mailto:support@guardianbrevard.com"
              >
                support@guardianbrevard.com
              </a>
            </span>{" "}
            <br />{" "}
            <span>
              Call:{" "}
              <a className="font-semibold underline" href="tel:321-632-3563">
                {" "}
                321-632-3563
              </a>
            </span>
            .
          </p>

          <div className="flex justify-center ">
            <Link
              href={"/calculator"}
              className="text-center bg-[#10d045] px-5 py-1.5 mt-2 rounded font-bold"
            >
              Price Calculator
            </Link>
          </div>

          {/* social icons */}
          <div className="flex justify-center gap-4 mt-7 mb-1 *:text-4xl">
            {/* Email */}
            {/* <Link href="mailto:johndoe@example.com">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </Link> */}
            {/* facebook */}
            <Link
              href={
                "https://www.facebook.com/pestcontrolservice?mibextid=eQY6cl"
              }
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
            </Link>
            {/* Twitter X */}
            <Link
              className=""
              target="_blank"
              href={"https://twitter.com/GuardianPestFL"}
            >
              <FaSquareXTwitter />
            </Link>
            <Link
              target="_blank"
              href={"https://truthsocial.com/@GuardianPest"}
            >
              <Image className="size-[32px] mt-[2px]" src={truth} alt="" />
            </Link>
            {/* threads */}
            {/* <Link target="_blank" href={"#"}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM294.2 244.3c19.5 9.3 33.7 23.5 41.2 40.9c10.4 24.3 11.4 63.9-20.2 95.4c-24.2 24.1-53.5 35-95.1 35.3h-.2c-46.8-.3-82.8-16.1-106.9-46.8C91.5 341.8 80.4 303.7 80 256v-.1-.1c.4-47.7 11.5-85.7 33-113.1c24.2-30.7 60.2-46.5 106.9-46.8h.2c46.9 .3 83.3 16 108.2 46.6c12.3 15.1 21.3 33.3 27 54.4l-26.9 7.2c-4.7-17.2-11.9-31.9-21.4-43.6c-19.4-23.9-48.7-36.1-87-36.4c-38 .3-66.8 12.5-85.5 36.2c-17.5 22.3-26.6 54.4-26.9 95.5c.3 41.1 9.4 73.3 26.9 95.5c18.7 23.8 47.4 36 85.5 36.2c34.3-.3 56.9-8.4 75.8-27.3c21.5-21.5 21.1-47.9 14.2-64c-4-9.4-11.4-17.3-21.3-23.3c-2.4 18-7.9 32.2-16.5 43.2c-11.4 14.5-27.7 22.4-48.4 23.5c-15.7 .9-30.8-2.9-42.6-10.7c-13.9-9.2-22-23.2-22.9-39.5c-1.7-32.2 23.8-55.3 63.5-57.6c14.1-.8 27.3-.2 39.5 1.9c-1.6-9.9-4.9-17.7-9.8-23.4c-6.7-7.8-17.1-11.8-30.8-11.9h-.4c-11 0-26 3.1-35.6 17.6l-23-15.8c12.8-19.4 33.6-30.1 58.5-30.1h.6c41.8 .3 66.6 26.3 69.1 71.8c1.4 .6 2.8 1.2 4.2 1.9l.1 .5zm-71.8 67.5c17-.9 36.4-7.6 39.7-48.8c-8.8-1.9-18.6-2.9-29-2.9c-3.2 0-6.4 .1-9.6 .3c-28.6 1.6-38.1 15.5-37.4 27.9c.9 16.7 19 24.5 36.4 23.6l-.1-.1z"></path>
                </svg>
              </Link> */}
            {/* <Link target="_blank" href={"#"}>
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
                </svg>
              </Link> */}
          </div>
        </div>

        <p className="flex items-center justify-center gap-1 text-sm text-center text-gray-600">
          Powered by <Image className="w-5 ml-1" src={savvysoftware} alt="" />
          <a className="font-bold " href="https://savvy-software.com">
            Savvy Software
          </a>
          .
        </p>
      </div>
    </div>
  );
}
