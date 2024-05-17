import { useFormContext } from "react-hook-form";

const TextAreaField = ({
  name,
  label,
  placeholder,
  required,
  validation,
  errorMessage,
  rows = 3,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="gap-5 mb-4">
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium text-white mb-2 text-left ${
            errors[name] ? "text-red-500" : ""
          }`}
        >
          {label}
        </label>
      )}
      <textarea
        defaultValue={defaultValue}
        {...register(name, {
          required: required && (errorMessage || "This field is required"),
          ...validation,
        })}
        id={name}
        rows={rows}
        placeholder={placeholder}
        className={`block w-full rounded-md border-0 py-1.5 text-white bg-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 ${
          errors[name] ? "border-red-500 focus:ring-red-500 ring-red-500" : ""
        }`}
      ></textarea>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextAreaField;
