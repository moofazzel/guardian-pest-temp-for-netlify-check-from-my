"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

const InputField = ({
  name,
  label,
  type = "text",
  placeholder,
  required,
  validation,
  errorMessage,
  defaultValue,
  disabled,
  labelClassName,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  // Watch the value of the specific field
  const fieldValue = watch(name);

  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <div className="relative flex items-center gap-5">
        {label && (
          <label
            htmlFor={name}
            className={` ${labelClassName} block text-sm font-medium text-white  min-w-fit ${
              errors[name] ? "text-red-500" : ""
            }`}
          >
            {label}
          </label>
        )}
        <input
          {...register(name, {
            required: required && (errorMessage || "This field is required"),
            ...validation,
            disabled: disabled,
          })}
          type={
            type === "password" && !showPassword ? "password" : type || "text"
          }
          id={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          // disabled={disabled}
          className={` ${className} block w-full rounded-md border-0 py-1.5 text-white bg-dark2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 flex-grow ${
            errors[name] ? "border-red-500 focus:ring-red-500 ring-red-500" : ""
          }`}
        />
        {type === "password" && fieldValue && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
          >
            {showPassword ? <>hide</> : <>show</>}
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
