import Link from "next/link";

const DashNavLink = ({ children, title, link = "#" }) => {
  return (
    <Link
      href={link}
      class="text-white/50 p-4 font-bold text-base lg:text-2xl inline-flex justify-center rounded-md lg:hover:bg-gray-800 hover:text-white smooth-hover relative group"
    >
      {children}

      <span className="text-[10px] absolute text-nowrap px-2 left-10f bg-gray-800 text-center -top-[16px] hidden group-hover:block rounded-md  lg:invisible">
        <span className="size-2 bg-gray-800 block absolute rotate-[46deg] top-[23px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
        {title}
      </span>

      <span className="invisible lg:visible text-lg absolute left-12 bg-gray-800 py-3.5 w-[100px] top-0 hidden group-hover:block rounded-r-md">
        {title}
      </span>
    </Link>
  );
};

export default DashNavLink;
