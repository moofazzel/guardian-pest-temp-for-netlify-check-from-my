import logo2 from "@/public/logo2.png";
import Image from "next/image";

import LoginForm from "./loginForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8 pt-[150px] md:pt-[220px] bg-dark">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-center">
          <Image className="ml-1 " src={logo2} alt="" />
        </div>

        <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

//  {
//    errorMessage && (
//      <>
//        {/* <ExclamationCircleIcon className="w-5 h-5 text-red-500" /> */}
//        <p className="text-sm text-red-500">{errorMessage}</p>
//      </>
//    );
//  }
