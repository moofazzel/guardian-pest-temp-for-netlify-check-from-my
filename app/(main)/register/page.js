import logo2 from "@/public/logo2.png";

import Image from "next/image";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8 pt-[150px] md:pt-[220px] bg-dark">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-center">
          <Image className="ml-1 " src={logo2} alt="logo" />
        </div>

        <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-white">
          Register to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

// const page = () => {
//   return (
//     <div className="pt-[150px] md:pt-[220px] bg-dark h-screen text-white flex items-center justify-center text-5xl ">
//       402
//     </div>
//   );
// };

// export default page;
